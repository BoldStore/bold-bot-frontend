import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADS5PKbETzkbNbRcSKiW1Sc8yMZdJCoGU",
  authDomain: "boldbot-e3702.firebaseapp.com",
  projectId: "boldbot-e3702",
  storageBucket: "boldbot-e3702.appspot.com",
  messagingSenderId: "967797322005",
  appId: "1:967797322005:web:6d8a049b779866f106391c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// To use firebase emulator
// connectAuthEmulator(auth, "http://localhost:9099");
