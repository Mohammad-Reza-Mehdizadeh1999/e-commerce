import UserHomeProductCard from "./UserHomeProductCard";
import Button from "../components/ui/Button";

export default function UserHomeSpecialProductsSection({ products = [] }) {
  return (
    <section className=" w-full px-8 mt-16 mb-5">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">محصولات ویژه</h2>
        <div>
          <Button to={`/products`} className="bg-[var(--color-pink-primary)] text-white text-lg px-4 py-1 rounded-full">
            فروشگاه
          </Button>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <UserHomeProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
