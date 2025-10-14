import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function UserHomeProductCard({ product }) {
  return (
    <Link
      to={`/products/${product._id}`}
      className="relative bg-slate-800 rounded-md overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover"
      />

      <button className="absolute top-2 right-2 text-[var(--color-pink-secondry)] hover:text-[var(--color-pink-primary)] cursor-pointer">
        {product.isFavorite ? <FaHeart size={18} /> : <FiHeart size={18} />}
      </button>

      <div className="p-1.5 flex items-center justify-between gap-1 text-white text-sm">
        <span className="truncate max-w-[190px]">{product.name}</span>
        <span className="bg-[var(--color-pink-primary)] text-[12px] px-2 py-1 rounded-full">
          {product.price.toLocaleString()} تومان
        </span>
      </div>
    </Link>
  );
}
