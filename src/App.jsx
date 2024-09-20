import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import BrowseByDressStyle from "./components/BrowseByDressStyle";
import HappyCustomers from "./components/HappyCustomer";
import ProductPage from "./components/ProductPage";
import YouMightAlsoLike from "./components/YouMightAlsoLike";
import FooterComponent from "./FooterComponent";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";
import TemporaryFooter from "./components/Footer";

function OnSale() {
  return (
    <div>
      <BrowseByDressStyle />
      <Home />
    </div>
  );
}



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/NewArrivals" element={<NewArrivals />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/shop" element={<ProductPage />} />
            <Route path="/OnSale" element={<OnSale />} />
            <Route path="/Brands" element={<TopSelling />} />
            <Route path="/New Arrivals" element={<YouMightAlsoLike />} />
            <Route path="/Brands" element={<HappyCustomers />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
