// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdOTUpzE86X9GRVZsJrMk1-xYKbTTpJyM",
  authDomain: "mindful-kids-4315d.firebaseapp.com",
  projectId: "mindful-kids-4315d",
  storageBucket: "mindful-kids-4315d.appspot.com",  // 🔧 fix typo here!
  messagingSenderId: "93270210092",
  appId: "1:93270210092:web:59a4675aa903bef4a88389"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
