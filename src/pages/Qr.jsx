import React from "react";
import QrImg from "../assets/logo/image.png";
const Qr = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-gray-200 py-[50px] px-[40px] rounded-[30px] flex justify-center items-center flex-col  shadow-lg">
          <img className="w-[200px] pb-[29px]" src={QrImg} alt="" />
          <div className="bg-red-400 flex justify-center items-center px-[24px] text-white py-[10px] rounded-full ">
            <h1 className="font-popinse text-[14px] font-semibold  ">
              Scan Now
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qr;
