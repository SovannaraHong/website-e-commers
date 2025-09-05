import React from "react";

import { Link } from "react-router-dom";
const ProductCard = ({ id, title, images, price }) => {
  return (
    <>
      <main>
        <article className="w-[250px] rounded-[10px] shadow-lg cursor-pointer">
          <div>
            {" "}
            <img
              className=" object-cover h-[250px] w-full hover:scale-[1.1] transition-all duration-300 linear"
              src={images[0].img}
              alt=""
            />
          </div>
          <div className="flex justify-between items-center pb-[20px] pt-[5px] px-[15px]">
            <p className="font-semibold text-[18px]">{title}</p>
            <p className="font-semibold text-pink-400">{price}</p>
          </div>
          <button className="bg-pink-300 uppercase cursor-pointer  gap-3 text-white flex justify-center items-center w-full font-semibold font-popinse py-[10px] px-[15px] ">
            {" "}
            <span>
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
            <span> add to cast</span>
          </button>
        </article>
      </main>
    </>
  );
};

export default ProductCard;
