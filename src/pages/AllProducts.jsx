import FilterProducts from "../components/FilterProducts";
import ProductsPageProductCard from "../components/ProductsPageProductCard";

export default function AllProducts() {
  const products = [
    {
      id: 1,
      image:
        "/public/phone4.webp",
      title: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: "۱۰,۰۰۰",
      description:
        "آیفون 14 پرو دارای صفحه‌نمایش 6.1 اینچی Super Retina XDR است که تجربه بصری فوق‌العاده‌ای را ارائه می‌دهد.",
    },
    {
      id: 2,
      image:
        "/public/phone2.webp",
      title: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: "۱۰,۰۰۰",
      description:
        "آیفون 14 پرو با طراحی زیبا و عملکرد قدرتمند برای کاربرانی که بهترین را می‌خواهند.",
    },
    {
      id: 3,
      image:
        "/public/phone3.jpg",
      title: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: "۱۰,۰۰۰",
      description:
        "این مدل جدید از آیفون با قابلیت‌های پیشرفته‌ی دوربین و پردازنده سریع‌تر ارائه می‌شود.",
    },
    {
      id: 4,
      image:
        "/public/phone1.webp",
      title: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: "۱۰,۰۰۰",
      description:
        "صفحه‌نمایش فوق روشن و کیفیت ساخت بالای آیفون 14 پرو آن را در صدر بازار قرار داده است.",
    },
    {
      id: 5,
      image:
        "/public/phone2.webp",
      title: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: "۱۰,۰۰۰",
      description:
        "این گوشی با دوربین فوق‌العاده و سیستم‌عامل iOS تجربه‌ای روان و لذت‌بخش فراهم می‌کند.",
    },
    {
      id: 6,
      image:
        "/public/phone4.webp",
      title: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: "۱۰,۰۰۰",
      description:
        "یکی از بهترین گوشی‌های سال با کیفیت ساخت بی‌نظیر و امکانات فوق‌العاده.",
    },
  ];

  return (
    <div className="h-screen flex justify-center">
      <FilterProducts />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductsPageProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            brand={product.brand}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
