import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserHomePage from "./pages/UserHomePage";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./pages/SingleProduct";
import UserOrders from "./pages/UserOrders";
import UserFavorites from "./pages/UserFavorite";
import UserBasket from "./pages/UserBasket";
import UserShoppingProgress from "./pages/UserShoppingProgress";
import UserProfileUpdate from "./pages/UserProfile";
import AdminAllUsersPage from "./pages/AdminAllUsersPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminCreateProductPage from "./pages/AdminCreateProductPage";
import AdminAllOrders from "./pages/AdminAllOrders";
import UserCheckout from "./pages/UserCheckout";
import AdminProductPage from "./pages/AdminProductPage";
import UserSingleOrder from "./pages/UserSingleOrder";

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
          <Route path="products/:productId/" element={<SingleProduct />} />
          <Route path="user/basket" element={<UserBasket />} />
          <Route path="user/favorites" element={<UserFavorites />} />
          <Route path="user/shop-progress" element={<UserShoppingProgress />} />
          <Route path="user/checkout" element={<UserCheckout />} />
          <Route path="user/profile-edit" element={<UserProfileUpdate />} />
          <Route path="user/my-orders" element={<UserOrders />} />
          <Route path="user/my-orders/:orderId" element={<UserSingleOrder />} />
          <Route path="admin/dashboard" element={<AdminDashboard />} />
          <Route path="admin/all-users" element={<AdminAllUsersPage />} />
          <Route path="admin/create-product" element={<AdminCreateProductPage />} />
          <Route path="admin/products" element={<AdminProductPage />} />
          <Route path="admin/products/edit/:productId" element={<AdminCreateProductPage />} />
          <Route path="admin/orders" element={<AdminAllOrders />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
