import { Outlet } from "react-router-dom";
import Header from "../Header";

const SharedLayout = () => {
  return (
    <div className="w-80 mx-auto md:w-[768px] xl:w-[1280px]">
      <Header />
      <main className="h-80 py-10 px-6 bg-wave-texture bg-no-repeat bg-cover">
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
