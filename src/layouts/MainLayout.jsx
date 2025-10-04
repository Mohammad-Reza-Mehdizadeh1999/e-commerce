import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = ({children}) => {
  return (
    <div className="flex h-screen bg-black text-white">
      <div className="w-16 border-l border-zinc-800 flex flex-col justify-between">
        <Navbar />
      </div>

      <div className="flex-1 p-4 flex justify-center items-center">
        <Outlet />


      </div>
    </div>
  );
};

export default MainLayout;
