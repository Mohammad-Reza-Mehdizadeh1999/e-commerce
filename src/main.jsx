import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import CartProvider from "./context/CartContextProvider";
import FavProvider from "./context/FavContectProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavProvider>
  </BrowserRouter>
);
