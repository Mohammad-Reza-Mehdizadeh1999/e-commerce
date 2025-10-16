import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getSingleProducts } from "../api/requests/singleProduct";
import { getProductCategory } from "../api/requests/productCategory";
import { createProduct, uploadImage } from "../api/requests/adminCreateProduct";

export default function AdminUpdateProduct() {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [productCategory, setProductCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      category: "",
      description: "",
      quantity: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSingleProducts(productId);
        if (!data) return;

        setImagePreview(data.image);

        const category = await getProductCategory(data.category);
        setProductCategory(category?.name || data.category);

        reset({
          name: data.name,
          price: data.price,
          category: category?.name || data.category,
          description: data.description,
          quantity: data.quantity,
        });
      } catch (err) {
        console.error("Error fetching product:", err);
        toast.error("خطا در دریافت اطلاعات محصول ⚠️");
      } finally {
        setLoading(false);
      }
    };

    if (productId) fetchData();
  }, [productId, reset]);

  const onSubmit = async (data) => {
    console.log("Submitted data:", data);
    toast.success("اطلاعات محصول با موفقیت ثبت شد ✅");
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

  const deleteproduct = (productId)=> {
    console.log(productId);
    
  }




  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-300">
        در حال بارگذاری اطلاعات محصول...
      </div>
    );

  return (
    <form
      className="flex flex-col min-h-screen items-center justify-center py-5"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="flex flex-col w-[50%] justify-center gap-5 ">
        <div className="font-semibold text-black dark:text-white">
          ویرایش محصول
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
          <label className="relative flex items-center justify-center border-2 border-dashed w-full border-gray-500 rounded-lg h-32 cursor-pointer hover:border-gray-400 transition">
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
            <label className="text-black dark:text-white">
              دسته‌بندی / برند
            </label>
            <input
              {...register("category", { required: "دسته‌بندی را وارد کنید" })}
              className="p-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="نام دسته‌بندی یا برند"
              type="text"
            />
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
            {" "}
            <label className="text-black dark:text-white">موجودی</label>{" "}
            <input
              className="p-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="number"
              placeholder="موجودی"
            />{" "}
          </div>
        </div>

        <div>
          <button
            
            className="bg-green-500 hover:bg-green-600 p-1.5 cursor-pointer ml-2 text-white rounded-lg py-2 transition"
          >
             بروزرسانی محصول
          </button>
          <button
            onClick={()=> deleteproduct(productId)}
            className="bg-red-500 hover:bg-red-600 p-1.5 cursor-pointer text-white rounded-lg py-2 transition"
          >
             حذف محصول
          </button>
        </div>
      </div>
    </form>
  );
}
