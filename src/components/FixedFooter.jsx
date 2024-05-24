import React, { useState, useEffect } from 'react';

const FixedFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-0 left-0 right-0  bg-black p-4 text-white">
        <div className="container mx-auto max-w-screen-sm flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-lg md:text-xl font-extrabold mb-2 md:mb-0">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col items-center md:items-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="mb-2 p-2 w-full md:w-64 rounded-md text-black"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Subscribe for Newsletter
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default FixedFooter;
