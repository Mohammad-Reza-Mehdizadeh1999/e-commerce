import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="flex  bg-black text-white">
      <Toaster position="top-right" />
      <div className="w-16 flex flex-col justify-between">
        <Navbar />
      </div>

      <div className=" p-4 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
