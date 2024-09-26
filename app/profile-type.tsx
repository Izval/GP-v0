"use client"; // Asegurarnos de que esto sea un Client Component

import { useState } from 'react';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation'; // Usar `next/navigation` en lugar de `next/router`
import { Card, CardContent } from "@/components/ui/card"
import { UserCircle, Building2, PiggyBank, Cog } from "lucide-react"

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

  // Definir los tipos de cuenta y los íconos correspondientes
  const accountTypes = [
    { type: "jugador", label: "Jugador", icon: UserCircle },
    { type: "organizacion", label: "Organización", icon: Building2 },
    { type: "inversionista", label: "Inversionista", icon: PiggyBank },
    { type: "servicio", label: "Prestador de Servicios", icon: Cog },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Selecciona tu tipo de cuenta
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accountTypes.map((account) => (
            <Card
              key={account.type}
              className="bg-gray-900 border-gray-800 hover:border-[#D70D0D] transition-all duration-300 group cursor-pointer"
              onClick={() => handleSelect(account.type)} // Ejecutar handleSelect cuando se selecciona un tipo de cuenta
            >
              <CardContent className="p-6 flex items-center space-x-4">
                <account.icon
                  className="w-12 h-12 text-gray-400 group-hover:text-[#D70D0D] transition-colors duration-300"
                  strokeWidth={1.5}
                />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-300 group-hover:text-[#D70D0D] transition-colors duration-300">
                    {account.label}
                  </h2>
                  <p className="text-gray-400">Selecciona para continuar</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-12 w-full max-w-4xl">
        <div className="h-1 w-full bg-gradient-to-r from-black via-[#D70D0D] to-black rounded-full" />
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>Elige el tipo de cuenta que mejor se adapte a tus necesidades</p>
        <p>Puedes cambiar esta opción más tarde en la configuración de tu cuenta</p>
      </div>
    </div>
  );
};

export default ProfileType;
