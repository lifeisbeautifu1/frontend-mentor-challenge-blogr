import React from 'react';

const Header = () => {
  return (
    <div className="h-[400px] mt-28 flex flex-col items-center relative z-10 gap-6 text-center px-6">
      <h1 className="text-5xl md:text-6xl font-[700] leading-tight">
        A modern publishing platform
      </h1>
      <p className="text-gray-200 text-lg">
        Grow your audience and build your online brand
      </p>
      <div className="flex mt-4 items-center gap-4 font-secondary font-[500]">
        <button className="bg-white text-lightRed hover:bg-veryLightRed hover:text-white transition duration-200 py-3 px-4 rounded-full cursor-pointer">
          Start for Free
        </button>
        <button className="py-3 px-6 rounded-full border border-white hover:bg-white hover:text-lightRed transition duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Header;
