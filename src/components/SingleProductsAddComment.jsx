import { useState } from "react";
import TextArea from "./ui/TextArea ";

export default function SingleProductsAddComment() {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, comment });
    alert("نظر شما ثبت شد ✅");
    setRating("");
    setComment("");
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
        ثبت نظر
      </button>
    </form>
  );
}
