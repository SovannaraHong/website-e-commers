import picture from "../../assets/logo/contactpic.jpg";

const About = () => {
  return (
    <>
      <main className="pt-[200px] flex">
        <section>
          <div>
            <button>About Shop</button>
            <div>
              <h1>About Our Shop</h1>
              <p>
                Pichpisey Shop is a modern online shopping platform that brings
                customers a wide range of quality products with style,
                convenience, and affordability. The website offers an
                easy-to-use interface where shoppers can browse categories,
                explore product details with images, and make secure purchases.
              </p>
            </div>
            <div>
              <button>Get Start</button>
              <button>Shopping</button>
            </div>
          </div>
        </section>
        <section>
          <img className="w-[300px]" src={picture} alt="" />
        </section>
      </main>
    </>
  );
};

export default About;
