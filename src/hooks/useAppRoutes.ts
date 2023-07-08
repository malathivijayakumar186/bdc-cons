import { useRouter } from 'next/router';

const useAppRoutes = () => {
  const router = useRouter();

  const HomePage = () => {
    router.push('/');
  };
  const Home1 = () => {
    router.push('/Home');
  };
  return {
    HomePage,
    Home1
  };
};

export default useAppRoutes;
