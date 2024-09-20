import React, { useState } from "react";
import { TbChartCandleFilled, TbMathGreater } from "react-icons/tb";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Home = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState(50); 

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const totalPages = 8; 

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(parseInt(event.target.value));
  };

  return (
    <section className="py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between px-4 lg:px-6">
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
            <ul className="space-y-1">
              <li>T-Shirts</li>
              <li>Shorts</li>
              <li>Shirts</li>
              <li>Hoodie</li>
              <li>Jeans</li>
            </ul>
            <hr className="my-2" />
            <div>
              <h2 className="text-lg font-semibold">Price</h2>
              <input
                type="range"
                min="50"
                max="200" 
                value={selectedPrice}
                onChange={handlePriceChange}
                className="w-full mt-2"
              />
              <p className="text-center">${selectedPrice}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Select Colors</h2>
              <div className="flex flex-wrap mt-2">
                {["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"].map(
                  (color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorSelection(color)}
                      className={`w-8 h-8 rounded-full border-black mr-2 mb-2 ${
                        selectedColor === color ? "border-2" : ""
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  )
                )}
              </div>
              <div className="flex flex-wrap mt-2">
                {["#00FFFF", "#FFA500", "#008000", "#800080", "#808080"].map(
                  (color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorSelection(color)}
                      className={`w-8 h-8 rounded-full border-black mr-2 mb-2 ${
                        selectedColor === color ? "border-2" : ""
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  )
                )}
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
              <ul className="space-y-1">
                <li>Casual</li>
                <li>Formal</li>
                <li>Party</li>
                <li>Gym</li>
              </ul>
              <button className="mt-4 bg-[#000000] text-white py-2 px-20 rounded-full">
                Apply Filter{" "}
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4 mx-auto">
          <h1 className="font-semibold mt-10 px-2 text-2xl">Casual</h1>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { src: "CourageGraphicTShirt.jpg", name: "Courage Graphic T-shirt", price: 145 },
              { src: "LooseFitBermudaShorts.jpg", name: "Loose Fit Bermuda Shorts", price: 80 },
              { src: "FadedSkinnyJeans.jpg", name: "Faded Skinny Jeans", price: 210 },
              { src: "CourageGraphicTShirt.jpg", name: "Courage Graphic T-shirt", price: 145 },
              { src: "LooseFitBermudaShorts.jpg", name: "Loose Fit Bermuda Shorts", price: 80 },
              { src: "FadedSkinnyJeans.jpg", name: "Faded Skinny Jeans", price: 210 },
              { src: "CourageGraphicTShirt.jpg", name: "Courage Graphic T-shirt", price: 145 },
              { src: "LooseFitBermudaShorts.jpg", name: "Loose Fit Bermuda Shorts", price: 80 },
            ].map((item, index) => (
              <div key={index} className="w-64 p-4">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-auto rounded-2xl"
                />
                <p className="mt-2">{item.name}</p>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-center items-center flex-wrap">
  <button
    onClick={handlePreviousPage}
    disabled={currentPage === 1}
    className="mx-1 my-1 px-2 py-1 rounded bg-gray-300 disabled:opacity-50"
  >
    Previous
  </button>
  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      className={`mx-1 my-1 px-2 py-1 rounded ${
        currentPage === index + 1 ? "bg-gray-500 text-white" : "bg-gray-300"
      }`}
    >
      {index + 1}
    </button>
  ))}
  <button
    onClick={handleNextPage}
    disabled={currentPage === totalPages}
    className="mx-1 my-1 px-2 py-1 rounded bg-gray-300 disabled:opacity-50"
  >
    Next
  </button>
</div>

    </section>
  );
};

export default Home;
