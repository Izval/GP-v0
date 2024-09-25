"use client"; // Agrega esto en la primera línea

import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleEnter = () => {
    router.push('/login'); // Redirige a la página de login
  };

  return (
    <div className="home-container">
      <button onClick={handleEnter} className="enter-button">Entrar</button>
    </div>
  );
};

export default HomePage;
