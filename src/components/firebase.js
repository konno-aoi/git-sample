import { initializeApp } from "firebase/app";																																										
import { getMessaging, getToken, onMessage } from "firebase/messaging";																																										
																																										
const firebaseConfig = {
  apiKey: "AIzaSyDsbox3yocR2jPj5AsLT6hbQpEl5bp3MZE",
  authDomain: "pwa-53229.firebaseapp.com",
  projectId: "pwa-53229",
  storageBucket: "pwa-53229.appspot.com",
  messagingSenderId: "740067812168",
  appId: "1:740067812168:web:75a8d0cfbe0b3d19f6897d",
  measurementId: "G-50YPV1RDRE"
};																																									
																																										
initializeApp(firebaseConfig);																																										
const messaging = getMessaging();	
requestPermission();																																									
																																										
export const requestForToken = () => {																																										
  return getToken(messaging, { vapidKey:"BNnsUpw_khVjwPiV4YIbH9a29y0ZNlqJteTURgBtbvEeTRuSCW0frnrpDVMVep5Z3obQ6Qf52h5dT3GemQaePdc" })																																										
    .then((currentToken) => {																																										
      if (currentToken) {																																										
        console.log("current token for client: ", currentToken);		
        document.getElementById("cre_token").value = currentToken;																																							
      } else {																																										
        console.log("No registration token available. Request permission to generate one.");																																										
      }																																										
    })																																										
    .catch((err) => {																																										
      console.log("An error occurred while retrieving token. ", err);																																										
    });																																										
};																																										
																																										
export const onMessageListener = () =>																																										
  new Promise((resolve) => {																																										
    onMessage(messaging, (payload) => {																																										
      console.log("payload", payload);																																										
      resolve(payload);																																										
    });																																										
  });																																										

  function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    })
  };

  const axios = require('axios');

// ↓GitHubのアクセストークンを入力
const accessToken = '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';

// リポジトリ情報を取得するAPIエンドポイント
const apiUrl = 'https://api.github.com/repos/konno-aoi/git-sample';

// axiosでAPIリクエストを送信
axios.get(apiUrl, {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
})
.then((response) => {
    console.log('リポジトリ情報:', response.data);
})
.catch((error) => {
    console.error('エラー:', error.message);
});