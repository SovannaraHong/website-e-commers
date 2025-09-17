import React from "react";
import ProductCard from "./ProductCard";

import { categoryList } from "../../data/data";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <main className="h-auto pt-[100px] ">
        <div className="flex justify-center  items-center">
          <h1 className=" font-semibold border-b-3 border-pink-300 text-[26px] font-Kantumruy">
            ផលិតផលទាកទាញ
          </h1>
        </div>
        <section className="flex justify-center items-center pt-[50px] ">
          <div className="grid grid-cols-4 gap-10">
            {categoryList.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Product;
