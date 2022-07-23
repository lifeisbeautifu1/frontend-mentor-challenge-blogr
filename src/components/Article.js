import React from 'react';
import photo from '../images/illustration-phones.svg';
import circle from '../images/bg-pattern-circles.svg';

const Article = () => {
  return (
    <div className="my-48 w-full relative">
      <div className="absolute bottom-0 md:top-[-50px]  left-0 w-full h-4/5 md:h-full lg:h-4/5 lg:top-0 md body-bg rounded-tr-[70px] rounded-bl-[70px] overflow-hidden">
        <div className="relative">
          <img
            src={circle}
            class="absolute top-[-150px] lg:top-[-500px] lg:left-[-150px]"
            alt="circle"
          />
        </div>
      </div>
      <div className="w-4/5 m-auto flex flex-col md:flex-row relative gap-4">
        <div className="flex-1 mt-[-50px]">
          <img
            className="h-full w-full object-cover"
            src={photo}
            alt="phones"
          />
        </div>
        <div className="flex-1 flex flex-col items-center text-center lg:text-left lg:items-start gap-8 justify-center mb-20">
          <h1 className="text-4xl">State of the Art Infrastructure</h1>
          <p className="max-w-[450px] text-gray-300 leading-relaxed">
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
