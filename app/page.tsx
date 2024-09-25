import { useRouter } from 'next/navigation'; // Importa useRouter de next/navigation

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
