import { Outlet } from 'react-router-dom';
import Header from '../Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main
        className="w-80 mx-auto md:w-[768px] xl:w-[1280px] h-auto py-10 px-6 bg-wave-texture bg-no-repeat 
        bg-cover"
      >
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
