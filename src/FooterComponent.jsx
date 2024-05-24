import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import {
  FaCcVisa,
  FaCcPaypal,
  FaCcApplePay,
  FaGooglePay,
} from "react-icons/fa6";
import { SiMastercard } from "react-icons/si";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-100 text-black">
      <div className="container mx-auto py-8 px-4">
        <div className="bg-black text-white p-8 rounded-md mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-3xl font-extrabold mb-4 md:mb-0">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 rounded-l-md border border-gray-300 mb-4 md:mb-0 md:mr-2"
              />
              <button className="bg-white text-black p-2 rounded-r-md">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg mb-2">SHOP.CO</h3>
            <p>
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#">
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">COMPANY</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">HELP</h3>
            <ul>
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Delivery Details</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">FAQ</h3>
            <ul>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Manage Deliveries</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">RESOURCES</h3>
            <ul>
              <li>
                <a href="#">Free eBooks</a>
              </li>
              <li>
                <a href="#">Development Tutorial</a>
              </li>
              <li>
                <a href="#">How to - Blog</a>
              </li>
              <li>
                <a href="#">Youtube Playlist</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-8" />
        <div className="flex justify-between items-center mt-8">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex space-x-4">
            <FaCcVisa className="text-2xl" />
            <SiMastercard className="text-2xl" />
            <FaCcPaypal className="text-2xl" />
            <FaCcApplePay className="text-2xl" />
            <FaGooglePay className="text-2xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
