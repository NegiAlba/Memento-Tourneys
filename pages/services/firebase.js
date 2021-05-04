import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBjTZv0Q7z0BV6o3NG_NpWE8NmJcMf2IKY",
//   authDomain: "memento-tourneys.firebaseapp.com",
//   projectId: "memento-tourneys",
//   storageBucket: "memento-tourneys.appspot.com",
//   messagingSenderId: "403506842923",
//   appId: "1:403506842923:web:96f311ec41823c4e3f096e",
//   measurementId: "G-5GH46X3GNS"
// };

export default function initFirebase () {
  if(!firebase.apps.length){
    firebase.initializeApp(config)
  }
  console.log('Firebase is initialised');
}