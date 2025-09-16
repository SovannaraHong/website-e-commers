import p3 from "../../assets/Images/Phka/3.png";
const AboutFooter = () => {
  return (
    <>
      <main>
        <section className="flex justify-center mt-[50px] items-start bg-pink-200 gap-30 px-[20px] py-[50px]">
          <div>
            <h1 className="font-semibold font-popinse text-[40px] text-orange-900">
              Pring Beautify Salse
            </h1>
            <h2 className="font-popinse font-semibold text-[40px] text-orange-900">
              Up to 40$ OFF
            </h2>
            <p className="w-[500px] my-[10px] text-orange-900 font-popinse ">
              To become a trusted brand where customers can find everything they
              need under one roof, while ensuring value, quality, and
              satisfaction in every purchase.
            </p>
            <button className="bg-orange-900 my-[10px] text-white px-[70px] py-[7px] rounded-full">
              Shop Now
            </button>
            <p className="w-[500px] text-white my-[10px] font-popinse  text-[10px]">
              To provide a wide range of products that cater to modern lifestyle
              needs, making everyday shopping an enjoyable and seamless
              experience for everyone.
            </p>
          </div>
          <div>
            <img
              className="w-[360px]"
              src="https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/489831872_632718726302651_5408064267551578589_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGZ4hrezULgnRfJPIj7jBFx5bHKq6OpqjTlscqro6mqNE7ET48cG3NhqgsriN5Qm-YZIKNG73M1dvWqhirQT5ac&_nc_ohc=1LnDxHTI7vsQ7kNvwFQEUBm&_nc_oc=AdmsnI_KYmImL55tLoAg8J_nj6ygWAkyglwOcrH27NKemeSmIqtd8IqUY8-9Vyj3nxk&_nc_zt=23&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=gaqpVwbsKgU1eNYk4wCerw&oh=00_Afa46i1hmxM7vwAuqczCJnGvwOP8fX572ry_l7mHuSizOw&oe=68CEAE89"
              alt=""
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutFooter;
