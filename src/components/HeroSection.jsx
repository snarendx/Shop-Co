const HeroSection = () => {
  return (
    <section className="bg-[#F2F0F1] py-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center text-left px-4 sm:px-6 lg:px-10">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 lg:mb-8 xl:mb-10">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 lg:mb-8">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-gradient-to-r from-black to-black hover:scale-105 duration-200 text-white py-3 px-10 rounded-full mx-auto block sm:mx-0 sm:inline mb-4 sm:mb-0">
            Shop Now
          </button>

          <div className="flex flex-col lg:flex-row items-center font-semibold mt-6 sm:mt-8 space-y-4 lg:space-y-0 lg:space-x-12">
            <div className="text-center lg:flex lg:flex-col">
              <p className="text-xl sm:text-2xl font-bold">200+</p>
              <p className="text-sm sm:text-lg">International Brands</p>
            </div>
            <div className="h-10 border-l border-black lg:hidden"></div>
            <div className="text-center lg:flex lg:flex-col">
              <p className="text-xl sm:text-2xl font-bold">2,000+</p>
              <p className="text-sm sm:text-lg">High-Quality Products</p>
            </div>
            <div className="h-10 border-l border-black lg:hidden"></div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold">30,000+</p>
              <p className="text-sm sm:text-lg">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-6 lg:mt-0 lg:ml-8">
          <img
            src="CoupleImage.png"
            alt="Fashionable Clothing"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-32 text-base sm:text-xl md:text-2xl lg:text-3xl">
            <span>VERSACE</span>
            <span>ZARA</span>
            <span>GUCCI</span>
            <span className="font-bold">PRADA</span>
            <span>Calvin Klein</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default HeroSection;
