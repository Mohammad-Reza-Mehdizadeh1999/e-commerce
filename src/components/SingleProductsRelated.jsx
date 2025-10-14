import { useEffect, useState } from "react";
import UserHomeProductCard from "./UserHomeProductCard";
import { getAllProducts } from "../api/requests/products";
import toast from "react-hot-toast";

export default function SingleProductsRelated({ productCategory, product }) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setAllProducts(data);
      } catch (error) {
        toast.error("خطا در دریافت محصولات از سرور!");
        console.error("Products Fetch Error:", error);
      }
    };
    fetchProducts();
  }, [productCategory]);

  

  const filteredProductsByCategory = allProducts.filter(
    (item) => 
      item.category?._id === productCategory?._id &&
      item._id !== product?._id
  );

  console.log(filteredProductsByCategory);
  

  return (
    <div className="grid grid-cols-3 w-full gap-5">
      {filteredProductsByCategory.length > 0 ? (
        filteredProductsByCategory.map((product) => (
          <UserHomeProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="col-span-3 text-center text-pink-500">
          محصول مرتبطی یافت نشد
        </p>
      )}
    </div>
  );
}
