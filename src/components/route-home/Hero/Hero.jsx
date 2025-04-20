import React, { useState, useEffect } from 'react';

function HeroSectionWhatsapp() {
  const heading = "Serving for vision with passion and precision";
  const ctaText = "Contact us on WhatsApp";

  // --- IMPORTANT: REPLACE THESE ---
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1682663947087-94157b8e4a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Path to your image
  const backgroundImageAlt = 'Abstract background representing vision and precision';
  const whatsappNumber = '6026096029';
  const prefilledMessage = "Hello! I'm interested in your vision services."; // Message to prefill
  // --- END IMPORTANT ---

  // --- Scroll Effect Logic ---
  const [scrollY, setScrollY] = useState(0);
  const [headingScale, setHeadingScale] = useState(1);

  // Define how much scroll affects the scale
  const maxScrollEffectDistance = 500; // Pixels over which the scaling happens
  const minHeadingScale = 0; // The smallest the heading will get

  // Effect to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to update heading scale based on scroll position
  useEffect(() => {
    const scrollFraction = Math.min(1, scrollY / maxScrollEffectDistance);
    const newScale = 1 - scrollFraction * (1 - minHeadingScale);
    setHeadingScale(Math.max(minHeadingScale, newScale));
  }, [scrollY, minHeadingScale, maxScrollEffectDistance]);

  // Construct the WhatsApp URL dynamically
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    prefilledMessage
  )}`;

  return (
    <section className="relative flex h-screen md:items-center justify-center overflow-hidden text-white md:min-h-[80vh]">
      {/* Background Image */}
      <img
        src={backgroundImageUrl}
        alt={backgroundImageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="lazy"
      />

      {/* Overlay for Text Readability */}
      <div
        className="absolute inset-0 -z-10 bg-[#009a9a]/70"
        aria-hidden="true"
      ></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-cente md:bg-white/20 rounded-3xl shadow-4xl flex flex-col items-center mt-40 md:mt-0">
        <h1
          className="mb-10 text-4xl font-bold leading-tight tracking-wider px-5
            bg-black
            bg-clip-text text-transparent
            font-sans capitalize
            drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)]
            sm:text-3xl md:text-4xl lg:text-6xl text-center"
          style={{
            transform: `scale(${headingScale})`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {heading}
        </h1>

        {/* WhatsApp Link (Styled as Button) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex transform items-center gap-3 rounded-md
            bg-green-500 px-4 py-2 text-lg font-semibold text-white
            shadow-xl transition duration-300 ease-in-out
            hover:bg-green-600 hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-green-500
            focus:ring-offset-2 focus:ring-offset-green-800"
        >
          {/* WhatsApp SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-6 w-6 fill-current"
            aria-hidden="true"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .9c48.4 0 93.4 18.4 128.4 50.5 34.9 32.2 55.8 76.5 55.8 124.2 0 98.8-80.3 179.1-179.1 179.1-31.8 0-62.7-8.2-89.6-23.4l-6.1-3.6-66.5 17.4 17.8-64.8-3.9-6.4c-17.4-28.4-27.9-61.4-27.9-95.8 0-98.8 80.3-179.1 179.1-179.1zm129.2 211.1c-3.3-1.7-19.8-9.8-22.8-10.9-3.1-1.1-5.4-1.7-7.7 1.7-2.3 3.4-8.6 10.9-10.6 13.1-1.9 2.2-3.8 2.5-7.1 0.8-3.3-1.7-14-5.2-26.6-16.4-9.9-8.9-16.7-19.8-18.7-23.1-1.9-3.4-.2-5.2 1.5-6.9 1.5-1.5 3.3-3.9 4.9-5.8 1.6-1.9 2.2-3.4 3.3-5.6 1.1-2.3 0.5-4.3-0.3-6.1-0.8-1.7-7.7-18.5-10.5-25.4-2.8-6.8-5.6-5.9-7.7-5.9-2.1 0-4.5 0-6.8 0-2.3 0-6.1 0.8-9.2 4.1-3.1 3.4-11.9 11.6-11.9 28.2 0 16.6 12.2 32.7 13.9 34.9 1.7 2.2 23.7 36.1 57.4 50.5 8.4 3.6 15 5.8 20.1 7.5 10.8 3.6 20.7 3 28.7 1.8 8.8-1.2 19.8-8.1 22.6-15.9 2.8-7.8 2.8-14.4 1.9-15.9-0.8-1.5-3.1-2.5-6.4-4.2z"></path>
          </svg>
          <span>{ctaText}</span>
        </a>
      </div>
    </section>
  );
}

export default HeroSectionWhatsapp;
