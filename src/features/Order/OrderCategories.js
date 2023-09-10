import React from "react";
import { useSearchParams } from "react-router-dom";

const OrderCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClickCategory = (value) => {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  };
  const categories = [
    { value: "appetizer", label: "Appetizer" },
    { value: "main-course", label: "Main Course" },
    { value: "desserts", label: "Desserts" },
    { value: "drinks", label: "Drinks" },
  ];
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-2 gap-6 max-w-5xl mx-auto mt-4 h-[90%] w-full">
      {categories.map((category) => (
        <button
          value={category.value}
          key={category.value}
          onClick={() => handleClickCategory(category.value)}
          className=" bg-yellow-400 rounded-xl shadow-sm hover:shadow-md text-green-900 font-medium text-xl flex items-center justify-center"
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default OrderCategories;
