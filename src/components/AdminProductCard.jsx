import { FaArrowLeft } from "react-icons/fa";

const AdminProductCard = ({ name, date, description, price, image }) => {
  return (
    <div className="flex items-center justify-between bg-[#1E293B] gap-8 text-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="w-1/3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
        <p className="text-sm text-gray-300 leading-6 w-[90%] line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <p className="font-bold mt-1">{price} تومان</p>
          <button className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-md px-4 py-2 w-fit mt-2 transition">
            مشاهده بیشتر <FaArrowLeft className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
