import React, { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbChartCandleFilled } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

import { TbMathGreater } from "react-icons/tb";

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("olive");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [selectedThumbnail, setSelectedThumbnail] = useState("1TShirt");
  const [selectedLink, setSelectedLink] = useState(null);

  const handleThumbnailClick = (thumbnail) => {
    setSelectedThumbnail(thumbnail);
  };

  const handleLinkClick = (linkName) => {
    setSelectedLink(linkName);
  };

  const getThumbnailClassName = (thumbnail) => {
    return `w-full md:w-44 h-44 md:h-full rounded-xl ${
      selectedThumbnail === thumbnail ? "border border-black" : ""
    }`;
  };

  const rating = 4.5;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {halfStars === 1 && (
          <FaStarHalf key="half-star" className="text-yellow-500" />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <FaStar key={`empty-${index}`} className="text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <div className="p-8 bg-white">
      <p className="flex items-center">
        Home <TbMathGreater />
        Shop <TbMathGreater />
        Men <TbMathGreater />
        T- shirts
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Thumbnails */}
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col space-y-2 md:mr-4 rounded-3xl">
            <img
              src="/1TShirt.jpg"
              alt="T-shirt thumbnail"
              className={getThumbnailClassName("1TShirt")}
              onClick={() => handleThumbnailClick("1TShirt")}
            />
            <img
              src="/2TShirt.jpg"
              alt="T-shirt thumbnail"
              className={getThumbnailClassName("2TShirt  rounded-3xl")}
              onClick={() => handleThumbnailClick("2TShirt")}
            />
            <img
              src="/3TShirt.jpg"
              alt="T-shirt thumbnail"
              className={getThumbnailClassName("3TShir rounded-3xlt")}
              onClick={() => handleThumbnailClick("3TShirt")}
            />
          </div>
          <div>
            <img
              src={`/${selectedThumbnail}.jpg`}
              alt="T-shirt"
              className="w-full h-full md:w-96 rounded-3xl"
            />
          </div>
        </div>
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-extrabold">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center">
            {renderStars(rating)}
            <p className="ml-2">{rating}/5</p>
          </div>
          <p className="text-2xl font-semibold text-red-500 mt-2">
            $260 <span className="line-through text-gray-500">$300</span>{" "}
            <span className="text-pink-500">-40%</span>
          </p>
          <p className="text-gray-600 mt-4">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr className="mt-2" />
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Select Colors</h2>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => setSelectedColor("olive")}
                className={`w-8 h-8 rounded-full ${
                  selectedColor === "olive" ? "border-2 border-black" : ""
                }`}
                style={{ backgroundColor: "#556B2F" }}
              ></button>
              <button
                onClick={() => setSelectedColor("navy")}
                className={`w-8 h-8 rounded-full ${
                  selectedColor === "navy" ? "border-2 border-black" : ""
                }`}
                style={{ backgroundColor: "#000080" }}
              ></button>
              <button
                onClick={() => setSelectedColor("green")}
                className={`w-8 h-8 rounded-full ${
                  selectedColor === "green" ? "border-2 border-black" : ""
                }`}
                style={{ backgroundColor: "#2E8B57" }}
              ></button>
            </div>
          </div>
          <hr className="mt-2" />
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Choose Size</h2>
            <div className="flex space-x-2 mt-2">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-1 rounded-3xl border ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <hr className="mt-2" />
          </div>
          <div className="mt-4 flex items-center py-1">
            <div className="flex border rounded-3xl overflow-hidden bg-gray-200">
              <button
                onClick={() => setQuantity(quantity - 1)}
                className="px-4 py-2 border-r border-t border-b rounded-l-2xl"
              >
                <FaMinus />
              </button>
              <span className="px-4 py-2 border-r border-t border-b">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 border-t border-b rounded-r-2xl"
              >
                <FaPlus />
              </button>
            </div>
            <div className="ml-4">
              <button className="px-20 py-2 bg-black text-white rounded-3xl">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Links: Product Details, Ratings & Reviews, FAQs */}
      <div className="flex justify-center space-x-24 mt-10">
        <Link
          to="/product-details"
          className={`px-4 py-2 ${
            selectedLink === "product-details" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleLinkClick("product-details")}
        >
          Product Details
        </Link>
        <Link
          to="/ratings-reviews"
          className={`px-4 py-2 ${
            selectedLink === "ratings-reviews" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleLinkClick("ratings-reviews")}
        >
          Ratings & Reviews
        </Link>
        <Link
          to="/faqs"
          className={`px-4 py-2 ${
            selectedLink === "faqs" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleLinkClick("faqs")}
        >
          FAQs
        </Link>
      </div>
      <hr />

      {/* All Reviews and Latest */}
      <div className="flex justify-between mt-8">
        <div>
          <p className="text-lg font-semibold">All Reviews (451)</p>
        </div>
        <div className="flex items-center space-x-2">
          {/* Icon */}
          <div className="rounded-full px-3 py-3 bg-gray-200 hover:bg-black hover:text-white">
            <TbChartCandleFilled />
          </div>
          {/* Latest */}
          <Link
            to="/latest"
            className="rounded-3xl px-4 py-2 bg-gray-200 hover:bg-black hover:text-white"
          >
            Latest
            <select
              name=""
              id=""
              className="bg-gray-200 hover:bg-black hover:text-white"
            >
              <option value="1"></option>
            </select>
          </Link>
          {/* Write a Review */}
          <Link
            to="/write-review"
            className="rounded-3xl ml-4 px-4 py-2 bg-gray-200 hover:bg-black hover:text-white"
          >
            Write a Review
          </Link>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Review 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center mb-2">
            <div className="flex items-center">{renderStars(5)}</div>
            <span className="ml-2 font-semibold">
              Emily R. <span className="text-green-500">✔</span>
            </span>
          </div>
          <p>
            "I've been a regular customer of Shop.co for years now, and their
            quality has never disappointed me. The T-shirts are not only stylish
            but also durable, which is why I keep coming back for more."
          </p>
        </div>

        {/* Review 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center mb-2">
            <div className="flex items-center">{renderStars(4)}</div>
            <span className="ml-2 font-semibold">
              Michael S. <span className="text-green-500">✔</span>
            </span>
          </div>
          <p>
            "Shop.co has been my go-to destination for trendy apparel. Their
            diverse collection ensures there's something for everyone, and the
            prices are unbeatable. Highly recommended!"
          </p>
        </div>

        {/* Review 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center mb-2">
            <div className="flex items-center">{renderStars(5)}</div>
            <span className="ml-2 font-semibold">
              Jessica L. <span className="text-green-500">✔</span>
            </span>
          </div>
          <p>
            "What sets Shop.co apart is their commitment to customer
            satisfaction. Not only do they offer trendy clothes, but their
            customer service is also top-notch. Truly impressed!"
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center mb-2">
            <div className="flex items-center">{renderStars(5)}</div>
            <span className="ml-2 font-semibold">
              Jessica L. <span className="text-green-500">✔</span>
            </span>
          </div>
          <p>
            "What sets Shop.co apart is their commitment to customer
            satisfaction. Not only do they offer trendy clothes, but their
            customer service is also top-notch. Truly impressed!"
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center mb-2">
            <div className="flex items-center">{renderStars(5)}</div>
            <span className="ml-2 font-semibold">
              Jessica L. <span className="text-green-500">✔</span>
            </span>
          </div>
          <p>
            "What sets Shop.co apart is their commitment to customer
            satisfaction. Not only do they offer trendy clothes, but their
            customer service is also top-notch. Truly impressed!"
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center mb-2">
            <div className="flex items-center">{renderStars(5)}</div>
            <span className="ml-2 font-semibold">
              Jessica L. <span className="text-green-500">✔</span>
            </span>
          </div>
          <p>
            "What sets Shop.co apart is their commitment to customer
            satisfaction. Not only do they offer trendy clothes, but their
            customer service is also top-notch. Truly impressed!"
          </p>
        </div>
      </div>

      <div className="text-center">Load More Reviews</div>
    </div>
  );
};

export default ProductPage;
