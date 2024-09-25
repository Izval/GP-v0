"use client"; // Agregar la directiva para habilitar hooks en Client Components

import { useState } from 'react';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation'; // Usar `next/navigation` en lugar de `next/router`

const ProfileType = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null); // Añadir tipado explícito para TypeScript
  const router = useRouter();
  const auth = getAuth();
  const db = getFirestore();

  // Tipar explícitamente el parámetro 'type' como string
  const handleSelect = async (type: string) => {
    setSelectedType(type);
    const user = auth.currentUser;

    if (user) {
      try {
        // Guarda el tipo de cuenta en Firestore
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          email: user.email,
          accountType: type,
        });
        router.push('/dashboard'); // Redirige al panel principal
      } catch (error) {
        console.error('Error guardando el tipo de cuenta:', error);
      }
    }
  };

  return (
    <div className="profile-type-container">
      <h2>Selecciona tu tipo de cuenta</h2>
      <button onClick={() => handleSelect('jugador')}>Jugador</button>
      <button onClick={() => handleSelect('organizacion')}>Organización</button>
      <button onClick={() => handleSelect('inversionista')}>Inversionista</button>
      <button onClick={() => handleSelect('servicio')}>Prestador de Servicios</button>
    </div>
  );
};

export default ProfileType;
