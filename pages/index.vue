<template>
  <h1>GetToken</h1>
</template>

<script setup>
onMounted(() => {
  const registerServiceWorker = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
        try {
          if ("serviceWorker" in navigator) {
            const registration = navigator.serviceWorker.register(
              "/firebase-messaging-sw.js"
            );
            console.log(
              "Service Worker registered successfully:",
              registration
            );
          }
        } catch (error) {
          console.error("Service Worker registration failed:", error);
        }
      } else {
        console.log("permisiino ditolak");
      }
    });
  };

  registerServiceWorker();
});
</script>
