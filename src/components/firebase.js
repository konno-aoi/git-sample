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
  return getToken(messaging, { vapidKey:"BPIlt9AqzsUluNNGJcPi9k65uAzKYGmH_fukyJ_p-4a2uYjIR7gtKFX-NM2jl-ro4VnxveUsLR6WumeQeiBT7lE" })																																										
    .then((currentToken) => {																																										
      if (currentToken) {																																										
        console.log("current token for client: ", currentToken);																																										
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