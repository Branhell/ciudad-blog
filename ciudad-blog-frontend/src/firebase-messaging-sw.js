importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCjv2kWrAcc6MO0gVA7QYf8nJJHGyUeuoc",
  authDomain: "ecobits-notificaciones.firebaseapp.com",
  projectId: "ecobits-notificaciones",
  storageBucket: "ecobits-notificaciones.firebasestorage.app",
  messagingSenderId: "617778702549",
  appId: "1:617778702549:web:ec643cd54d73145a08da5c",
  measurementId: "G-X1BEZ97MWN"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensaje en segundo plano:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/EcoBits_Logo.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
