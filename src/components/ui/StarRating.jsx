import { FaStar } from "react-icons/fa";

const StarRating = ({ rating = 0 }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <FaStar
          key={i}
          size={18}
          className={`${
            i <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
