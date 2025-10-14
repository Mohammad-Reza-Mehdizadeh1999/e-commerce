import { useState } from "react";
import Button from "./ui/Button";
import SingleProductsAddComment from "./SingleProductsAddComment";
import SingleProductsAllComments from "./SingleProductsAllComments";
import SingleProductsRelated from "./SingleProductsRelated";

export default function SingleProductDetails({product , productCategory}) {
  const [detailCategory, setDetailCategory] = useState("comment");

  return (
    <section className="p-6 text-white bg-black w-2/3 mx-auto gap-3 flex justify-between">
      <div className="flex flex-col items-start  gap-5">
        <Button
          onClick={() => setDetailCategory("comment")}
          className={`${
            detailCategory === "comment" ? "text-pink-500" : ""
          } cursor-pointer`}
        >
          ثبت نظر
        </Button>
        <Button
          onClick={() => setDetailCategory("showComments")}
          className={`${
            detailCategory === "showComments" ? "text-pink-500" : ""
          } cursor-pointer`}
        >
          مشاهده نظرات
        </Button>
        <Button
          onClick={() => setDetailCategory("related")}
          className={`${
            detailCategory === "related" ? "text-pink-500" : ""
          } cursor-pointer`}
        >
          محصولات مرتبط
        </Button>
      </div>

      <div className="w-[85%]">
        {detailCategory === "comment" && <SingleProductsAddComment product={product} />}
        {detailCategory === "showComments" && <SingleProductsAllComments product={product} />}
        {detailCategory === "related" && <SingleProductsRelated productCategory={productCategory} product={product} />}
      </div>

      <div></div>
    </section>
  );
}
