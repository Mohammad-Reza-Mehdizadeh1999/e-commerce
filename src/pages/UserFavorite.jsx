import UserHomeProductCard from "../components/UserHomeProductCard";
import { useFavContext } from "../context/useFavContext";

export default function UserFavorites() {

  const { fav } = useFavContext();
  const parsedFav = fav || [];

  return (
    <div className="min-h-screen w-full ">
      <h2 className="text-2xl font-bold text-[var(--color-pink-primary)] text-center my-6">
        محصولات مورد علاقه شما
      </h2>

      <div className="grid grid-cols-3 items-center justify-center gap-10 p-8">
        {parsedFav.map((product) => (
          <UserHomeProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
