import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const NewArrivals = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">NEW ARRIVALS</h2>
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 overflow-x-auto">
          <div className="w-64 p-4 text-left flex-shrink-0">
            <img
              src="TShirt.jpg"
              alt="Product 1"
              className="w-full h-auto rounded-2xl"
            />
            <p className="mt-2">T-shirt with Tape Details</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) =>
                  index < 4 ? (
                    <FaStar key={index} className="text-yellow-500" />
                  ) : (
                    <FaStarHalf key={index} className="text-yellow-500" />
                  )
                )}
                <p>4.5/5</p>
              </div>
            </div>
            <p className="font-bold">$120</p>
          </div>

          <div className="w-64 p-4 text-left flex-shrink-0">
            <img
              src="SkinnyJeans.jpg"
              alt="Product 2"
              className="w-full h-auto rounded-2xl"
            />
            <p className="mt-2">Skinny Fit Jeans</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  {[...Array(4)].map((_, index) =>
                    index < 3 ? (
                      <FaStar key={index} className="text-yellow-500" />
                    ) : (
                      <FaStarHalf key={index} className="text-yellow-500" />
                    )
                  )}
                  <p>3.5/5</p>
                </div>
                <div className="flex items-center mt-2">
                  <p className="font-bold">$240</p>
                  <p
                    className="text-gray-500 ml-2"
                    style={{ textDecoration: "line-through" }}
                  >
                    $260
                  </p>
                  <div className="rounded-full h-8 w-20 bg-red-100 ml-2 flex justify-center items-center text-red-500">
                    -20%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-64 p-4 text-left flex-shrink-0">
            <img
              src="CheckRedShirt.jpg"
              alt="Product 3"
              className="w-full h-auto rounded-2xl"
            />
            <p className="mt-2">Checkered Shirt</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) =>
                  index < 4 ? (
                    <FaStar key={index} className="text-yellow-500" />
                  ) : (
                    <FaStarHalf key={index} className="text-yellow-500" />
                  )
                )}
                <p>4.5/5</p>
              </div>
            </div>
            <p className="font-bold">$180</p>
          </div>

          <div className="w-64 p-4 text-left flex-shrink-0">
            <img
              src="SleeveStripedTShirt.jpg"
              alt="Product 4"
              className="w-full h-auto rounded-2xl"
            />
            <p className="mt-2">Sleeve Striped T-shirt</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) =>
                  index < 4 ? (
                    <FaStar key={index} className="text-yellow-500" />
                  ) : (
                    <FaStarHalf key={index} className="text-yellow-500" />
                  )
                )}
                <p>4.5/5</p>
              </div>
            </div>
            <p className="font-bold">$130</p>
          </div>
        </div>
        <button className="mt-6 bg-[#000000]/10 text-black py-2 px-10 rounded-full">
          View All
        </button>
        <hr className="my-10 border-black/10" />
      </div>
    </section>
  );
};

export default NewArrivals;
