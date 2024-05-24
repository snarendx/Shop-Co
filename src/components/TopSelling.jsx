  const TopSelling = () => {
    return (
      <section className="py-0">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">TOP SELLING</h2>
          <div className="flex flex-wrap justify-center space-x-6">
            <div className="w-64 p-4">
              <img
                src="VerticalStripedShirt.jpg"
                alt="Product 5"
                className="w-full h-auto rounded-2xl"
              />
              <p className="mt-2">Vertical Striped Shirt</p>
              <p>$212</p>
            </div>
            <div className="w-64 p-4">
              <img
                src="CourageGraphicTShirt.jpg"
                alt="Product 6"
                className="w-full h-auto rounded-2xl"
              />
              <p className="mt-2">Courage Graphic T-shirt</p>
              <p>$145</p>
            </div>
            <div className="w-64 p-4">
              <img
                src="LooseFitBermudaShorts.jpg"
                alt="Product 7"
                className="w-full h-auto rounded-2xl"
              />
              <p className="mt-2">Loose Fit Bermuda Shorts</p>
              <p>$80</p>
            </div>
            <div className="w-64 p-4">
              <img
                src="FadedSkinnyJeans.jpg"
                alt="Product 8"
                className="w-full h-auto rounded-2xl"
              />
              <p className="mt-2">Faded Skinny Jeans</p>
              <p>$210</p>
            </div>
          </div>
          <button className="mt-4 bg-[#000000]/10 text-black py-2 px-10 rounded-full">
            View All
          </button>{" "}
        </div>
      </section>
    );
  };

  export default TopSelling;
