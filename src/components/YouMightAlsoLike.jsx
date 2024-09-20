const YouMightAlsoLike = () => {
  return (
    <section className="py-0">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">YOU MIGHT ALSO LIKE</h2>
        <div className="flex flex-wrap justify-center space-x-0 md:space-x-6">
          <div className="w-full sm:w-64 p-4">
            <img
              src="PoloContrastTrims.jpg"
              alt="Product 9"
              className="w-full h-auto rounded-2xl"
            />
            <p className="mt-2">Polo with Contrast Trims</p>
            <p>$180</p>
          </div>
          <div className="w-full sm:w-64 p-4">
            <img
              src="GradientGraphicTShirt.jpg"
              alt="Product 10"
              className="w-full h-auto rounded-2xl"
            />
            <p className="mt-2">Gradient Graphic T-shirt</p>
            <p>$120</p>
          </div>
          <div className="w-full sm:w-64 p-4">
            <img
              src="PoloWithTipping.jpg"
              alt="Product 11"
              className="w-full h-auto rounded-2xl"
            />
            <p className="mt-2">Polo with Tipping Details</p>
            <p>$160</p>
          </div>
          <div className="w-full sm:w-64 p-4">
            <img
              src="BlackStripedTShirt.jpg"
              alt="Product 12"
              className="w-full h-auto rounded-2xl"
            />
            <p className="mt-2">Black Striped T-shirt</p>
            <p>$90</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouMightAlsoLike;
