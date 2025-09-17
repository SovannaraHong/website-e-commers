import React from "react";
import p1 from "/product/p1.png";
import p2 from "/product/p2.png";
import p3 from "/product/p3.png";
import p4 from "/product/p4.png";

const ContactForm = () => {
  const contact = [
    {
      icon: <i class="fa-solid fa-location-dot"></i>,
      title: "Phnom Penh, Cambodia",
    },
    {
      icon: <i class="fa-brands fa-google"></i>,
      title: "Pich Pisey Blush",
    },
    {
      icon: <i class="fa-solid fa-phone"></i>,
      title: "Tel: 855 12 345 678",
    },
  ];
  return (
    <>
      <div className="relative w-full ">
        <img
          className="opacity-[0.4] z-[99] absolute rotate-[40deg] left-[-40px] top-[20px] w-[100px]"
          src={p1}
          alt=""
        />
        <img
          className="opacity-[0.4] absolute rotate-[100deg] right-[-20px] top-[300px] w-[100px]"
          src={p2}
          alt=""
        />
      </div>

      <main className="flex  justify-center gap-70 py-[60px]  bg-[#f5f5f5] shadow-sm">
        <section>
          <div>
            <h1 className="font-semibold text-[40px] font-popinse">
              Contact Us
            </h1>
            <p className="font-popinse text-[12px] w-[360px] text-gray-400">
              Pichpisey Shop is a modern online shopping platform that brings
              customers a wide range of quality products with style,
              convenience, and affordability.
            </p>
          </div>
          <div className="flex flex-col gap-3 pt-[40px] font-popinse">
            {contact.map((p) => {
              return (
                <div key={p.title} className="text-pink-400">
                  <span>{p.icon}</span>
                  <span>{p.title}</span>
                </div>
              );
            })}
          </div>
          <div className="pt-[20px]">
            <p className="w-[500px] font-popinse text-[12px] text-gray-400">
              Pichpisey Shop is a modern online shopping platform that brings
              customers a wide range of quality products with style,
              convenience, and affordability. The website offers an easy-to-use
              interface where shoppers can browse categories, explore product
              details with images, and make secure purchases.
            </p>
          </div>
        </section>
        <section className="bg-[#fddef8] shadow-lg px-[40px] py-[50px] rounded-[12px]">
          <div className="flex justify-center items-center flex-col ">
            <form className="flex justify-center items-center flex-col gap-3  ">
              <div>
                <input
                  className="shadow-lg w-[400px] px-[13px] font-popinse rounded-[5px] border-1 bg-[#f5f5f5] border-gray-300 py-[8px]"
                  type="text"
                  name=""
                  placeholder="Name"
                  id=""
                />
              </div>
              <div>
                <input
                  className="shadow-lg w-[400px] px-[13px] font-popinse rounded-[5px] border-1 bg-[#f5f5f5] border-gray-300 py-[8px]"
                  type="number"
                  name=""
                  placeholder="Phone"
                  id=""
                />
              </div>
              <div>
                <textarea
                  name=""
                  placeholder="Message"
                  className="font-popinse w-[400px] h-[200px] px-[13px] border-1 bg-[#f5f5f5] border-gray-300 shadow-lg"
                  id=""
                ></textarea>
              </div>
              <button className="bg-pink-400 text-white font-popinse font-semibold py-[10px] px-[15px] w-full rounded-[10px] cursor-pointer">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactForm;
