import { useState } from "react";
import UserHomeProductCard from "./UserHomeProductCard";

export default function SingleProductsRelated() {
  const [products] = useState([
    {
      id: 1,
      title: "Apple iPhone 14 Pro ",
      price: 1000000,
      description:
        "آیفون 14 پرو دارای صفحه نمایش Super Retina XDR، تراشه A16 Bionic و سیستم دوربین سه گانه.",
      rate: 4.8,
      count: 52,
      available: 87,
      brand: "Apple",
      updatedAt: "چند لحظه قبل",
      comments: 4252,
      image: "/public/phone1.webp",
    },
    {
      id: 2,
      title: "Apple iPad Pro",
      price: 450000,
      description: "آیپد پرو با نمایشگر بزرگ و کارایی بالا برای تولید محتوا.",
      rate: 4.6,
      count: 10,
      available: 22,
      brand: "Apple",
      updatedAt: "یک ساعت قبل",
      comments: 102,
      image: "/public/phone2.webp",
    },
    {
      id: 3,
      title: "Samsung Galaxy S23 ",
      price: 850000,
      description:
        "موبایل پرچمدار با دوربین قوی و صفحه نمایش با نرخ تازه‌سازی بالا.",
      rate: 4.5,
      count: 34,
      available: 32,
      brand: "Samsung",
      updatedAt: "دیروز",
      comments: 310,
      image: "/public/phone3.jpg",
    },
    {
      id: 4,
      title: "Xiaomi Redmi Note 12",
      price: 120000,
      description: "گوشی اقتصادی با باتری بزرگ و عملکرد مناسب.",
      rate: 4.1,
      count: 120,
      available: 65,
      brand: "Xiaomi",
      updatedAt: "۳ روز قبل",
      comments: 58,
      image: "/public/phone4.webp",
    },
    {
      id: 5,
      title: "OnePlus Nord 3",
      price: 300000,
      description: "گوشی میان‌رده با رابط کاربری روان و شارژ سریع.",
      rate: 4.2,
      count: 21,
      available: 38,
      brand: "OnePlus",
      updatedAt: "هفته گذشته",
      comments: 12,
      image: "/public/phone4.webp",
    },
    {
      id: 6,
      title: "Google Pixel 7",
      price: 420000,
      description: "دوربین ممتاز و تجربه‌ی اندروید خالص.",
      rate: 4.4,
      count: 9,
      available: 120,
      brand: "Google",
      updatedAt: "۲ روز قبل",
      comments: 77,
      image: "/public/phone2.webp",
    },
    {
      id: 7,
      title: "Google Pixel 7",
      price: 420000,
      description: "دوربین ممتاز و تجربه‌ی اندروید خالص.",
      rate: 4.4,
      count: 9,
      available: 120,
      brand: "Google",
      updatedAt: "۲ روز قبل",
      comments: 77,
      image: "/public/phone1.webp",
    },
    {
      id: 8,
      title: "Google Pixel 7",
      price: 420000,
      description: "دوربین ممتاز و تجربه‌ی اندروید خالص.",
      rate: 4.4,
      count: 9,
      available: 120,
      brand: "Google",
      updatedAt: "۲ روز قبل",
      comments: 77,
      image: "/public/phone4.webp",
    },
  ]);
  return (
    <div className="grid grid-cols-3 gap-7">
      {products.slice(0, 6).map((product) => (
        <UserHomeProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
