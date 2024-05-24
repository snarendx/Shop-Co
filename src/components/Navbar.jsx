import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-4 lg:px-12 lg:py-8">
        <Link to="/" className="text-[32px] font-extrabold">
          SHOP.CO
        </Link>
        <div className="hidden md:flex space-x-4 lg:space-x-10">
          <Link to="/" className="hover:text-gray-700">
            Shop
            <select name="text" className="bg-white">
              1
            </select>
          </Link>
          <Link to="/sale" className="hover:text-gray-700">
            On Sale
          </Link>
          <Link to="/new" className="hover:text-gray-700">
            New Arrivals
          </Link>
          <Link to="/brands" className="hover:text-gray-700">
            Brands
          </Link>
        </div>
        <div className="flex items-center gap-4 lg:gap-10 w-full lg:w-auto mt-4 lg:mt-0">
          <div className="relative w-full lg:w-[500px]">
            <CiSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search for products ..."
              className="w-full pl-10 transition-all duration-300 rounded-full border 
              border-gray-300 px-2 py-1 focus:outline-none focus:border-black bg-gray-100"
            />
          </div>
        </div>
        <div className="flex space-x-10 lg:space-x-10 mt-4 lg:mt-0">
          <FaShoppingCart size={20} />
          <FaUserCircle size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
