import { useState, useEffect } from "react";
import { FavContext } from "./FavContext";

const FavProvider = ({ children }) => {
    
  const [fav, setFav] = useState(() => {
    const saved = localStorage.getItem("FavContext");
    return saved ? JSON.parse(saved) : [];
  });

  const addToFav = (product) => {
    setFav((prev) => [...prev, product]);
  };

  const removeFromFav = (id) => {
    setFav((prev) => prev.filter((item) => item.id !== id));
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
        removeFromFav,
        clearFav,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};

export default FavProvider;
