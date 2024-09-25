import { useState } from 'react';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';

const ProfileType = () => {
  const [selectedType, setSelectedType] = useState(null);
  const router = useRouter();
  const auth = getAuth();
  const db = getFirestore();

  const handleSelect = async (type) => {
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
