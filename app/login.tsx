"use client"; // Directiva para habilitar hooks en Client Components

import { signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { useRouter } from 'next/navigation'; // Usar `next/navigation`
import { useEffect, useState } from 'react';
import { auth } from 'app/firebaseConfig'; // Importa auth desde firebaseConfig

const provider = new GoogleAuthProvider();

const Login = () => {
  const router = useRouter(); // Usar `useRouter` de `next/navigation`
  
  // Definir el tipo de user como 'User | null'
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => { // Especifica el tipo
      if (user) {
        setUser(user); // Actualiza el estado con el usuario autenticado
        router.push('/profile-type'); // Redirige al panel de selección de tipo de cuenta
      }
    });
    return () => unsubscribe(); // Limpieza al desmontar el componente
  }, [router]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider); // Inicia sesión con Google
    } catch (error) {
      console.error('Error al iniciar sesión:', error); // Manejo de errores
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
