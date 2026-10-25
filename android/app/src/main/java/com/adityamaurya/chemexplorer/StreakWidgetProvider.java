package com.adityamaurya.chemexplorer;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
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

        // Read Capacitor localStorage / SharedPreferences
        int streak = 1;
        int xp = 0;
        String bgChoice = "default";

        try {
            SharedPreferences prefs = context.getSharedPreferences("CapacitorStorage", Context.MODE_PRIVATE);
            String rawState = prefs.getString("CHEM_EXPLORER_V1_STATE", null);
            if (rawState != null) {
                JSONObject obj = new JSONObject(rawState);
                if (obj.has("streak")) streak = obj.getInt("streak");
                if (obj.has("xp")) xp = obj.getInt("xp");
                if (obj.has("user")) {
                    JSONObject user = obj.getJSONObject("user");
                    if (user.has("widgetBg")) bgChoice = user.getString("widgetBg");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        views.setTextViewText(R.id.widget_streak_text, streak + " Day Streak");
        views.setTextViewText(R.id.widget_xp, "⚡ " + xp + " XP");

        // Open App on click
        Intent intent = new Intent(context, MainActivity.class);
        PendingIntent pendingIntent = PendingIntent.getActivity(context, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        views.setOnClickPendingIntent(R.id.widget_root_layout, pendingIntent);

        appWidgetManager.updateAppWidget(appWidgetId, views);
    }
}
