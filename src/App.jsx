import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserHomePage from "./pages/UserHomePage";
import AllProducts from "./pages/AllProducts";
import SingleProducts from "./pages/SingleProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="user/home" element={<UserHomePage />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="products/:productId" element={<SingleProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
