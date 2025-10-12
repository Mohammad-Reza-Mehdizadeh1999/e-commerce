import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import UserHomeProductRow from "../components/UserHomeProductRow";
import UserHomeProductCarousel from "../components/UserHomeProductCarousel";
import UserHomeSpecialProductsSection from "../components/UserHomeSpecialProductsSection";
import { getAllProducts } from "../api/requests/products";
import Spinner from "../components/ui/Spinner";
import { useCartContext } from "../context/useCartContext";


export default function UserHomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const cart = useCartContext()


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        
        setProducts(data);
      } catch (error) {
        toast.error("خطا در دریافت محصولات از سرور!");
        console.error("Products Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen text-white">
      <Spinner />
      <p className="text-gray-300 mt-2">در حال بارگذاری محصولات...</p>
    </div>
    );
  }

  const rowItems = products.slice(0, 4);


  return (
    <main>
      <div className="flex justify-center items-center w-full">
        <UserHomeProductRow rowItems={rowItems} />
        <UserHomeProductCarousel rowItems={rowItems} />
      </div>
      <UserHomeSpecialProductsSection products={products} />
    </main>
  );
}
