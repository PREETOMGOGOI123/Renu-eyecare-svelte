import React, { useState } from 'react';
import './LeftAnimatedCards.css';

function LeftAnimatedCard() {
  // Data for the cards
  const services = [
    {
      title: 'Phacoemulsification with Modern IOLs',
      description: [
        'Enhanced Monofocal IOLs',
        'Extended Depth of Focus (EDOF) Lenses', 
        'Trifocal IOLs for Multiple Focus Points',
        'Toric IOLs for Astigmatism Correction',
        'Multifocal IOLs for Near and Far Vision'
      ],
      backgroundUrl: '/images/exclusiveSection/ipl machine.png'
    },
    {
      title: 'Vitreo-retinal surgeries',
      description: [
        'Retinal Detachment Surgery',
        'Macular Hole Treatment',
        'Eye Trauma Management',
        'Dropped IOL/Lens Retrieval',
        'Secondary IOL Implantation',
        'Diabetic Vitrectomy'
      ],
      backgroundUrl: '/images/exclusiveSection/ipl machine.png'
    },
    {
      title: 'Lacrimal System Procedures',
      description: [
        'Dacryocystorhinostomy (DCR)',
        'Dacryocystectomy (DCT)',
        'Lacrimal Stent Placement',
        'Nasolacrimal Duct Probing',
        'Canalicular Repair',
        'Tear Duct Reconstruction'
      ],
      backgroundUrl: '/images/exclusiveSection/ipl machine.png'
    },
    {
      title: 'Ocular surface reconstruction surgeries',
      description: [
        'Simple Limbal Epithelial Transplantation (SLET)',
        'Amniotic Membrane Graft (AMG)',
        'Mucous Membrane Graft (MMG)',
        'Conjunctival Auto Grafting',
        'Limbal Stem Cell Transplantation'
      ],
      backgroundUrl: '/images/exclusiveSection/ipl machine.png'
    },
    {
      title: 'Glaucoma surgeries',
      description: [
        'Trabeculectomy',
        'Goniotomy',
        'Minimally Invasive Glaucoma Surgery (MIGS)',
        'Glaucoma Drainage Device (GDD) Implantation',
        'Cyclophotocoagulation',
        'iStent Implantation'
      ],
      backgroundUrl: '/images/exclusiveSection/ipl machine.png'
    }
  ];

  // State for tracking which card is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Event handlers
  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  // Duplicate the services array for continuous scrolling effect
  const duplicatedServices = [...services, ...services];

  return (
    <div className="carousel-container relative overflow-hidden bg-white">
      <div className="animate-scroll flex w-max gap-6 p-10">
        {duplicatedServices.map((service, i) => (
          <div
            key={i}
            className="carousel-card relative w-64 cursor-pointer overflow-hidden rounded-md 
                border border-gray-200 bg-white shadow-lg transition-all duration-300 
                ease-in-out hover:z-20"
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={handleLeave}
          >
            {/* Always Visible Summary */}
            <div className="flex h-20 flex-col justify-center p-4">
              <h3 className="text-lg font-semibold text-[#009a9a]">{service.title}</h3>
            </div>

            {/* Expandable Details Section */}
            <div
              className="overflow-auto px-4 transition-all duration-300 ease-in-out"
              style={{
                maxHeight: hoveredIndex === i ? '200px' : '0',
                opacity: hoveredIndex === i ? '1' : '0',
                paddingTop: hoveredIndex === i ? '1rem' : '0',
                paddingBottom: hoveredIndex === i ? '1rem' : '0'
              }}
            >
              <ul className="list-disc pl-4">
                {service.description.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600 mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftAnimatedCard;
