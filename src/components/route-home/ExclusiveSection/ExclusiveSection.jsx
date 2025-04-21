import React from 'react';
import HoverCard from './HoverCard/HoverCared'

function ExclusiveSection() {
  return (
    <section className="bg-white pt-44 h-fit sticky top-0">
      <div className="container mx-auto px-4 pb-10">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            We are Unique and Exclusive
          </h2>
          <div className="mb-4 mx-auto h-1.5 w-24 rounded-full bg-[#009a9a]"></div>
          <p className="mx-auto mb-16 max-w-3xl text-xl text-gray-600">
            Comprehensive eye care solutions using advanced technology and specialized expertise
          </p>
        </div>
        <HoverCard />
      </div>
    </section>
  );
}

export default ExclusiveSection;
