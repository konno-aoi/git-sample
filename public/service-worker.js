importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging.js');

// Firebaseの初期化
const firebaseConfig = {
    apiKey: "AIzaSyDsbox3yocR2jPj5AsLT6hbQpEl5bp3MZE",
    authDomain: "pwa-53229.firebaseapp.com",
    projectId: "pwa-53229",
    storageBucket: "pwa-53229.appspot.com",
    messagingSenderId: "740067812168",
    appId: "1:740067812168:web:75a8d0cfbe0b3d19f6897d",
    measurementId: "G-50YPV1RDRE"
  };

// Firebase Messagingのインスタンスを作成
const messaging = firebase.messaging();

// 通知の受信などの設定を追加
self.addEventListener('push', event => {
    const options = {
      body: event.data.text(),
    };
  
    event.waitUntil(
      self.registration.showNotification('新しいメッセージ', options)
    );
  });
  

// Service Workerのライフサイクルイベントをハンドル
self.addEventListener('install', event => {
  // インストール時の処理
});

self.addEventListener('fetch', event => {
  // リクエストの処理
});


// service-worker.js

self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache')
        .then(cache => {
          return cache.addAll([
            '/',
            '/index.html',
            '/styles.css',
            '/app.js'
          ]);
        })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request);
        })
    );
  });
  