import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductInformation from "../components/SingleProductInformation";
import SingleProductDetails from "../components/SingleProductDetails";
import { getSingleProducts } from "../api/requests/singleProduct";

export default function SingleProduct() {
  const [product, setProduct] = useState(null);

  let { productId } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSingleProducts(productId);
        setProduct(data);
        console.log(data);
        
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    if (productId) fetchData();
  }, [productId]);

  if (!product) return <div className="text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-black">
      <SingleProductInformation product={product} />
      <SingleProductDetails product={product} />
    </div>
  );
}
