// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjdn0TBo-Gu-ZjG8zpP-VTEy6P-ZY1J_k",
  authDomain: "peters-frontend-world.firebaseapp.com",
  projectId: "peters-frontend-world",
  storageBucket: "peters-frontend-world.firebasestorage.app",
  messagingSenderId: "247673452816",
  appId: "1:247673452816:web:57bee4f2f5282a900b0d95",
  measurementId: "G-BZ56D76Q5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
export const analytics = getAnalytics(app);

export default app;
