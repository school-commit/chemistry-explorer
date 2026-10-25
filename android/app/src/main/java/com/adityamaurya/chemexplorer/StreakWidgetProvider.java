package com.adityamaurya.chemexplorer;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.view.View;
import android.widget.RemoteViews;

import org.json.JSONObject;

public class StreakWidgetProvider extends AppWidgetProvider {

    @Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        for (int appWidgetId : appWidgetIds) {
            updateAppWidget(context, appWidgetManager, appWidgetId);
        }
    }

    public static void refreshAllWidgets(Context context) {
        AppWidgetManager manager = AppWidgetManager.getInstance(context);
        int[] ids = manager.getAppWidgetIds(new ComponentName(context, StreakWidgetProvider.class));
        if (ids != null && ids.length > 0) {
            for (int id : ids) {
                updateAppWidget(context, manager, id);
            }
        }
    }

    static void updateAppWidget(Context context, AppWidgetManager appWidgetManager, int appWidgetId) {
        RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.streak_widget_layout);

        int streak = 0;
        int xp = 0;
        int dailyDone = 0;
        String bgChoice = "default";
        String lang = "hi";

        try {
            SharedPreferences prefs = context.getSharedPreferences("CapacitorStorage", Context.MODE_PRIVATE);
            String rawState = prefs.getString("CHEM_EXPLORER_V1_STATE", null);
            if (rawState != null) {
                JSONObject obj = new JSONObject(rawState);
                streak = obj.optInt("streak", 0);
                xp = obj.optInt("xp", 0);
                dailyDone = Math.min(10, Math.max(0, obj.optInt("dailyCardsCount", 0)));
                lang = obj.optString("cardLang", "hi");
                JSONObject user = obj.optJSONObject("user");
                if (user != null) {
                    bgChoice = user.optString("widgetBg", "default");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        boolean isHi = !"en".equalsIgnoreCase(lang);
        String streakLabel = isHi ? ("🔥 " + streak + " दिन की स्ट्रीक!") : ("🔥 " + streak + " Day Streak!");
        String dailyLabel = isHi ? ("📇 " + dailyDone + " / 10 दैनिक फ्लैशकार्ड") : ("📇 " + dailyDone + " / 10 Daily Flashcards");

        views.setTextViewText(R.id.widget_streak_text, streakLabel);
        views.setTextViewText(R.id.widget_xp, "⚡ " + xp + " XP");
        views.setTextViewText(R.id.widget_daily_text, dailyLabel);
        views.setProgressBar(R.id.widget_progress_bar, 10, dailyDone, false);

        int bgRes = getBackgroundResource(context, bgChoice);
        if (bgRes != 0) {
            views.setImageViewResource(R.id.widget_bg_image, bgRes);
            views.setViewVisibility(R.id.widget_bg_image, View.VISIBLE);
            views.setViewVisibility(R.id.widget_scrim, View.VISIBLE);
            views.setTextColor(R.id.widget_streak_text, Color.WHITE);
            views.setTextColor(R.id.widget_daily_text, Color.WHITE);
            views.setTextColor(R.id.widget_subtext, Color.WHITE);
        } else {
            views.setViewVisibility(R.id.widget_bg_image, View.GONE);
            views.setViewVisibility(R.id.widget_scrim, View.GONE);
            views.setTextColor(R.id.widget_streak_text, Color.parseColor("#111111"));
            views.setTextColor(R.id.widget_daily_text, Color.parseColor("#111111"));
            views.setTextColor(R.id.widget_subtext, Color.parseColor("#4D493C"));
        }

        Intent intent = new Intent(context, MainActivity.class);
        PendingIntent pendingIntent = PendingIntent.getActivity(
                context, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        views.setOnClickPendingIntent(R.id.widget_root_layout, pendingIntent);

        appWidgetManager.updateAppWidget(appWidgetId, views);
    }

    private static int getBackgroundResource(Context context, String choice) {
        if (choice == null || choice.equals("default")) return 0;
        String c = choice.toLowerCase().trim();
        for (int i = 1; i <= 6; i++) {
            if (c.equals("widget" + i) || c.equals(String.valueOf(i))) {
                return context.getResources().getIdentifier("widget_bg_" + i, "drawable", context.getPackageName());
            }
        }
        return 0;
    }
}
