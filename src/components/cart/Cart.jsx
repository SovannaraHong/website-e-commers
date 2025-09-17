import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/PichPiseyLogo.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) item.quantity = Math.max(1, item.quantity + delta);
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const finaldis = subtotal * 0.01; // 20% of subtotal

  return (
    <div className="min-h-screen pt-[20px] font-popinse">
      <div className="bg-white rounded-lg p-10 my-20">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
        </header>

        <main className="flex flex-col md:flex-row gap-10">
          <section className="flex-1 border border-gray-300 rounded-xl p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300 text-gray-600 uppercase text-sm font-semibold">
                  <th className="pb-4 text-left">Product</th>
                  <th className="pb-4 text-center">Quantity</th>
                  <th className="pb-4 text-right">Total</th>
                  <th className="pb-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="py-4 flex items-center gap-4">
                      <img
                        src={item.images[0].img}
                        className="w-16 h-16 rounded-lg object-cover"
                        alt={item.productName}
                      />

                      <div>
                        <p className="font-semibold">{item.productName}</p>
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-gray-500 text-xs">
                            Set : product: {item.productName}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 text-center">
                      <div className="inline-flex items-center border border-gray-300 rounded-full overflow-hidden">
                        <button
                          className="px-3 py-1 text-lg hover:bg-gray-100"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          −
                        </button>
                        <div className="px-4 font-semibold">
                          {item.quantity}
                        </div>
                        <button
                          className="px-3 py-1 text-lg hover:bg-gray-100"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="py-4 text-right font-semibold">
                      ${item.price * item.quantity}
                    </td>

                    <td className="py-4 text-center">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-gray-600 hover:text-red-600 text-xl"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <aside className="w-full md:w-96 border border-gray-300 rounded-xl p-6 flex flex-col gap-4">
            <img className="w-[140px]" src={logo} alt="" />
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Discount voucher"
                className="border border-gray-400 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button className="self-end px-6 py-2 bg-gray-100 rounded-full font-semibold hover:bg-gray-200 transition">
                Apply
              </button>
            </div>

            <div className="flex flex-col gap-3 text-sm font-semibold text-gray-700 mt-6">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>${subtotal.toFixed(3)} USD</span>
              </div>
              <div className="flex justify-between">
                <span>Discount (10%)</span>
                {/* <span className="text-red-600">${subtotal.toFixed(3)} USD</span> */}
                <span className="text-red-600">${finaldis.toFixed(2)} USD</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery fee</span>
                {/* <span>${deliveryFee.toFixed(2)} USD</span> */}
              </div>
            </div>

            <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${subtotal.toFixed(2)} USD</span>
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
        <footer className="mt-2 border-t border-gray-300 pt-12 flex flex-col md:flex-row justify-between items-center">
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
