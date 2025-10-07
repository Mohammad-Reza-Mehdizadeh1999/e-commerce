import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserHomePage from "./pages/UserHomePage";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./pages/SingleProduct";
import UserOrders from "./pages/UserOrders";
import UserFavorites from "./pages/UserFavorite";
import  UserBasket  from "./pages/UserBasket";
import UserShoppingProgress from "./pages/UserShoppingProgress";
import UserProfileUpdate from "./pages/UserProfile";
import AdminAllUsersPage from "./pages/AdminAllUsersPage";
import AdminDashboard from "./pages/AdminDashboard";

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
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="user/basket" element={<UserBasket />} />
          <Route path="user/favorites" element={<UserFavorites />} />
          <Route path="shop-progress" element={<UserShoppingProgress />} />
          <Route path="user/profile-edit" element={<UserProfileUpdate />} />
          <Route path="user/my-orders" element={<UserOrders />} />
          <Route path="admin/dashboard" element={<AdminDashboard />} />
          <Route path="admin/all-users" element={<AdminAllUsersPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
