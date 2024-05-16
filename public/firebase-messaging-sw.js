importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyB1bth-zDWUdoaEkUa7C7RBh7dBusk2DzQ",
  authDomain: "test-notif-nuxt.firebaseapp.com",
  projectId: "test-notif-nuxt",
  storageBucket: "test-notif-nuxt.appspot.com",
  messagingSenderId: "490637697046",
  appId: "1:490637697046:web:cfc2a760cd21522f301537",
  measurementId: "G-V623MYD3CL",
});

const messaging = firebase.messaging();

messaging
  .getToken({
    vapidKey:
      "BD_5Qll_jv3iHYXy_7Rnah8TyO-pwv4m6grtz1OirwPXcU3oujOkAo2ryCDJUBHiO5cxcYRicC_4Sr5qvpX7qzc",
  })
  .then((currentToken) => {
    if (currentToken) {
      console.log("currentToken", currentToken);
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
console.log("masukkk sw");
