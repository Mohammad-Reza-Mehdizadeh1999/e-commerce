import { useState, useEffect } from "react";
import { CartContext } from "./cartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cartContext");
    return saved ? JSON.parse(saved) : [];
  });

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  const clearCart = () => setCart([]);

  useEffect(() => {
    localStorage.setItem("cartContext", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const saved = localStorage.getItem("cartContext");
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
