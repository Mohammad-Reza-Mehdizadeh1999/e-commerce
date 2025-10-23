import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { createProduct, uploadImage } from "../api/requests/adminCreateProduct";
import { getAllCategories } from "../api/requests/productCategory";

export default function AdminCreateProductPage() {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error("خطا در دریافت دسته‌بندی‌ها:", error);
        toast.error("❌ خطا در دریافت دسته‌بندی‌ها");
      }
    };
    fetchCategories();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (!selectedFile) {
        toast.error("لطفاً عکس محصول را انتخاب کنید");
        return;
      }

      const uploadResponse = await uploadImage(selectedFile);
      const imageName = uploadResponse.image;

      const productData = {
        name: data.name,
        price: Number(data.price),
        category: data.category,
        description: data.description,
        quantity: Number(data.quantity),
        image: imageName,
      };

      await createProduct(productData);

      toast.success("✅ محصول با موفقیت ساخته شد!");

      reset();
      setSelectedFile(null);
      setImagePreview(null);
    } catch (error) {
      console.error(error);
      toast.error("❌ خطایی در ساخت محصول رخ داد");
    }
  };

  const onError = (errors) => {
    Object.values(errors).forEach((error) => toast.error(error.message));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <form
      className="flex flex-col min-h-screen items-center justify-center py-5"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="flex flex-col w-[50%] justify-center gap-5 ">
        <div className="font-semibold text-black dark:text-white">
          محصول جدید
        </div>

        {imagePreview ? (
          <div className="flex items-center justify-center">
            <div className="relative">
              <div
                onClick={() => {
                  setImagePreview(null);
                  setSelectedFile(null);
                }}
                className="bg-red-600 absolute top-2 right-2 flex items-center justify-center w-[28px] h-[28px] cursor-pointer text-white font-bold rounded"
              >
                ×
              </div>
              <img
                className="w-[800px] h-[480px] object-cover rounded-lg"
                src={imagePreview}
                alt="Preview"
              />
            </div>
          </div>
        ) : (
          <label className="relative flex items-center justify-center border-2 border-dashed w-full border-gray-500 rounded-lg  h-32 cursor-pointer hover:border-gray-400 transition">
            <p className="text-gray-500 pointer-events-none">آپلود عکس</p>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        )}

        <div className="flex flex-col gap-2">
          <label className="text-black dark:text-white">نام</label>
          <input
            {...register("name", { required: "نام محصول را وارد کنید" })}
            placeholder="نام محصول را وارد کنید"
            className="p-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            type="text"
          />
        </div>

        <div className="flex gap-7 w-full">
          <div className="flex flex-col w-full gap-3">
            <label className="text-black dark:text-white">قیمت</label>
            <input
              {...register("price", { required: "قیمت را وارد کنید" })}
              className="p-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="قیمت محصول را وارد کنید"
              type="number"
            />
          </div>

          <div className="flex flex-col w-full gap-3">
            <label className="font-semibold text-black dark:text-white">
              دسته‌بندی
            </label>
            <select
              {...register("category", {
                required: "دسته‌بندی را انتخاب کنید",
              })}
              className="p-2 bg-white dark:bg-black dark:text-white border border-gray-500 rounded-[8px] focus:outline-none focus:ring-3 focus:ring-[var(--color-pink-primary)]"
            >
              <option value="">یک دسته‌بندی انتخاب کنید</option>
              {categories?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-black dark:text-white">توضیحات</label>
          <textarea
            {...register("description", {
              required: "توضیحات محصول را وارد کنید",
            })}
            className="h-[143px] border border-gray-500 rounded p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="توضیحات محصول را وارد کنید"
          />
        </div>

        <div className="flex w-full gap-3">
          <div className="flex flex-col w-full gap-3">
            <label className="text-black dark:text-white">
              تعداد قابل خرید
            </label>
            <input
              {...register("quantity", {
                required: "تعداد قابل خرید را وارد کنید",
              })}
              className="p-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="number"
              placeholder="تعداد خرید را وارد کنید"
            />
          </div>

          <div className="flex flex-col w-full gap-3">
            <label className="text-black dark:text-white">موجودی</label>
            <input
              className="p-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="number"
              placeholder="موجودی"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 text-white rounded-lg py-2 transition"
        >
          ساخت محصول جدید
        </button>
      </div>
    </form>
  );
}
