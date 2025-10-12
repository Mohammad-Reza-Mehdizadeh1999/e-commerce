import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductInformation from "../components/SingleProductInformation";
import SingleProductDetails from "../components/SingleProductDetails";
import { getSingleProducts } from "../api/requests/singleProduct";
import { getProductCategory } from "../api/requests/productCategory";

export default function SingleProduct() {
  const [product, setProduct] = useState(null);
  const [productCategory, setProductCategory] = useState(null);

  let { productId } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSingleProducts(productId);
        setProduct(data);
        console.log(data);
        if(data){
          const category = await getProductCategory(data.category)
          console.log(data.category);
          
          setProductCategory(category)
          
        }
        
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    if (productId) fetchData();
  }, [productId]);

  if (!product) return <div className="text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-black">
      <SingleProductInformation product={product} productCategory={productCategory} />
      <SingleProductDetails product={product} productCategory={productCategory}/>
    </div>
  );
}
