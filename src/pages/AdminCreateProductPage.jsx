import { useState } from "react";
import {  toast } from "react-hot-toast";


import { useForm } from "react-hook-form";
const AdminCreateProductPage = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("ثبت‌نام با موفقیت انجام شد 🎉");
  };
  const onError = (errors) => {
    const errorMessages = Object.values(errors);
    console.log(errorMessages);
    errorMessages.forEach((error) => {
      toast.error(error.message);
    });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <form
      className="flex flex-col min-h-screen items-center justify-center py-10"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="flex flex-col w-[50%] justify-center gap-4">
        <div className="font-semibold text-black dark:text-white">
          محصول جدید
        </div>
        {imagePreview ? (
          <div className="flex items-center justify-center">
          <div className="relative">
            <div onClick={() => setImagePreview(null)} className="bg-red-600 absolute top-2 right-2 flex items-center justify-center w-[28px] h-[28px] cursor-pointer">X</div>
            <img className="w-[800px] h-[480px]" src={imagePreview} alt="" />
          </div>
          </div>
        ) : (
          <label className="relative flex items-center justify-center border-2 border-dashed w-full border-gray-300 rounded-lg bg-white h-32 cursor-pointer hover:border-gray-400 transition">
            <p className="text-gray-500 pointer-events-none">آپلود عکس</p>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer focus:outline-none focus:ring-3 focus:ring-[var(--color-pink-primary)]"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        )}

        <div className="flex flex-col gap-2">
          <label className=" text-black dark:text-white">نام</label>
          <input
            {...register("name", { required: "نام محصول را وارد کنید" })}
            placeholder="نام محصول را وارد کنید"
            className=" p-2 bg-white text-bl border border-[#E5E7EB] text-[#58616C] w-full h-10 rounded-[8px] focus:outline-none focus:ring-3 focus:ring-[var(--color-pink-primary)]"
            type="text"
          />
        </div>
        <div className="flex gap-7 w-full">
          <div className="flex flex-col w-full gap-3">
            <label className=" text-black dark:text-white">قیمت</label>
            <input
              {...register("price", { required: "قیمت را وارد کنید" })}
              className="p-2  bg-white border border-[#E5E7EB] text-[#58616C] w-full h-10 rounded-[8px] focus:outline-none focus:ring-3 focus:ring-[var(--color-pink-primary)]"
              placeholder="قیمت محصول را وارد کنید"
              type="text"
            ></input>

          </div>
          <div className="flex flex-col w-full gap-3">
            <label className=" text-black dark:text-white">برند</label>
            <input
              {...register("brand", { required: "برند را وارد کنید" })}
              className="p-2  bg-white border border-[#E5E7EB]  text-[#58616C] w-full h-10 rounded-[8px] focus:outline-none focus:ring-3 focus:ring-[var(--color-pink-primary)]"
              placeholder="برند محصول را وارد کنید"
              type="text"
            ></input>

          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className=" text-black dark:text-white">توضیحات</label>
          <textarea
            {...register("descreption", {
              required: "توضیحات محصول را وارد کنید",
            })}
            className="h-[143px] border bg-white border-[#E5E7EB] text-[#58616C] rounded-[8px] p-2"
            placeholder="توضیحات محصول را وارد کنید"
          ></textarea>

        </div>
        <div className="flex w-full gap-3">
          <div className="flex flex-col w-full gap-3">
            <label className=" text-black dark:text-white">
              تعداد قابل خرید
            </label>
            <input
              {...register("quantity", {
                required: "تعداد قابل خرید را وارد کنید",
              })}
              className="p-2  bg-white border border-[#E5E7EB] text-[#58616C] w-full h-10 rounded-[8px] focus:outline-none focus:ring-3 focus:ring-[var(--color-pink-primary)]"
              type="number"
              placeholder="تعداد خرید را وارد کنید"
            ></input>

          </div>
          <div className="flex flex-col w-full gap-3">
            <label className=" text-black dark:text-white">موجودی</label>
            <input
              {...register("balance", { required: "موجودی را انتخاب کنید" })}
              className="p-2  bg-white border border-[#E5E7EB] text-[#58616C] w-full h-10 rounded-[8px] focus:outline-none focus:ring-3 focus:ring-[var(--color-pink-primary)]"
              type="number"
              placeholder="موجودی"
            ></input>

          </div>
        </div>
        <div>
          <button className="bg-[#DB2777] rounded-[8px] p-2 text-white">
            ساخت محصول جدید
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdminCreateProductPage;
