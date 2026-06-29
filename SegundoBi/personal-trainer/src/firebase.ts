import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwd8WnS6tTxnR815v5-9rVrbbiKDK-ha4",
  authDomain: "app-personal-elizane.firebaseapp.com",
  projectId: "app-personal-elizane",
  storageBucket: "app-personal-elizane.firebasestorage.app",
  messagingSenderId: "169708154506",
  appId: "1:169708154506:web:5f4f6dc0c9b4dd357c8773"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);