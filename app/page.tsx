import { useRouter } from 'next/router';

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
