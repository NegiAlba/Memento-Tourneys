import firebaseClient from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBjTZv0Q7z0BV6o3NG_NpWE8NmJcMf2IKY",
    authDomain: "memento-tourneys.firebaseapp.com",
    projectId: "memento-tourneys",
    storageBucket: "memento-tourneys.appspot.com",
    messagingSenderId: "403506842923",
    appId: "1:403506842923:web:96f311ec41823c4e3f096e",
    measurementId: "G-5GH46X3GNS"
  };

  if (typeof window !== "undefined" && !firebaseClient.apps.length) {
    firebaseClient.initializeApp(CLIENT_CONFIG);
    firebaseClient
      .auth()
      .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
    (window).firebase = firebaseClient;
  }
  
  export { firebaseClient };