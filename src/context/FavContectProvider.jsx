import { useState, useEffect } from "react";
import { FavContext } from "./FavContext";

const FavProvider = ({ children }) => {
  const [fav, setfav] = useState([]);

  const addTofav = (product) => {
    setfav((prev) => [...prev, product]);
  };

  const removeFromfav = (id) => {
    setfav((prev) => prev.filter((item) => item.id !== id));
  };

  const clearfav = () => setfav([]);

  useEffect(() => {
    localStorage.setItem("FavContext", JSON.stringify(fav));
  }, [fav]);

  useEffect(() => {
    const saved = localStorage.getItem("FavContext");
    if (saved) {
      setfav(JSON.parse(saved));
    }
  }, []);

  return (
    <FavContext.Provider
      value={{
        fav,
        addTofav,
        removeFromfav,
        clearfav,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};

export default FavProvider;
