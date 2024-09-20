import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HappyCustomers = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-extrabold">OUR HAPPY CUSTOMERS</h2>
        <div className="flex space-x-2">
          <button onClick={scrollLeft} className="p-2 bg-white rounded-full shadow-md">
            <FaArrowLeft />
          </button>
          <button onClick={scrollRight} className="p-2 bg-white rounded-full shadow-md">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="overflow-x-hidden" ref={scrollRef}>
          <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
            {/* Card 1 */}
            <div className="min-w-[250px] md:min-w-[300px] bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <span className="ml-2 font-semibold">
                  Sarah M. <span className="text-green-500">✔</span>
                </span>
              </div>
              <p>
                "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
              </p>
            </div>
            {/* Card 2 */}
            <div className="min-w-[250px] md:min-w-[300px] bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <span className="ml-2 font-semibold">
                  Alex K. <span className="text-green-500">✔</span>
                </span>
              </div>
              <p>
                "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
              </p>
            </div>
            {/* Card 3 */}
            <div className="min-w-[250px] md:min-w-[300px] bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <span className="ml-2 font-semibold">
                  James L. <span className="text-green-500">✔</span>
                </span>
              </div>
              <p>
                "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
              </p>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
