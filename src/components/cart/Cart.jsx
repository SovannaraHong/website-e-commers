import { useParams } from "react-router-dom";
import logo from "../../assets/logo/PichPiseyLogo.png";
import { categoryList } from "../../data/data";

const Cart = () => {
  const { id } = useParams();
  const addCart = categoryList.find((i) => i.id == id);
  const { images, title, productName, rating, price, discount } = addCart;
  return (
    <div className="min-h-screen pt-[20px] text-black  font-popinse">
      <div className=" bg-white rounded-lg p-10 my-20">
        {/* Header */}

        <header className="mb-10 ">
          <div className="flex justify-center items-center">
            <img className="w-[200px] " src={logo} alt="" />
          </div>
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
        </header>

        {/* Main content */}
        <main className="flex flex-col md:flex-row gap-10">
          {/* Cart Table */}
          <section className="flex-1 border border-gray-300 rounded-xl p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300 text-gray-600 uppercase text-sm font-semibold">
                  <th className="pb-4 text-left">Product Code</th>
                  <th className="pb-4 text-center">Quantity</th>
                  <th className="pb-4 text-right">Total</th>
                  <th className="pb-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 flex items-center gap-4">
                    <img
                      src={images[0].img}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-semibold">{productName}</p>
                      <p className="text-gray-500 text-xs">
                        Set : Colour:{title}
                      </p>
                    </div>
                  </td>

                  <td className="py-4 text-center">
                    <div className="inline-flex items-center border border-gray-300 rounded-full overflow-hidden">
                      <button className="px-3 py-1 text-lg hover:bg-gray-100 transition">
                        −
                      </button>
                      <div className="px-4 font-semibold">1</div>
                      <button className="px-3 py-1 text-lg hover:bg-gray-100 transition">
                        +
                      </button>
                    </div>
                  </td>

                  <td className="py-4 text-right font-semibold">${price}</td>

                  <td className="py-4 text-center">
                    <button
                      className="text-gray-600 hover:text-red-600 transition text-xl"
                      aria-label="Remove item"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <button className="mt-8 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition">
              Update Cart
            </button>
          </section>

          {/* Order Summary */}
          <aside className="w-full md:w-96 border border-gray-300 rounded-xl p-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Discount voucher"
              className="border border-gray-400 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button className="self-end px-6 py-2 bg-gray-100 rounded-full font-semibold hover:bg-gray-200 transition">
              Apply
            </button>

            <div className="flex flex-col gap-3 text-sm font-semibold text-gray-700 mt-6">
              <div className="flex justify-between">
                <span>{price}</span>
                <span>subtotla USD</span>
              </div>
              <div className="flex justify-between">
                <span>{discount} (10%)</span>
                <span className="text-red-600">-${discount} USD</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery fee</span>
                <span>${rating} USD</span>
              </div>
            </div>

            <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$total USD</span>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              90 Day Limited Warranty against manufacturer’s defects{" "}
              <a href="#" className="underline text-gray-600">
                Details
              </a>
            </p>

            <button className="mt-4 bg-black text-white rounded-full py-3 font-semibold hover:bg-gray-900 transition">
              Checkout Now
            </button>
          </aside>
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-300 pt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-4xl font-bold">Craft Own Furniture</div>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition mt-4 md:mt-0">
            Lets Talk!
          </button>
        </footer>

        <footer className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
          <div>©2023, All right reserved. SEATIVE DIGITAL</div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="border border-gray-600 rounded-full px-3 py-1 hover:bg-gray-100 transition">
              Facebook
            </button>
            <button className="border border-gray-600 rounded-full px-3 py-1 hover:bg-gray-100 transition">
              Instagram
            </button>
            <button className="border border-gray-600 rounded-full px-3 py-1 hover:bg-gray-100 transition">
              Twitter
            </button>
            <button className="border border-gray-600 rounded-full px-3 py-1 hover:bg-gray-100 transition">
              LinkedIn
            </button>
          </div>
          <div className="mt-4 md:mt-0">36 East 78th street NEW YORK, NY</div>
        </footer>
      </div>
    </div>
  );
};

export default Cart;
