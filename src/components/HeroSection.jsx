const HeroSection = () => {
  return (
    <section className="bg-[#F2F0F1] py-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center text-left px-10">
        <div className="flex-1">
          <h1 className="text-4xl lg:text-7xl font-extrabold mb-6 lg:mb-10">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-lg mb-6 lg:mb-8">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-gradient-to-r from-black to-black hover:scale-105 duration-200 text-white py-2 px-12 rounded-full">
            Shop Now
          </button>
          <div className="flex flex-col lg:flex-row items-start lg:items-center font-semibold mt-8 space-y-4 lg:space-y-0 lg:space-x-12">
            <div>
              <p className="text-2xl font-bold">200+</p>
              <p className="text-lg">International Brands</p>
            </div>
            <div className="h-10 border-l border-black hidden lg:block"></div>
            <div>
              <p className="text-2xl font-bold">2,000+</p>
              <p className="text-lg">High-Quality Products</p>
            </div>
            <div className="h-10 border-l border-black hidden lg:block"></div>
            <div>
              <p className="text-2xl font-bold">30,000+</p>
              <p className="text-lg">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-8 lg:mt-0 lg:ml-8">
          <img
            src="CoupleImage.png"
            alt="Fashionable Clothing"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
