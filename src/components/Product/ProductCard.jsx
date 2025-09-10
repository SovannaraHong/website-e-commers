import React, { useState } from "react";

import { Link } from "react-router-dom";
const ProductCard = ({ id, productName, images, price }) => {
  const [mainImg, setMainimg] = useState(images[0].img);
  return (
    <>
      <main>
        <article className="w-[250px] rounded-[10px] hover:scale-[1] transition-all duration-300 ease-in-out shadow-lg cursor-pointer ">
          <div>
            {" "}
            <img
              onMouseEnter={() => images[3].img && setMainimg(images[3].img)}
              onMouseLeave={() => mainImg && setMainimg(images[0].img)}
              className=" object-cover h-[250px] w-[250px] "
              src={mainImg}
              alt=""
            />
          </div>
          <div className="flex justify-between items-center pb-[20px] pt-[5px] px-[15px]">
            <p className="font-semibold text-[18px] font-Kantumruy">
              {productName}
            </p>
            <p className="font-semibold font-popinse text-pink-400">
              {price} $
            </p>
          </div>
          <div className="px-[20px] py-[10px] ">
            <button className="bg-pink-300 rounded-[10px] uppercase cursor-pointer   gap-3 text-white flex justify-center items-center w-full font-semibold font-popinse py-[10px] px-[15px] ">
              {" "}
              <span>
                <i className="fa-solid fa-bag-shopping"></i>
              </span>
              <span> add to cast</span>
            </button>
          </div>
        </article>
      </main>
    </>
  );
};

export default ProductCard;
