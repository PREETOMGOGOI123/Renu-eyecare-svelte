import React from 'react';
import RightAnimatedCards from './AnimatedCards/RightAnimatedCards'
import LeftAnimatedCards from './AnimatedCards/LeftAnimatedCards'

function ServicesSection() {
  return (
    <section className="h-screen bg-white w-full flex flex-col justify-center items-center relative" id='services'>
      <div className="container mx-auto px-4">
        <div>
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Services
            </h2>
            <div className="mb-4 mx-auto h-1.5 w-24 rounded-full bg-[#009a9a]"></div>
          </div>
        </div>
        <LeftAnimatedCards />
        <RightAnimatedCards />
      </div>
    </section>
  );
}

export default ServicesSection;