import { useEffect, useState } from "react";
import Input from "./ui/Input";
import Button from "../components/ui/Button";
import { getAllCategories } from "../api/requests/productCategory";
import { filterProducts } from "../api/requests/products";

const FilterProducts = ({
  setMinPrice,
  setMaxPrice,
  minPrice,
  maxPrice,
  setProducts,
}) => {
  const [brand, setBrand] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setAllCategories(data);
    };
    fetchCategories();
  }, []);

  const handleFilterInProducts = async () => {
    const hasPriceFilters = minPrice && maxPrice;
    const filters = {
      categories: brand,
      price: hasPriceFilters ? [minPrice, maxPrice] : [],
    };

    const filterRes = await filterProducts(filters);
    setProducts(filterRes);
  };

  const handleReset = () => {
    setBrand("");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="bg-[#111] text-white p-5 rounded-lg w-full flex flex-col justify-center items-center space-y-7 h-1/2 ">
      <div className="w-full">
        <button className="bg-black w-full py-2 rounded-full mb-3 font-semibold">
          فیلتر برند
        </button>
        <div className="flex flex-col space-y-3 ps-3 h-[300px] overflow-y-scroll">
          {allCategories.map((category) => {
            return (
              <div className="flex items-center gap-1.5" key={category._id}>
                <input
                  type="checkbox"
                  name="brand"
                  value={category._id}
                  onChange={(e) =>
                    setBrand((prev) => {
                      if (e.target.checked) {
                        return [...prev, e.target.value];
                      } else {
                        return prev.filter((id) => id !== e.target.value);
                      }
                    })
                  }
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
          placeholder="کمترین قیمت...."
          className=""
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <Input
          type="text"
          placeholder="بیشترین قیمت...."
          className=""
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <Button
        className="border cursor-pointer border-gray-400 rounded-md px-4 py-1 hover:bg-gray-800 transition"
        onClick={handleFilterInProducts}
      >
        اعمال فیلتر ها
      </Button>
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
