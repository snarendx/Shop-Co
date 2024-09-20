import React from "react";

const BrowseByDressStyle = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-center text-4xl font-extrabold mb-6">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:flex flex-wrap justify-around px-4 py-6">
          {/* Casual Card */}
          <div className="relative bg-white rounded-2xl  shadow-md overflow-hidden">
            <img
              src="Casual.jpg"
              alt="Casual"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0  flex items-center justify-center">
              <span className="text-white font-semibold text-xl"></span>
            </div>
          </div>
          {/* Formal Card */}
          <div className="relative bg-white rounded-2xl object-cover shadow-md overflow-hidden">
            <img src="Formal.jpg" alt="Formal" className="w-full h-56 " />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-semibold text-xl"></span>
            </div>
          </div>
          {/* Party Card */}
          <div className="relative bg-white object-cover rounded-2xl shadow-md overflow-hidden">
            <img src="Party.jpg" alt="Party" className="w-full h-56 " />
            <div className="absolute inset-0  flex items-center justify-center">
              <span className="text-white font-semibold text-xl">Party</span>
            </div>
          </div>
          {/* Gym Card */}
          <div className="relative bg-white rounded-2xl  shadow-md overflow-hidden">
            <img src="Gym.jpg" alt="Gym" className="w-full h-56 object-cover" />
            <div className="absolute inset-0  flex items-center justify-center">
              <span className="text-white font-semibold text-xl"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByDressStyle;
