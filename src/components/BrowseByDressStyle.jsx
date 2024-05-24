import React from "react";

const BrowseByDressStyle = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-center text-4xl font-extrabold mb-6">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Casual Card */}
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="Casual.jpg"
            alt="Casual"
            className="w-full h-56 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
            <span className="text-white font-semibold">Casual</span>
          </div>
        </div>
        {/* Formal Card */}
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="Formal.jpg"
            alt="Formal"
            className="w-full h-56 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
            <span className="text-white font-semibold">Formal</span>
          </div>
        </div>
        {/* Party Card */}
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="Party.jpg"
            alt="Party"
            className="w-full h-56 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
            <span className="text-white font-semibold">Party</span>
          </div>
        </div>
        {/* Gym Card */}
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img src="Gym.jpg" alt="Gym" className="w-full h-56 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
            <span className="text-white font-semibold">Gym</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByDressStyle;
