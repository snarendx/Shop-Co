import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import BrowseByDressStyle from "./components/BrowseByDressStyle";
import HappyCustomers from "./components/HappyCustomer";
import ProductPage from "./components/ProductPage";
import YouMightAlsoLike from "./components/YouMightAlsoLike";
import FooterComponent from "./FooterComponent";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
        {/* Additional content below the footer */}
        <NewArrivals />
        <TopSelling />
        <BrowseByDressStyle />
        <HappyCustomers />
      </div>
      <div>
        <ProductPage />
        <YouMightAlsoLike />
        <Home />

        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
