// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAyqq0MaYqyvg3FkFB-tOeF2pvNkX1i7W4",
  authDomain: "examen-stephanielazo.firebaseapp.com",
  projectId: "examen-stephanielazo",
  storageBucket: "examen-stephanielazo-1296b.firebasestorage.app", // ⚡ bucket CORRECTO
  messagingSenderId: "104663182658",
  appId: "1:104663182658:web:e2d358b9a7aaf1e7bfecdb"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos los servicios
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


export default app;
