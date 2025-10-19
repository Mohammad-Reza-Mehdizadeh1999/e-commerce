import { useState, useEffect } from "react";
import { favContext } from "./favContext";

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
    localStorage.setItem("favContext", JSON.stringify(fav));
  }, [fav]);

  useEffect(() => {
    const saved = localStorage.getItem("favContext");
    if (saved) {
      setfav(JSON.parse(saved));
    }
  }, []);

  return (
    <favContext.Provider
      value={{
        fav,
        addTofav,
        removeFromfav,
        clearfav,
      }}
    >
      {children}
    </favContext.Provider>
  );
};

export default FavProvider;
