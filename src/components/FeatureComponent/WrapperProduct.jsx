import React, { useState } from "react";

const WrapperProduct = () => {
  const categoryList = [
    { label: "All", path: "all" },
    { label: "PhkaBlush", path: "phkablush" },
    { label: "Skin7", path: "skin7" },
    { label: "Weyoung", path: "weyoung" },
  ];
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <>
      <div className="pt-[140px]">
        <div className=" flex justify-center items-center gap-20   py-[25px] ">
          <div className="flex justify-center items-center gap-5 font-popinse ">
            {categoryList.map((cate) => (
              <button
                onClick={() => setActiveCategory(cate.path)}
                className={` text-white px-[13px] py-[5px] rounded-[10px] cursor-pointer ${
                  activeCategory === cate.path ? "bg-green-300" : "bg-pink-300"
                }`}
              >
                {cate.label}
              </button>
            ))}
          </div>
          <div>
            <input
              type="text"
              className="border-1 border-white outline-white px-[10px] font-popinse 
              text-[13px] bg-pink-200 text-white rounded-[10px] py-[10px] placeholder:text-[15px] placeholder-white"
              placeholder="SearchItem..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WrapperProduct;
