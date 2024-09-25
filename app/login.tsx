"use client"; // Agregar la directiva para habilitar hooks en Client Components

import { getAuth, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { useRouter } from 'next/navigation'; // Usar `next/navigation` en lugar de `next/router`
import { useEffect, useState } from 'react';

const provider = new GoogleAuthProvider();

const Login = () => {
  const router = useRouter(); // Usar `useRouter` de `next/navigation`
  
  // Definir el tipo de user como 'User | null'
  const [user, setUser] = useState<User | null>(null);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // No más error porque 'user' puede ser 'User'
        router.push('/profile-type'); // Redirige al panel de selección de tipo de cuenta
      }
    });
    return () => unsubscribe();
  }, [auth, router]); // Agregar 'auth' y 'router' como dependencias

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="login-container">
      {!user ? (
        <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
      ) : (
        <p>Redirigiendo...</p>
      )}
    </div>
  );
};

export default Login;
