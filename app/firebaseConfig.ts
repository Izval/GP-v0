// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD8NxQRdX-HoWZYW9MUdoo4Iax8R5gKGbA",
  authDomain: "game-path-0.firebaseapp.com",
  projectId: "game-path-0",
  storageBucket: "game-path-0.appspot.com",
  messagingSenderId: "322098128685",
  appId: "1:322098128685:web:788f7f141f3b2bf75195a4",
  measurementId: "G-PWPKZ7XGSR"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
