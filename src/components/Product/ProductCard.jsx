// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const ProductCard = ({ id, productName, images, price }) => {
//   const [mainImg, setMainimg] = useState(images[0].img);

//   const handleAddToCart = () => {
//     const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const productInCart = existingCart.find((item) => item.id === id);

//     if (productInCart) {
//       productInCart.quantity += 1;
//     } else {
//       existingCart.push({ id, productName, images, price, quantity: 1 });
//     }

//     localStorage.setItem("cart", JSON.stringify(existingCart));
//     alert(`${productName} added to cart!`);
//   };

//   return (
//     <article className="w-[250px] rounded-[10px] shadow-lg cursor-pointer hover:scale-[1.05] transition-all duration-300">
//       <div>
//         <Link to={id.toString()}>
//           {" "}
//           <img
//             onMouseEnter={() => images[3]?.img && setMainimg(images[3].img)}
//             onMouseLeave={() => setMainimg(images[0].img)}
//             className="object-cover h-[250px] w-[250px]"
//             src={mainImg}
//             alt={productName}
//           />
//         </Link>
//       </div>
//       <div className="flex justify-between items-center pb-[20px] pt-[5px] px-[15px]">
//         <p className="font-semibold">{productName}</p>
//         <p className="text-pink-400 font-semibold">{price} $</p>
//       </div>
//       <div className="px-[20px] py-[10px]">
//         <button
//           onClick={handleAddToCart}
//           className="bg-pink-300 text-white w-full py-2 rounded-lg flex justify-center items-center gap-2 font-semibold"
//         >
//           <i className="fa-solid fa-bag-shopping"></i>
//           Add to Cart
//         </button>
//       </div>
//     </article>
//   );
// };

// export default ProductCard;
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"; // Adjust path as needed

const ProductCard = ({ id, productName, images, price }) => {
  const [mainImg, setMainimg] = useState(images[0].img);
  const { handleAddToCart } = useContext(CartContext);

  const handleClick = () => {
    handleAddToCart({ id, productName, images, price });
  };

  return (
    <article className="w-[250px] rounded-[10px] shadow-lg cursor-pointer hover:scale-[1.05] transition-all duration-300">
      <div>
        <Link to={id.toString()}>
          <img
            onMouseEnter={() => images[3]?.img && setMainimg(images[3].img)}
            onMouseLeave={() => setMainimg(images[0].img)}
            className="object-cover h-[250px] w-[250px]"
            src={mainImg}
            alt={productName}
          />
        </Link>
      </div>
      <div className="flex justify-between items-center pb-[20px] pt-[5px] px-[15px]">
        <p className="font-semibold">{productName}</p>
        <p className="text-pink-400 font-semibold">{price} $</p>
      </div>
      <div className="px-[20px] py-[10px]">
        <button
          onClick={handleClick}
          className="bg-pink-300 text-white w-full py-2 rounded-lg flex justify-center items-center gap-2 font-semibold"
        >
          <i className="fa-solid fa-bag-shopping"></i>
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
