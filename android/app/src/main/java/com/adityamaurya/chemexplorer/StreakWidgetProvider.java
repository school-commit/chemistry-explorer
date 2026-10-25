package com.adityamaurya.chemexplorer;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
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

    static void updateAppWidget(Context context, AppWidgetManager appWidgetManager, int appWidgetId) {
        RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.streak_widget_layout);

        // Read saved app state (Capacitor Preferences -> SharedPreferences "CapacitorStorage")
        int streak = 1;
        int xp = 0;
        String bgChoice = "default";

        try {
            SharedPreferences prefs = context.getSharedPreferences("CapacitorStorage", Context.MODE_PRIVATE);
            String rawState = prefs.getString("CHEM_EXPLORER_V1_STATE", null);
            if (rawState != null) {
                JSONObject obj = new JSONObject(rawState);
                streak = obj.optInt("streak", 1);
                xp = obj.optInt("xp", 0);
                JSONObject user = obj.optJSONObject("user");
                if (user != null) {
                    bgChoice = user.optString("widgetBg", "default");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        views.setTextViewText(R.id.widget_streak_text, streak + " Day Streak");
        views.setTextViewText(R.id.widget_xp, "\u26A1 " + xp + " XP");

        // Optional photo background (widget_bg_1 / widget_bg_2), otherwise default dark background
        int bgRes = getBackgroundResource(context, bgChoice);
        if (bgRes != 0) {
            views.setImageViewResource(R.id.widget_bg_image, bgRes);
            views.setViewVisibility(R.id.widget_bg_image, View.VISIBLE);
        } else {
            views.setViewVisibility(R.id.widget_bg_image, View.GONE);
        }

        // Open App on click
        Intent intent = new Intent(context, MainActivity.class);
        PendingIntent pendingIntent = PendingIntent.getActivity(context, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        views.setOnClickPendingIntent(R.id.widget_root_layout, pendingIntent);

        appWidgetManager.updateAppWidget(appWidgetId, views);
    }

    // "widget1" / "1" -> widget_bg_1, "widget2" / "2" -> widget_bg_2, anything else -> 0 (default background)
    private static int getBackgroundResource(Context context, String choice) {
        if (choice == null) return 0;
        String c = choice.toLowerCase();
        String name = null;
        if (c.contains("2")) {
            name = "widget_bg_2";
        } else if (c.contains("1")) {
            name = "widget_bg_1";
        }
        if (name == null) return 0;
        return context.getResources().getIdentifier(name, "drawable", context.getPackageName());
    }
}
