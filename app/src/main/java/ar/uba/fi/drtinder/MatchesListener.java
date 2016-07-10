package ar.uba.fi.drtinder;

import android.app.NotificationManager;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.AsyncTask;
import android.support.v4.app.NotificationCompat;

import java.util.concurrent.CountDownLatch;

/**
 * ${FILE}
 * <p>
 * Copyright 2016 Gaston Martinez Gaston.martinez.90@gmail.com
 * <p>
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses
 */
public class MatchesListener {

    private static MatchListenTask task;
    private static boolean running = false;

    static void startListening(String token, Context context) {
        if (running) {
            return;
        }
        running = true;
        task = new MatchListenTask(token, context);
        task.executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR);
    }

    static void stopListening() {
        running = false;
        task.cancel(true);
    }

    private static void sendMatchNotification(String match, Context context) {
        Bitmap bitmap = BitmapFactory.decodeResource(context.getResources(), R.drawable.like);

        Uri defaultSoundUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
        NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(context)
                .setSmallIcon(R.drawable.heart)
                .setLargeIcon(bitmap)
                .setContentTitle("Tienes un nuevo match!")
                .setContentText(match + " tambien te dio like. Hablale ahora")
                .setAutoCancel(true)
                .setSound(defaultSoundUri);

        NotificationManager notificationManager
                = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);

        notificationManager.notify(0 /* ID of notification */, notificationBuilder.build());
    }

    static private class MatchListenTask extends AsyncTask<Void, Void, Boolean> {

        private final String mToken;
        private final Context mContext;

        MatchListenTask(String token, Context context) {
            mToken = token;
            mContext = context;
        }

        @Override
        protected Boolean doInBackground(Void... params) {
            DrTinderLogger.writeLog(DrTinderLogger.INFO, "Started Matches listener");
            while (running) {
                try {
                    Thread.sleep(500);
                    CountDownLatch barrier = new CountDownLatch(1);
                    StringResourcesHandler.executeQuery(StringResourcesHandler.USER_INFO, mToken, v -> {
                        DrTinderLogger.writeLog(DrTinderLogger.DEBG, "EXECUTED");
                        try {
                            Thread.sleep(6000);
                            sendMatchNotification("Un gato", mContext);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }

                        barrier.countDown();
                    });//FIXME
                    barrier.await();
                } catch (InterruptedException e) {
                    DrTinderLogger.writeLog(DrTinderLogger.DEBG, "Listener thread stoped");
                    return true;
                }

            }
            return true;
        }

        @Override
        protected void onPostExecute(final Boolean success) {
        }

        @Override
        protected void onCancelled() {
            DrTinderLogger.writeLog(DrTinderLogger.INFO, "Stoped Matches Listener");
        }
    }
}
