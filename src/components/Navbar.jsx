import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg md:text-2xl lg:text-3xl font-extrabold text-gray-800 hover:text-gray-900"
          >
            SHOP.CO
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-800 hover:text-gray-900 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/shop" className="text-gray-800 hover:text-gray-900">
              Shop
            </Link>
            <Link to="/OnSale" className="text-gray-800 hover:text-gray-900">
              On Sale
            </Link>
            <Link
              to="/NewArrivals"
              className="text-gray-800 hover:text-gray-900"
            >
              New Arrivals
            </Link>
            <Link to="/brands" className="text-gray-800 hover:text-gray-900">
              Brands
            </Link>
          </div>

          {/* Search and Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative w-28 sm:w-40 md:w-64 lg:w-96">
              <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400 transition-colors w-full"
              />
            </div>
            <div className="flex space-x-4">
              <Link to="/cart">
                <FaShoppingCart
                  className="text-gray-800 hover:text-gray-900"
                  size={20}
                />
              </Link>
              <Link to="/account">
                <FaUserCircle
                  className="text-gray-800 hover:text-gray-900"
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-0">
            <div className="flex flex-col space-y-4">
              <Link to="/shop" className="text-gray-800 hover:text-gray-900">
                Shop
              </Link>
              <Link to="/OnSale" className="text-gray-800 hover:text-gray-900">
                On Sale
              </Link>
              <Link
                to="/NewArrivals"
                className="text-gray-800 hover:text-gray-900"
              >
                New Arrivals
              </Link>
              <Link to="/brands" className="text-gray-800 hover:text-gray-900">
                Brands
              </Link>

              {/* Mobile Search and Icons */}
              <div className="relative w-full mt-4">
                <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400 transition-colors w-full"
                />
              </div>
              <div className="flex justify-between space-x-4 mt-4">
                <Link to="/cart">
                  <FaShoppingCart
                    className="text-gray-800 hover:text-gray-900"
                    size={20}
                  />
                </Link>
                <Link to="/account">
                  <FaUserCircle
                    className="text-gray-800 hover:text-gray-900"
                    size={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
