import React, { useEffect, useState } from "react";
import s1 from "../../assets/Images/Phka/s1.jpeg";
import s2 from "../../assets/Images/Phka/s3.jpeg";
import s3 from "../../assets/Images/Phka/s4.jpeg";

import c1 from "../../assets/Images/Phka/s5.png";
import c2 from "../../assets/Images/Phka/s6.png";
import c3 from "../../assets/Images/Phka/s7.png";
import c4 from "../../assets/Images/Phka/s8.png";
import c5 from "../../assets/Images/Phka/s9.png";
import "./hero.css";
const HeroSection = () => {
  const imagesBg = [s1, s2, s3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagesBg.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="pt-[140px] ">
        <main className="flex  justify-between items-center py-[10px] px-[20px] ">
          <section className="flex gap-4  justify-center items-center  p-[10px] hero-left">
            <div className="flex justify-center items-center flex-col gap-2">
              <div className="bg-[#fee6fb] p-[10px]  rounded-[5px] smooth-appear">
                <img className="w-[200px]" src={c1} alt="" />
              </div>
              <div className="bg-[#e9ffa6] p-[10px]  rounded-[5px] smooth-appear">
                <img className="w-[200px]" src={c2} alt="" />
              </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-2 ">
              <div className="bg-[#c6fadd] p-[10px]  rounded-[5px] smooth-appear">
                <img className="w-[200px]" src={c3} alt="" />
              </div>

              <div className="bg-[#b2f2fc] p-[10px]  rounded-[5px] smooth-appear">
                <img className="w-[200px]" src={c4} alt="" />
              </div>
            </div>
            <div>
              <div className="bg-[#fee6fb] p-[10px]  rounded-[5px] smooth-appear">
                <img className="w-[350px] h-[430px]" src={c5} alt="" />
              </div>
            </div>
          </section>

          <section
            className="w-[600px] h-[430px] bg-cover bg-center duration-1000 linear hero-right transition-all rounded-[20px] smooth-appear"
            style={{ backgroundImage: `url(${imagesBg[currentIndex]})` }}
          ></section>
        </main>
      </div>
    </>
  );
};

export default HeroSection;
