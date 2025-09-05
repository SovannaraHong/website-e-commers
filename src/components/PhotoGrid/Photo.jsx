import React from "react";
import a1 from "../../assets/Photos/1.jpg";
import a2 from "../../assets/Photos/2.jpg";
import a3 from "../../assets/Photos/3.jpg";
import a4 from "../../assets/Photos/4.jpg";
import a5 from "../../assets/Photos/5.jpg";
import a6 from "../../assets/Photos/6.jpg";
import a7 from "../../assets/Photos/7.jpg";
import a8 from "../../assets/Photos/8.jpg";
import a9 from "../../assets/Photos/9.jpg";
import a10 from "../../assets/Photos/10.jpg";
import a11 from "../../assets/Photos/11.jpg";
import a12 from "../../assets/Photos/12.jpg";
import a13 from "../../assets/Photos/13.jpg";
import a14 from "../../assets/Photos/14.jpg";
import a15 from "../../assets/Photos/15.jpg";
import a16 from "../../assets/Photos/16.jpg";
const item = [
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a1,
  a1,
];
const Photo = () => {
  return (
    <>
      <section className=" columns-2 md:columns-3 lg:columns-4 pt-[150px] gap-4 p-4 space-y-4">
        {item.map((item, index) => (
          <div
            key={index}
            className=" break-inside-avoid overflow-hidden mb-4 shadow rounded-lg"
          >
            <img className="w-full h-auto object-contain" src={item} alt="" />
          </div>
        ))}
      </section>
    </>
  );
};

export default Photo;
