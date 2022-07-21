import React from 'react';

const Section = ({
  heading,
  reverse,
  firstHeading,
  firstParagraph,
  secondHeading,
  secondParagraph,
  image,
}) => {
  return (
    <div
      className="text-veryDarkBlue w-4/5 mx-auto flex flex-col items-center
    gap-10 mb-40"
    >
      {heading && (
        <h1 className="mt-20 mb-10 text-center text-3xl font-bold">
          {heading}
        </h1>
      )}

      <div
        className={`flex flex-col-reverse ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } gap-10`}
      >
        <div className="flex-1 flex flex-col gap-10 text-center md:text-left">
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-2xl ">{firstHeading}</h1>
            <p className="text-gray-500 leading-relaxedt">{firstParagraph}</p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-2xl">{secondHeading}</h1>
            <p className="text-gray-500 leading-relaxed">{secondParagraph}</p>
          </div>
        </div>
        <div className="flex-1 relative">
          <img
            class="md:absolute md:top-[-75px] md:right-0"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
