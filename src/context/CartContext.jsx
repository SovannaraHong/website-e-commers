import { createContext, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // --- State with localStorage initialization ---
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
  });

  // --- Sync cart with localStorage ---
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // --- Add product to cart ---
  const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // Stylish toast message
    toast.success(`${product.productName} added to cart! 🎉`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // --- Remove product completely ---
  const handleRemoveFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
    toast.info("Item removed from cart 🗑️", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // --- Change quantity (+ or -) ---
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        handleRemoveFromCart,
        handleQuantityChange,
      }}
    >
      {children}
      {/* Toast container for notifications */}
      <ToastContainer />
    </CartContext.Provider>
  );
};
