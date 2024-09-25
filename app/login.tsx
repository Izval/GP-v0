import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const provider = new GoogleAuthProvider();

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        router.push('/profile-type'); // Redirige al panel de selección de tipo de cuenta
      }
    });
    return () => unsubscribe();
  }, []);

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
