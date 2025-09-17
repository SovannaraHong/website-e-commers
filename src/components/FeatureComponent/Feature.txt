import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import FeatureCard from "../Card/FeatureCard";

const WrapperProduct = () => {
  const categoryProduct = [
    { label: "ALL", value: "all" },
    { label: "Clothes", value: "Clothes" },
    { label: "Electronics", value: "Electronics" },
    { label: "Furniture", value: "Furniture" },
    { label: "Shoes", value: "Shoes" },
    { label: "Miscellaneous", value: "Miscellaneous" },
  ];

  const data = useLoaderData();
  const [activeCategory, setActiveCategory] = useState("all");
  const filterCategory = data.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category?.name === activeCategory;
  });

  if (!data || !Array.isArray(data)) {
    return (
      <div className="pt-[140px] flex justify-center items-center">
        <p className="text-gray-500">No products found.</p>
      </div>
    );
  }
  const [Searching, setSearching] = useState("");

  const handleSearch = (e) => {
    setSearching(e.target.value);
  };

  const finalSearch = filterCategory.filter(
    (p) =>
      p.category?.name.toLowerCase().includes(Searching.toLowerCase()) ||
      p.title.toLowerCase().includes(Searching.toLowerCase())
  );
  return (
    <div className="pt-[240px]">
      <div className=" fixed top-33 left-0 right-0 z-[999] shadow-lg bg-[#f5f5f5]">
        <div className=" flex justify-center items-center gap-20   py-[25px]  ">
          <div className="flex justify-center items-center gap-5 font-popinse ">
            {categoryProduct.map((cate) => (
              <button
                key={cate.value}
                onClick={() => setActiveCategory(cate.value)}
                className={` text-white px-[13px] py-[5px] rounded-[10px] cursor-pointer ${
                  activeCategory === cate.value ? "bg-pink-300" : "bg-green-300"
                }`}
              >
                {cate.label}
              </button>
            ))}
          </div>
          <div>
            <input
              onChange={handleSearch}
              value={Searching}
              className="border-1 border-white outline-white px-[10px] font-popinse text-[12px] bg-pink-200 text-white rounded-[10px] py-[10px] font-semibold  placeholder-white"
              type="text"
              name=""
              placeholder="Search..."
              id=""
            />
          </div>
        </div>
      </div>
      <section className="flex justify-center items-center">
        <section className="grid grid-cols-4 gap-10">
          {finalSearch.map((prod) => (
            <Link to={prod.id.toString()} key={prod.id}>
              {" "}
              <FeatureCard {...prod} />
            </Link>
          ))}
        </section>
      </section>
    </div>
  );
};

// ✅ Proper loader
export const productLoader = async () => {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (err) {
    console.error("Loader error:", err);
    return [];
  }
};

export default WrapperProduct;
