import { useEffect, useState } from "react";
import Input from "./ui/Input";
import RadioInput from "./ui/RadioInput";
import Button from "../components/ui/Button";
import { getAllCategories } from "../api/requests/productCategory";

const FilterProducts = () => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setAllCategories(data);
    };
    fetchCategories();
  }, []);

  const handleReset = () => {
    setBrand("");
    setPrice("");
  };
  

  return (
    <div className="bg-[#111] text-white p-5 rounded-lg w-56 flex flex-col justify-center items-center space-y-7 h-1/2 mr-10">
      <div className="w-full">
        <button className="bg-black w-full py-2 rounded-full mb-3 font-semibold">
          فیلتر برند
        </button>
        <div className="flex flex-col space-y-3 ps-3 h-[300px] overflow-y-scroll">
          {allCategories.map((category) => {
            return (
              <div className="flex items-center gap-1.5" key={category._id}>
                <input
                  type="radio"
                  name="brand"
                  value={category._id}
                  onChange={(e) => setBrand(e.target.value)}
                />
                <label>{category.name}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full">
        <button className="bg-black w-full py-2 rounded-full mb-3 mt-5 font-semibold">
          فیلتر قیمت
        </button>
        <Input
          type="text"
          placeholder="قیمت رو وارد نمایید"
          className=""
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <Button
        className="border cursor-pointer border-gray-400 rounded-md px-4 py-1 hover:bg-gray-800 transition"
        onClick={handleReset}
      >
        حذف فیلتر ها
      </Button>
    </div>
  );
};

export default FilterProducts;
