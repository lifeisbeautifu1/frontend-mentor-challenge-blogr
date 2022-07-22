import React from 'react';
import photo from '../images/illustration-phones.svg';

const Article = () => {
  return (
    <div className="my-40 w-full relative">
      <div className="absolute bottom-0 left-0 w-full h-4/5 md:h-full body-bg rounded-tr-[70px] rounded-bl-[70px] "></div>
      <div className="w-4/5 m-auto flex flex-col md:flex-row relative gap-4">
        <div className="flex-1 mt-[-50px]">
          <img
            className="h-full w-full object-cover"
            src={photo}
            alt="phones"
          />
        </div>
        <div className="flex-1 flex flex-col items-center gap-8 justify-center mb-20">
          <h1 className="text-4xl">State of the Art Infrastructure</h1>
          <p className="w-[450px] text-gray-300 leading-relaxed text-center">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
