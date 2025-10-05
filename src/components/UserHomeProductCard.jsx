import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function UserHomeProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="relative bg-slate-800 rounded-md overflow-hidden ">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-50 object-cover"
      />

      <button className="absolute top-2 right-2 text-[var(--color-pink-primary)] hover:text-[var(--color-pink-secondry)] cursor-pointer">
        <FiHeart size={18} />
      </button>

      <div className="p-1.5 flex items-center justify-between text-white text-sm">
        <span className="truncate">{product.title}</span>
        <span className="bg-[var(--color-pink-primary)] text-xs px-2 py-1 rounded-full">
          {product.price.toLocaleString()} تومان
        </span>

      </div>
    </Link>
  );
}
