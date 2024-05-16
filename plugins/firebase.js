import { initializeApp, getApps } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyB1bth-zDWUdoaEkUa7C7RBh7dBusk2DzQ",
    authDomain: "test-notif-nuxt.firebaseapp.com",
    projectId: "test-notif-nuxt",
    storageBucket: "test-notif-nuxt.appspot.com",
    messagingSenderId: "490637697046",
    appId: "1:490637697046:web:cfc2a760cd21522f301537",
    measurementId: "G-V623MYD3CL",
  };

  const apps = getApps();

  // Initialize Firebase
  const app = !apps.length ? initializeApp(firebaseConfig) : apps[0];
  const analytics = getAnalytics(app);
  const messaging = getMessaging(app);

  nuxtApp.provide("messaging", messaging);
  nuxtApp.provide("analytics", analytics);
});
