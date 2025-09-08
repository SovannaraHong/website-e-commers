import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ price, images, title, slug, id }) => {
  return (
    <>
      <main>
        <article className="w-[250px] rounded-[10px] shadow-lg cursor-pointer ">
          <div>
            {" "}
            <img
              className=" object-cover h-[250px] w-full hover:scale-[1.1] transition-all duration-300 linear"
              src={
                images[0] ||
                "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
              }
              alt=""
            />
          </div>
          <div className="flex justify-between items-center pb-[20px] pt-[5px] px-[15px]">
            <p className="font-semibold text-[13px] line-clamp-1 font-popinse">
              {title}
            </p>
            <p className="font-semibold text-pink-400">{price}</p>
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

export default FeatureCard;
