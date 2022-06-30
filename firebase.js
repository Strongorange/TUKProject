// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  initializeFirestore,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3_5dABH7v2imYSKwxqpOxYTgTK-dJLt0",
  authDomain: "tukproject-ef3fb.firebaseapp.com",
  projectId: "tukproject-ef3fb",
  storageBucket: "tukproject-ef3fb.appspot.com",
  messagingSenderId: "248336453467",
  appId: "1:248336453467:web:c76794370045ccef05d47e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export const readF = async () => {
  const dbRef = doc(db, "users", "chan");
  const docSnap = await getDoc(dbRef);
  console.log(docSnap.data());
};
