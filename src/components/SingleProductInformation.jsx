import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { BsInfoCircle, BsShopWindow } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { CiShoppingBasket } from "react-icons/ci";
import StarRating from "./ui/StarRating";
import { useFavContext } from "../context/useFavContext";

const SingleProductInformation = ({ product, productCategory }) => {

  const { addToFav, fav } = useFavContext();

  const handleFavorites = (product) => {
    addToFav(product);
  };

  const isInFav = fav.some((item) => item._id === product?._id);
  console.log(isInFav);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-black text-white rounded-2xl p-6 md:p-10 gap-10">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-white rounded-2xl p-4">
          <img
            src={product.image}
            alt="MacBook Air M2"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center w-full md:w-1/2 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">{product.name}</h2>
          <button
            className="pl-5 text-gray-400 hover:text-pink-500 transition cursor-pointer"
            title="Add to favorites"
          >
            {isInFav ? (
              <FaHeart
                className="text-pink-500"
                size={22}
                onClick={() => handleFavorites(product)}
              />
            ) : (
              <FaRegHeart size={22} onClick={() => handleFavorites(product)} />
            )}
          </button>
        </div>

        <p className="text-gray-400 leading-relaxed">{product.description}</p>

        <p className="text-4xl font-bold mt-4">
          {product.price.toLocaleString()} تومان
        </p>

        <div className="flex items-center justify-between w-1/2 text-gray-300 mt-3 text-sm">
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <FiShoppingCart />
              <span className="font-semibold">تعداد :</span> {product.quantity}{" "}
              عدد
            </p>
            <p className="flex items-center gap-2">
              <CiShoppingBasket />
              <span className="font-semibold">موجودی :</span>{" "}
              {product.countInStock}
            </p>
            <p className="flex items-center gap-2">
              <FaStar />
              <span className="font-semibold">امتیاز :</span>{" "}
              {Math.round(product.rating * 100) / 100}
            </p>
          </div>

          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <BsShopWindow />
              <span className="font-semibold">برند :</span>{" "}
              {productCategory?.name}
            </p>
            <p className="flex items-center gap-2">
              <BsInfoCircle /> زمان بروز رسانی :{" "}
              {new Date(product.updatedAt).toLocaleDateString("en-US")}
            </p>
            <p className="flex items-center gap-2">
              <FaStar /> نظرات : {product.numReviews}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <StarRating rating={product.rating || 0} />
          <span className="text-gray-400 text-sm">
            {product.numReviews} نظر{" "}
          </span>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <button className="bg-pink-600 hover:bg-pink-700 transition text-white px-6 py-2 rounded-xl font-medium">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductInformation;
