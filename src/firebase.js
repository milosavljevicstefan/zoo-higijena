import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAhq_7KdoET3D-NrcMuyQZN6fHzHHp70nQ",
    authDomain: "zoo-higijena-ns.firebaseapp.com",
    databaseURL: "https://zoo-higijena-ns-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "zoo-higijena-ns",
    storageBucket: "zoo-higijena-ns.appspot.com",
    messagingSenderId: "475293179835",
    appId: "1:475293179835:web:796cd075c55682932e6e9e"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app as firebase, auth };
