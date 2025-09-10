import picture from "../../assets/logo/contactpic.jpg";
import picture1 from "../../assets/logo/c1.jpg";
import "./About.css";
const About = () => {
  const productDetail = [
    {
      title: "Modern & Simple Design",
      icon: <i className="fa-solid fa-circle-check"></i>,
    },
    {
      title: "Wide Product Range",
      icon: <i className="fa-solid fa-circle-check"></i>,
    },
    {
      title: "High-Quality Products",
      icon: <i className="fa-solid fa-circle-check"></i>,
    },
    {
      title: "Affordable Pricing",
      icon: <i className="fa-solid fa-circle-check"></i>,
    },
    {
      title: "Fast Delivery",
      icon: <i className="fa-solid fa-circle-check"></i>,
    },
    {
      title: "Fast Delivery",
      icon: <i className="fa-solid fa-circle-check"></i>,
    },
  ];
  return (
    <>
      <main className="pt-[200px]">
        <section className=" flex justify-between items-start px-[100px]">
          <div className="">
            <div>
              <button className="border-1 font-popinse px-[10px] py-[7px] rounded-full text-[12px] ">
                About Shop
              </button>
              <div className="pt-[20px]">
                <h1 className="font-semibold font-popinse text-[30px]">
                  About Our Shop
                </h1>
                <p className="w-[600px] text-gray-400 text-[12px] py-[15px]">
                  Pichpisey Shop is a modern online shopping platform that
                  brings customers a wide range of quality products with style,
                  convenience, and affordability. The website offers an
                  easy-to-use interface where shoppers can browse categories,
                  explore product details with images, and make secure
                  purchases.
                </p>
              </div>
              <div className="flex  items-center gap-3 py-[33px] ">
                <button className="bg-pink-400 text-white cursor-pointer px-[18px] py-[7px] text-[12px] rounded-full  ">
                  Get Start <i className="fa-solid fa-arrow-right"></i>
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
          </div>
          <div>
            <img className="w-[450px] rounded-[20px]" src={picture} alt="" />
          </div>
        </section>

        <section className=" flex justify-between flex-row-reverse items-start py-[120px] px-[100px]">
          <div className="">
            <div>
              <button className="border-1 font-popinse px-[10px] py-[7px] rounded-full text-[12px] ">
                About Us
              </button>
              <div className="pt-[20px]">
                <h1 className="font-medium font-popinse text-[18px] w-[500px]">
                  Pichpisey Shop is more than just a store—it’s a trusted online
                  destination for trendy, affordable, and reliable shopping in
                  Cambodia.
                </h1>
                <p className="w-[500px] text-[12px] text-gray-400 py-[15px]">
                  From fashion and accessories to lifestyle products, Pichpisey
                  Shop is designed to meet the everyday needs of customers while
                  ensuring a smooth and enjoyable shopping experience. With fast
                  delivery, responsive customer support, and a focus on customer
                  satisfaction, delivery, responsive customer support, and a
                  focus on customer satisfaction,
                </p>
              </div>
              <div className="grid grid-cols-2 gap-[8px] pt-[80px]">
                {productDetail.map((item) => (
                  <>
                    <div className="text-pink-400 flex justify-start items-center gap-2">
                      <span>{item.icon}</span>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-[450px] rounded-[20px] object-cover h-[480px]"
              src={picture1}
              alt=""
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
