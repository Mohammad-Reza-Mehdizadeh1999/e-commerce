import AdminProductCard from "../components/AdminProductCard";

const AdminProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro",
      date: "۳۱ مرداد ۱۴۰۳",
      description:
        "آیفون 14 پرو با نمایشگر 6.1 اینچی Super Retina XDR و تراشه A16 Bionic همراه با سیستم دوربین سه‌گانه و فناوری ProMotion عرضه شده است.",
      price: "10,000,000",
      image: "/phone1.webp",
    },
    {
      id: 2,
      name: "Apple iPhone 14 Pro",
      date: "۳۱ مرداد ۱۴۰۳",
      description:
        "آیفون 14 پرو با نمایشگر 6.1 اینچی Super Retina XDR و تراشه A16 Bionic همراه با سیستم دوربین سه‌گانه و فناوری ProMotion عرضه شده است.",
      price: "10,000,000",
      image: "/phone2.webp",
    },
    {
      id: 3,
      name: "Apple iPhone 14 Pro",
      date: "۳۱ مرداد ۱۴۰۳",
      description:
        "آیفون 14 پرو با نمایشگر 6.1 اینچی Super Retina XDR و تراشه A16 Bionic همراه با سیستم دوربین سه‌گانه و فناوری ProMotion عرضه شده است.",
      price: "10,000,000",
      image: "/phone3.jpg",
    },
    {
      id: 4,
      name: "Apple iPhone 14 Pro",
      date: "۳۱ مرداد ۱۴۰۳",
      description:
        "آیفون 14 پرو با نمایشگر 6.1 اینچی Super Retina XDR و تراشه A16 Bionic همراه با سیستم دوربین سه‌گانه و فناوری ProMotion عرضه شده است.",
      price: "10,000,000",
      image: "/phone4.webp",
    },

  ];

  return (
    <div className="min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <AdminProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default AdminProductPage;
