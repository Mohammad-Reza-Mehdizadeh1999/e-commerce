import { FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const ProductsPageProductCard = ({ image, title, brand, price, description }) => {
  return (
    <div className=" rounded-lg shadow-sm overflow-hidden hover:shadow-md transition w-full">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute bottom-2 right-2 bg-pink-800 text-white text-xs px-2 py-1 rounded-full">
          {brand}
        </span>
        <button className="absolute top-2 left-2 text-gray-400 hover:text-pink-600 transition">
          <FiHeart size={20} />
        </button>
      </div>

      <div className="bg-[#2C2F39] text-white p-3 flex flex-col justify-between min-h-[150px]">
        <div>
          <p className="text-pink-500 text-sm font-semibold mb-1">{price} تومان</p>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-gray-300 text-sm line-clamp-2 leading-6">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <FaShoppingCart
            size={20}
            className="cursor-pointer text-white hover:text-pink-400 transition"
          />
          <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-1 rounded-md transition">
            مشاهده بیشتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageProductCard;
