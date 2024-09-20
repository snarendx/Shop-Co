import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaTrash, FaArrowRight } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { TbMathGreater } from "react-icons/tb";

const ShoppingCart = () => {
  const initialCartItems = [
    {
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      image: "GradientGraphicTShirt.jpg",
      quantity: 1,
    },
    {
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      image: "CheckRedShirt.jpg",
      quantity: 1,
    },
    {
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      image: "FadedSkinnyJeans.jpg",
      quantity: 1,
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const newDiscount = (newSubtotal * 20) / 100;
    const deliveryFee = 15;
    const newTotal = newSubtotal - newDiscount + deliveryFee;

    setSubtotal(newSubtotal);
    setDiscount(newDiscount);
    setTotal(newTotal);
  }, [cartItems]);

  const incrementQuantity = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const decrementQuantity = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    }
  };

  const removeItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <p className="flex items-center text-sm md:text-base">
        Home <TbMathGreater />
        Shop <TbMathGreater />
        Men <TbMathGreater />
        T-shirts
      </p>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Cart</h1>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="lg:w-2/3 w-full">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center mb-4 p-4 bg-white rounded-lg shadow space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-lg md:text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600">Size: {item.size}</p>
                <p className="text-gray-600">Color: {item.color}</p>
              </div>
              <div className="text-lg md:text-xl font-bold">${item.price}</div>
              <div className="flex items-center space-x-2">
                <button
                  className="text-gray-500"
                  onClick={() => decrementQuantity(index)}
                >
                  <FaMinus />
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="text-gray-500"
                  onClick={() => incrementQuantity(index)}
                >
                  <FaPlus />
                </button>
              </div>
              <button
                className="text-red-500"
                onClick={() => removeItem(index)}
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3 w-full p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-bold">${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Discount (-20%)</span>
            <span className="text-red-500 font-bold">-${discount}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-bold">$15</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <div className="flex items-center mt-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Apply promo code here"
                className="bg-black/10 rounded-2xl py-1 px-6 w-full pl-10"
              />
              <MdOutlineDiscount className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </div>
            <button className="bg-black text-white rounded-2xl py-1 px-2 ml-2">
              Apply
            </button>
          </div>
          <button className="mt-4 w-full bg-black text-white py-2 rounded flex justify-center items-center">
            Go to Checkout <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
