import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzjEWO_mZUHt7cIcKUb6BAhZZUnRj4dvI",
  authDomain: "carefinder-cf436.firebaseapp.com",
  projectId: "carefinder-cf436",
  storageBucket: "carefinder-cf436.appspot.com",
  messagingSenderId: "172233143341",
  appId: "1:172233143341:web:e6545ebba4ec12f88534a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);

export { app, db, auth, storage };
