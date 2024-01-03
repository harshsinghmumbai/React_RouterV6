import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer className="bg-red-700 w-full h-40">
        <h1 className="text-7xl font-bold text-white font-sans">
          this is my footer section in react routerV6 WebApplication project
        </h1>
      </footer>
    </>
  );
};

export default MainHeader;
