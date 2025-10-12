import { useState } from "react";
import TextArea from "./ui/TextArea ";
import toast from "react-hot-toast";
import { addProductReview } from "../api/requests/addComment";

export default function SingleProductsAddComment({product}) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rating || !comment.trim()) {
      toast.error("لطفاً امتیاز و نظر خود را وارد کنید!");
      return;
    }

    try {
      setLoading(true);
      const reviewData = {
        rating: Number(rating),
        comment,
      };

      await addProductReview(product._id , reviewData);

      toast.success("نظر شما با موفقیت ثبت شد ✅");
      setRating("");
      setComment("");
    } catch (err) {
      console.error("Error submitting review:", err);
      toast.error("ثبت نظر با خطا مواجه شد!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0e0e0e] text-gray-100 p-6 rounded-lg max-w-3xl mx-auto flex flex-col gap-4 w-full"
    >
      <div className="flex flex-col gap-2">
        <label className="text-gray-300">امتیاز</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="bg-[#151515] border border-gray-700 rounded-md p-2 text-gray-200 focus:outline-none focus:border-pink-500"
        >
          <option value="">انتخاب امتیاز</option>
          <option value="1">۱</option>
          <option value="2">۲</option>
          <option value="3">۳</option>
          <option value="4">۴</option>
          <option value="5">۵</option>
        </select>
      </div>

      <TextArea
        label="نظر"
        placeholder="نظر خود را وارد نمایید"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        type="submit"
        className="bg-pink-600 hover:bg-pink-700 text-white rounded-md py-2 px-4 mt-2 transition-all"
      >
        {loading ? "در حال ارسال..." : "ثبت نظر"}
      </button>
    </form>
  );
}
