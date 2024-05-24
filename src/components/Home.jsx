import React, { useState } from "react";
import { TbChartCandleFilled, TbMathGreater } from "react-icons/tb";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Home = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("Large");

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <section className="py-8">
      <div className="flex flex-col lg:flex-row justify-between px-6">
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <div>
            <h2 className="text-lg font-semibold flex items-center m-2">
              Home <TbMathGreater /> Casual
            </h2>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Filters</h2>{" "}
              <TbChartCandleFilled className="mt-2 text-gray-500" />
            </div>
            <hr className="my-2" />
            <ul>
              <li>T-Shirts</li>
              <li>Shorts</li>
              <li>Shirts</li>
              <li>Hoodie</li>
              <li>Jeans</li>
            </ul>
            <hr className="my-2" />
            <div>
              <h2 className="text-lg font-semibold">Price</h2>
              {/* Volume increase/decrease line for setting price */}
            </div>
            <div>
              <h2 className="text-lg font-semibold">Select Colors</h2>
              <div className="flex flex-wrap mt-2">
                {[...Array(5)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleColorSelection("olive")}
                    className={`w-8 h-8 rounded-full border-black mr-2 mb-2 ${
                      selectedColor === "olive" ? "border-2" : ""
                    }`}
                    style={{ backgroundColor: "#556B2F" }}
                  />
                ))}
                {[...Array(5)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleColorSelection("navy")}
                    className={`w-8 h-8 rounded-full border-black mr-2 mb-2 ${
                      selectedColor === "navy" ? "border-2" : ""
                    }`}
                    style={{ backgroundColor: "#000080" }}
                  />
                ))}
              </div>
            </div>
            <hr className="my-2" />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Choose Size</h2>
              <div className="flex flex-wrap mt-2">
                {[
                  "XX Small",
                  "XX Large",
                  "Small",
                  "Medium",
                  "Large",
                  "X-Large",
                ].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-1 rounded-3xl border ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-200"
                    } mr-2 mb-2`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <hr className="mt-2" />
            </div>
            <hr className="my-2" />
            <div>
              <h2 className="text-lg font-semibold">Dress Style</h2>
              <ul>
                <li>Casual</li>
                <li>Formal</li>
                <li>Party</li>
                <li>Gym</li>
              </ul>
              <button className="mt-4 bg-[#000000] text-white py-2 px-20 rounded-full">
                Apply Filter{" "}
              </button>{" "}
              {/* Dress style options */}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4 mx-auto">
          <h1 className="font-semibold mt-10 px-2 text-3xl">Casual</h1>
          {/* Main content goes here */}

          <div className="flex flex-wrap gap-4">
            <div className="w-64 p-4">
              <img
                src="CourageGraphicTShirt.jpg"
                alt="Courage Graphic T-shirt"
                className="w-full h-auto rounded-2xl"
              />
              <p className="mt-2">Courage Graphic T-shirt</p>
              <p>$145</p>
            </div>
            <div className="w-64 p-4">
              <img
                src="LooseFitBermudaShorts.jpg"
                alt="Loose Fit Bermuda Shorts"
                className="w-full h-auto rounded-2xl"
              />
              <p className="mt-2">Loose Fit Bermuda Shorts</p>
              <p>$80</p>
            </div>
            <div className="w-64 p-4">
              <img
                src="FadedSkinnyJeans.jpg"
                alt="Faded Skinny Jeans"
                className="w-full h-auto rounded-2xl"
              />
              <p className="mt-2">Faded Skinny Jeans</p>
              <p>$210</p>
            </div>
            <div className="w-64 p-4">
              <img
                src="CourageGraphicTShirt.jpg"
                alt="Courage Graphic T-shirt"
                className="w-full h-auto rounded-2xl"
              />
              <p className="mt-2">Courage Graphic T-shirt</p>
              <p>$145</p>
            </div>
            <div className="w-64 p-4">
              <img
                src="LooseFitBermudaShorts.jpg"
                alt="Loose Fit Bermuda Shorts"
                className="w-full h-auto rounded-2xl"
              />
              <p className="mt-2">Loose Fit Bermuda Shorts</p>
              <p>$80</p>
            </div>
            <div className="w-64 p-4">
              <img
                src="FadedSkinnyJeans.jpg"
                alt="Faded Skinny Jeans"
                className="w-full h-auto rounded-2xl"
              />
              <p className="mt-2">Faded Skinny Jeans</p>
              <p>$210</p>
            </div>
            <div className="w-64 p-4">
              <img
                src="CourageGraphicTShirt.jpg"
                alt="Courage Graphic T-shirt"
                className="w-full h-auto rounded-2xl"
              />
              <p className="mt-2">Courage Graphic T-shirt</p>
              <p>$145</p>
            </div>
            <div className="w-64 p-4">
              <img
                src="LooseFitBermudaShorts.jpg"
                alt="Loose Fit Bermuda Shorts"
                className="w-full h-auto rounded-2xl"
              />
              <p className="mt-2">Loose Fit Bermuda Shorts</p>
              <p>$80</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
