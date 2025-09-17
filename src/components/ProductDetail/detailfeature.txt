import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import { categoryList } from "../../data/data";
import { useState } from "react";
import Qr from "../../pages/Qr";
import QrImg from "../../assets/logo/image.png";

import "./Product.css";
const FeatureDetail = () => {
  const data = useLoaderData();
  const { images, name, title, price } = data;
  const [showQr, setShowQr] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <>
      <main className="px-[200px] pt-[180px]">
        <section className="flex  justify-between items-start">
          <div className="flex flex-col gap-5">
            {/* Main image */}
            <div className="w-[450px] h-[450px] border-1 border-gray-400 rounded-[15px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={images[1]}
                alt=""
              />
            </div>

            {/* Thumbnails */}
          </div>

          {/* right */}
          <div>
            <div className="flex  justify-start items-center gap-3">
              <p className="font-semibold font-popinse text-[12px]  text-pink-500 bg-pink-300 px-[10px] rounded-[5px]">
                {title}
              </p>
              <p className="text-[9px] text-orange-400">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </p>
              <p className="text-[10px] font-semibold">(10 Reviewer.)</p>
            </div>
            <div>
              <h2 className="font-bold font-Kantumruy  text-[22px] py-[5px]">
                {name}
              </h2>
            </div>
            <div>
              <p className="font-popinse uppercase ">{title}</p>
            </div>
            <div className="flex justify-start items-center gap-2 py-[10px]">
              <p className="font-bold  text-[18px] text-pink-400">${price}</p>
              <del className="text-[12px] font-semibold">$10.00</del>
              <p className="text-[10px] bg-blue-300 px-[5px] py-[2px] text-white rounded-[4px]">
                3.2
              </p>
            </div>
            <hr className="border-b-1 border-gray-300" />
            <div className="py-[30px]">
              <div className="bg-gray-200 flex items-center gap-4  px-[15px] py-[10px] rounded-[10px] justify-center">
                <div className="flex items-center justify-start gap-2">
                  <div>
                    <span className="bg-pink-500 px-[13px] rounded-[5px] py-[15px]">
                      <i className="fa-solid text-white text-[20px] fa-gift"></i>
                    </span>
                  </div>
                  <div className="py-[10px] ">
                    <h2 className="flex items-center gap-2">
                      <span className="font-semibold text-[15px] font-popinse">
                        {" "}
                        Gift Wrapping{" "}
                      </span>
                      <span className="text-[7px] flex gap-[2px] text-pink-500 items-center">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </h2>

                    <p className="m-0 leading-3 text-[10px] font-popinse">
                      Happy Pjom Ben Khmer
                    </p>
                    <p className="m-0 leading-5 text-pink-500 font-semibold font-popinse text-[12px]">
                      free Delivery
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <div>
                    <h3 className="font-semibold text-[18px] text-pink-500 font-popinse">
                      $4.00
                    </h3>
                  </div>
                  <div className="flex justify-center items-start flex-col gap-1">
                    <p className="text-[10px] bg-blue-300 px-[5px] py-[2px] text-white rounded-[4px]">
                      Rating 4.3
                    </p>
                    <p className="text-[10px] line-clamp-1 w-[100px]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Alias, atque!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-b-1 border-gray-300" />
            <div className="py-[10px] flex items-center gap-4">
              <p className="font-Kantumruy text-[14px]">ចំនួនទំនិញ</p>
              <div className="flex items-center gap-2 border-1 px-[13px] justify-center py-[3px] rounded-[7px]">
                <button
                  className="font-semibold "
                  onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>
                <p>{count}</p>
                <button onClick={() => setCount((prev) => prev + 1)}>+</button>
              </div>
            </div>
            <div className="py-[15px]">
              <p className="font-Kantumruy text-[14px]">ចំនួនទំនិញ</p>
            </div>
            <hr className="border-b-1 border-gray-300" />
            <div className="py-[15px]">
              <p className="font-Kantumruy font-bold">សរុប</p>
              <div className="flex flex-col gap-2 pt-[10px] ">
                <button className="bg-pink-500 py-[6px] text-[14px] gap-3   cursor-pointer font-Kantumruy flex justify-center items-center text-white w-full rounded-[15px]">
                  <span>
                    <i className="fa-solid fa-gift"></i>
                  </span>{" "}
                  <span>ដាកទំនេញចូលក្នុងកន្រក់</span>
                </button>
                <button className="bg-white border-1 gap-3 text-[14px] cursor-pointer font-Kantumruy border-pink-400 py-[6px]  flex justify-center items-center text-pink-300 w-full rounded-[15px]">
                  <span>
                    <i className="fa-brands fa-cc-paypal"></i>
                  </span>{" "}
                  <span onClick={() => setShowQr(true)}>បង់ប្រាក់ឡូវ</span>
                </button>
                {showQr && (
                  <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
                    <div
                      onClick={() => setShowQr(false)}
                      className="bg-white/30 backdrop-blur-md border border-white/20 py-[50px] px-[40px] rounded-[30px] flex justify-center items-center flex-col shadow-lg animate-scale-up"
                    >
                      <img className="w-[200px] pb-[29px]" src={QrImg} alt="" />
                      <div className="bg-red-400 flex justify-center items-center px-[24px] text-white py-[10px] rounded-full">
                        <h1 className="font-popinse text-[14px] font-semibold">
                          Scan Now
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export const LoaderProductDetail = async ({ params }) => {
  try {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products/${params.id}`
    );
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};
export default FeatureDetail;
