import { useState, useEffect } from "react";
import { FavContext } from "./FavContext";
import toast from "react-hot-toast";

const FavProvider = ({ children }) => {

  const [fav, setFav] = useState(() => {
    const saved = localStorage.getItem("FavContext");
    return saved ? JSON.parse(saved) : [];
  });

  const addToFav = (product) => {
    const exists = fav.some((item) => item._id === product._id);

    if (exists) {

      setFav((prev) => prev.filter((item) => item._id !== product._id));
      toast.success("از لیست علاقه مندی های شما حذف شد")

    } else {

      setFav((prev) => [...prev, product]);
      toast.success("به لیست علاقه مندی های شما اضافه شد")

    }
  };


  const clearFav = () => setFav([]);

  useEffect(() => {
    localStorage.setItem("FavContext", JSON.stringify(fav));
  }, [fav]);

  return (
    <FavContext.Provider
      value={{
        fav,
        addToFav,
        clearFav,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};

export default FavProvider;
