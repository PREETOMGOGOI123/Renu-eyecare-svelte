import React, { useState, useEffect } from 'react';
import './HoverCard.css' // Make sure this import is correct if CSS is separate

function HoverCared() {
  const services = [
    {
      title: 'AI Management System',
      description:
        'Our AI system automates patient records, appointment scheduling, and treatment recommendations, reducing wait times and improving accuracy in diagnoses. It helps doctors make informed decisions by analyzing patient history and symptoms.',
      backgroundUrl:
        'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Completely automatic digital refraction suite',
      description:
        "Advanced computerized system that precisely measures your eye's prescription without manual adjustments. More accurate than traditional methods and provides faster, more comfortable vision tests.",
      backgroundUrl: '/images/exclusiveSection/Automated Digital Refraction System.webp',
    },
    {
      title: 'No touch Eye Pressure measurement',
      description:
        'Uses air puff technology to measure eye pressure without touching the eye. Essential for glaucoma screening and monitoring, this comfortable procedure takes seconds and requires no eye drops.',
      backgroundUrl: '/images/exclusiveSection/no touch eye preassure mangement.jpg',
    },
    {
      title: 'Ultra high resolution scanning of Cornea and Lens',
      description:
        "Creates detailed 3D maps of your eye's front surface and lens using advanced imaging technology. Helps detect early signs of conditions like keratoconus and cataracts for timely treatment.",
      backgroundUrl: '/images/exclusiveSection/Corenea Lens scanning.png',
    },
    {
      title: 'Ultra wide field, high resolution, laser fundus photos',
      description:
        'Comprehensive retinal imaging with superior detail and coverage',
      backgroundUrl: '/images/exclusiveSection/Laser Fundus imaging.jpg',
    },
    {
      title: 'Dye-less fundus angiography by Optical Coherence Tomography (OCT)',
      description:
        'Non-invasive blood vessel imaging using cutting-edge OCT technology',
      backgroundUrl: '/images/exclusiveSection/Dye less fundus angiography.png',
    },
    {
      title: 'Laser assisted, ultra wide field, high resolution, dye fundus angiography',
      description:
        'Advanced angiography combining laser technology with wide-field imaging',
      backgroundUrl: '/images/exclusiveSection/laser assisted dye fundus.png',
    },
    {
      title: 'Computerised Dry Eye Disease Diagnosis',
      description:
        'Comprehensive diagnostic system for accurate detection and management of dry eye disease',
      backgroundUrl: '/images/exclusiveSection/DED diagonasis.png',
    },
    {
      title: 'Adult amblyopia (Lazy eye) treatment',
      description:
        'Innovative treatment solutions for adult amblyopia to improve vision and quality of life',
      backgroundUrl: '/images/exclusiveSection/Adult amblyopia.png',
    },
    {
      title: 'Corneal topography',
      description:
        'Detailed mapping of the corneal surface for accurate diagnosis and treatment planning',
      backgroundUrl: '/images/exclusiveSection/cornea topography.png',
    },
    {
      title: 'Corneal endothelial cell analysis',
      description:
        'In-depth analysis of corneal endothelial cells for precise diagnosis and monitoring',
      backgroundUrl: '/images/exclusiveSection/corneal endothelial.png',
    },
    {
      title: 'ICG Angiography of fundus',
      description:
        'Advanced imaging technique using indocyanine green dye for detailed visualization of choroidal blood vessels',
      backgroundUrl: '/images/exclusiveSection/ICG ANGIOGRAPHY.png',
    },
    {
      title: 'Intense Pulse Light (IPL) treatment of Dry Eye',
      description:
        'Advanced treatment using intense pulsed light therapy for dry eye disease management',
      backgroundUrl: '/images/exclusiveSection/ipl machine.png',
    },
  ];

  // State to manage the flipped state for mobile/tablet
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  // Function to toggle the flip state for a specific card on click (mobile/tablet)
  const handleCardClick = (index) => {
      // Only toggle if screen width is less than md (768px default in Tailwind)
      if (window.innerWidth < 768) {
          setFlippedCardIndex(flippedCardIndex === index ? null : index);
      }
  };

  // Optional: Close any open card if the window is resized to desktop size
  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth >= 768 && flippedCardIndex !== null) {
              setFlippedCardIndex(null);
          }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [flippedCardIndex]); // Add flippedCardIndex to dependencies


  return (
    <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div
          key={index}
          className="group h-70 w-90 perspective-[1000px]"
          onClick={() => handleCardClick(index)} // Add click handler
        >
          <div
            className={`transform-style-preserve-3d relative h-full w-full transition-transform duration-700
              ${
                 // Apply rotate-y-180 if this card's index matches flippedCardIndex (for mobile)
                 flippedCardIndex === index ? 'rotate-y-180' : ''
              }
              ${
                // Apply rotate-y-180 on group hover for medium and larger screens
                'md:group-hover:rotate-y-180'
              }
            `}
          >
            {/* Front Face */}
            <div className="absolute inset-0 h-full w-full rounded-md overflow-hidden shadow-2xl">
              {/* Image */}
              <img
                src={service.backgroundUrl}
                alt={service.title}
                className="h-2/3 w-full object-cover object-top border-t-4 border-[#009a9a]"
              />
              {/* Dim overlay */}
              <div className="absolute inset-0 h-2/3 bg-[#3f480a]/10"></div>
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-sm text-[#009a9a] font-semibold uppercase line-clamp-2">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Back Face */}
            <div className="backface-visibility-hidden absolute inset-0 h-full w-full rotate-y-180 rounded-md bg-[#009a9a]/90 p-6 shadow-md border-t-4 border-black">
              <div className="flex h-full flex-col justify-center">
                <p className="text-lg text-white">{service.description}</p>
              </div>
              {/* Close button for mobile/tablet when flipped */}
                {flippedCardIndex === index && (
                     <button
                        className="absolute top-2 right-2 text-white text-2xl font-bold focus:outline-none"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent click from re-flipping
                            setFlippedCardIndex(null);
                        }}
                        aria-label="Close card"
                     >
                        &times;
                     </button>
                )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HoverCared;
