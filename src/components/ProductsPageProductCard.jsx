import { FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductsPageProductCard = ({
  id,
  image,
  name,
  brand,
  price,
  description,
}) => {
  return (
    <Link
      to={`/products/${id}`}
      className=" rounded-lg shadow-sm overflow-hidden hover:shadow-md transition w-full"
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <span className="absolute bottom-2 right-2 bg-pink-800 text-white text-xs px-2 py-1 rounded-full">
          {brand}
        </span>
        <button className="absolute top-2 left-2 text-gray-400 hover:text-pink-600 transition">
          <FiHeart size={20} />
        </button>
      </div>

      <div className="bg-[#2C2F39] text-white p-3 flex flex-col justify-between min-h-[150px]">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold mb-1">{name}</h3>
            <p className="text-pink-500 text-sm font-semibold mb-1">
              {price.toLocaleString()} تومان
            </p>
          </div>
          <p className="text-gray-300 text-sm line-clamp-2 leading-6">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-1 rounded-md transition">
            مشاهده بیشتر
          </button>
          <FaShoppingCart
            size={20}
            className="cursor-pointer text-white hover:text-pink-400 transition"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProductsPageProductCard;
