import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Input from "../components/ui/Input";
import { getUserProfile, updateUserProfile } from "../api/requests/userProfile";

export default function UserProfileUpdate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile();

        setFormData({
          name: userProfile.username || "",
          email: userProfile.email || "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("خطا در بارگذاری پروفایل ⚠️");
      }
    };

    fetchUserProfile();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("رمز عبور و تکرار آن مطابقت ندارند ❌");
      return;
    }

    try {
      const updatedUser = await updateUserProfile({
        username: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success("پروفایل با موفقیت بروز شد ✅");
      console.log("Updated user:", updatedUser);


    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("خطا در بروز رسانی پروفایل ⚠️");
    }
  };

  return (
    <div className="min-h-screen flex flex-col mt-12 items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md text-right"
      >
        <h2 className="text-xl font-semibold text-white mb-6 text-center">
          بروز‌رسانی پروفایل
        </h2>

        <Input
          label="نام"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="نام خود را وارد نمایید"
          className="bg-transparent border-gray-700 focus:ring-pink-500"
        />

        <Input
          label="ایمیل"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ایمیل خود را وارد نمایید"
          className="bg-transparent border-gray-700 focus:ring-pink-500"
        />

        <Input
          label="رمزعبور"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="رمزعبور خود را وارد نمایید"
          className="bg-transparent border-gray-700 focus:ring-pink-500"
        />

        <Input
          label="تکرار رمزعبور"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="تکرار رمزعبور خود را وارد نمایید"
          className="bg-transparent border-gray-700 focus:ring-pink-500"
        />

        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-md text-sm"
          >
            سفارشات من
          </button>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-md text-sm"
          >
            بروز‌رسانی
          </button>
        </div>
      </form>
    </div>
  );
}
