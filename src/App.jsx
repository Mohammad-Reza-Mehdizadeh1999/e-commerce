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
import AdminUpdateProduct from "./pages/AdminUpdateProduct";
import AdminSingleOrderDetails from "./pages/AdminSingleOrderDetails";
import PrivateRoute from "./layouts/PrivateRoute";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<UserHomePage />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="products/:productId/" element={<SingleProduct />} />
          <Route path="user/basket" element={<PrivateRoute><UserBasket /></PrivateRoute>} />
          <Route path="user/favorites" element={<PrivateRoute><UserFavorites /></PrivateRoute>} />
          <Route path="user/shop-progress" element={<PrivateRoute><UserShoppingProgress /></PrivateRoute>} />
          <Route path="user/checkout" element={<PrivateRoute><UserCheckout /></PrivateRoute>} />
          <Route path="user/profile-edit" element={<PrivateRoute><UserProfileUpdate /></PrivateRoute>} />
          <Route path="user/my-orders" element={<PrivateRoute><UserOrders /></PrivateRoute>} />
          <Route path="user/my-orders/:orderId" element={<PrivateRoute><UserSingleOrder /></PrivateRoute>} />


          <Route path="admin/dashboard" element={<PrivateRoute adminOnly><AdminDashboard /></PrivateRoute>} />
          <Route path="admin/all-users" element={<PrivateRoute adminOnly><AdminAllUsersPage /></PrivateRoute>} />
          <Route path="admin/create-product" element={<PrivateRoute adminOnly><AdminCreateProductPage /></PrivateRoute>} />
          <Route path="admin/products" element={<PrivateRoute adminOnly><AdminProductPage /></PrivateRoute>} />
          <Route path="admin/products/edit/:productId" element={<PrivateRoute adminOnly><AdminUpdateProduct/></PrivateRoute>} />
          <Route path="admin/orders" element={<PrivateRoute adminOnly><AdminAllOrders /></PrivateRoute>} />
          <Route path="admin/orders/:orderId" element={<PrivateRoute adminOnly><AdminSingleOrderDetails /></PrivateRoute>}/>

          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />

      </Route>
      </Routes>
    </>
  );
}

export default App;
