import picture from "../../assets/logo/contactpic.jpg";
import "./About.css";
const About = () => {
  return (
    <>
      <main className="pt-[200px] flex justify-between items-start px-[100px]">
        <section className="">
          <div>
            <button className="border-1 font-popinse px-[10px] py-[7px] rounded-full text-[12px] ">
              About Shop
            </button>
            <div className="pt-[20px]">
              <h1 className="font-semibold font-popinse text-[30px]">
                About Our Shop
              </h1>
              <p className="w-[600px] text-gray-400 py-[15px]">
                Pichpisey Shop is a modern online shopping platform that brings
                customers a wide range of quality products with style,
                convenience, and affordability. The website offers an
                easy-to-use interface where shoppers can browse categories,
                explore product details with images, and make secure purchases.
              </p>
            </div>
            <div className="flex  items-center gap-3 py-[33px] ">
              <button className="bg-pink-400 text-white cursor-pointer px-[18px] py-[7px] text-[12px] rounded-full  ">
                Get Start <i class="fa-solid fa-arrow-right"></i>
              </button>
              <button className="border-1 hover:text-white border-pink-400 cursor-pointer btn-hover text-pink-400 font-semibold px-[18px] py-[7px] text-[12px] rounded-full  ">
                Shopping
              </button>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex flex-col">
                <p className="text-[35px] font-popinse font-semibold">95%</p>
                <p className="text-gray-400 font-popinse text-[12px] w-[160px]">
                  From fashion and accessories to lifestyle products,
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[35px] font-popinse font-semibold">10+</p>
                <p className="text-gray-400 font-popinse text-[12px] w-[160px]">
                  From fashion and accessories to lifestyle products,
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[35px] font-popinse font-semibold">$10m</p>
                <p className="text-gray-400 font-popinse text-[12px] w-[160px]">
                  From fashion and accessories to lifestyle products,
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <img className="w-[450px] rounded-[20px]" src={picture} alt="" />
        </section>
      </main>
    </>
  );
};

export default About;
