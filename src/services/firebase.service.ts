import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';
// import { getDatabase } from 'firebase/database';
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const APP = initializeApp(firebaseConfig);

// export const CLOUD_FIRESTORE = getFirestore(APP);
// export const REALTIME_DATABASE = getDatabase(APP);
// export const AUTHENTICATION = getAuth(APP);
// export const STORAGE = getStorage(APP);