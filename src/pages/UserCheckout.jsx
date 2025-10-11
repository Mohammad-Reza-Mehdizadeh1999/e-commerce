import ShoppingProgressTableRow from "../components/ShoppingProgressTableRow";
import CheckoutDetails from "../components/CheckoutDetails";

const UserCheckout = () => {
  const products = [
    {
      id: 1,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack_AV1_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&.v=1660744504195",
      title: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: "۱۰,۰۰۰",
      description:
        "آیفون 14 پرو دارای صفحه‌نمایش 6.1 اینچی Super Retina XDR است که تجربه بصری فوق‌العاده‌ای را ارائه می‌دهد.",
    },
    {
      id: 2,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack_AV1_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&.v=1660744504195",
      title: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: "۱۰,۰۰۰",
      description:
        "آیفون 14 پرو با طراحی زیبا و عملکرد قدرتمند برای کاربرانی که بهترین را می‌خواهند.",
    },
    {
      id: 3,
      image:
        "https://cdn.dxomark.com/wp-content/uploads/medias/post-139880/Apple-iPhone-14-Pro-featured-image-packshot-review.jpg",
      title: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: "۱۰,۰۰۰",
      description:
        "این مدل جدید از آیفون با قابلیت‌های پیشرفته‌ی دوربین و پردازنده سریع‌تر ارائه می‌شود.",
    },
    {
      id: 4,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack_AV1_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&.v=1660744504195",
      title: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: "۱۰,۰۰۰",
      description:
        "صفحه‌نمایش فوق روشن و کیفیت ساخت بالای آیفون 14 پرو آن را در صدر بازار قرار داده است.",
    },
    {
      id: 5,
      image:
        "https://cdn.dxomark.com/wp-content/uploads/medias/post-139880/Apple-iPhone-14-Pro-featured-image-packshot-review.jpg",
      title: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: "۱۰,۰۰۰",
      description:
        "این گوشی با دوربین فوق‌العاده و سیستم‌عامل iOS تجربه‌ای روان و لذت‌بخش فراهم می‌کند.",
    },
    {
      id: 6,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack_AV1_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&.v=1660744504195",
      title: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: "۱۰,۰۰۰",
      description:
        "یکی از بهترین گوشی‌های سال با کیفیت ساخت بی‌نظیر و امکانات فوق‌العاده.",
    },
  ];
  return (
    <div className="flex flex-row gap-20 mr-18 mt-15  ">
      <div className=" w-1/2 h-[20%] border border-[var(--color-gray)] p-8">

        <table className=" w-full text-sm text-gray-700 table-fixed  p-5 ">
          <thead className=" text-gray-900 dark:text-[var(--color-white)] border-b-1">
            <tr className="  ">
              <th className="px-4 py-2 text-right">عکس</th>
              <th className="px-4 py-2 text-right">نام محصول</th>
              <th className="px-4 py-2 text-center">تعداد</th>
              <th className="px-4 py-2 text-left">قیمت</th>
              <th className="px-4 py-2 text-left">قیمت نهایی</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ShoppingProgressTableRow
                image={product.image}
                name={product.title}
                quantity={1}
                price={Number(product.price)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <CheckoutDetails
        OrderNumber="123456"
        name="ممد"
        email="mmd@example.com"
        address="تهران خ آزادی نبش کوچه قنبری پلاک ۱۹۲"
        howToPay="کارت به کارت "
        price="۱۰۰,۰۰۰ "
        tax="۱۰,۰۰۰ "
        m="۱۰,۰۰۰ "
        finalPrice="۱۲۰,۰۰۰ "
      />
    </div>
  );
};

export default UserCheckout;
