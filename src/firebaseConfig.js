// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZm1odBUx8SOrvVFQlyDcoXGX0rtmO1TE",
  authDomain: "velvet-cfe96.firebaseapp.com",
  projectId: "velvet-cfe96",
  storageBucket: "velvet-cfe96.firebasestorage.app",
  messagingSenderId: "583477230764",
  appId: "1:583477230764:web:59cdd5510caeb103833309"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };