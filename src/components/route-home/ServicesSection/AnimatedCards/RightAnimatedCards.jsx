import React, { useState } from 'react';
import './RightAnimatedCards.css'; // Import the CSS file for animations

function RightAnimatedCards() {
// Data for the cards
const services = [
{
title: 'Intra-ocular injections:',
description: [
'Bevacizumab ',
'Ranibizumab',
'Brolucizumab)',
'Faricimab',
'Aflibercept',
'Dexamethasone implant'
],
backgroundUrl: '/images/exclusiveSection/ipl machine.png'
},
{
title: 'Corneal transplantation surgeries:',
description: [
'PK (Penetrating Keratoplasty)',
'DALK (Deep Anterior Lamellar Keratoplasty)',
'DSEK (Descemet Stripping Endothelial Keratoplasty)',
'DMEK (Descemet Membrane Endothelial Keratoplasty)',
'KPro (Keratoprosthesis)'
],
backgroundUrl: '/images/exclusiveSection/ipl machine.png'
},
{
title: 'Reconstructive & Aesthetic Surgery',
description: [
'Reconstructive Surgery',
'Blepharoplasty',
'Facial Rejuvenation',
'Eyelid Reconstruction',
'Botox Treatments'
],
backgroundUrl: '/images/exclusiveSection/ipl machine.png'
},
{
title: 'Oculoplasty surgeries and facial esthetics',
description: [
'Upper & Lower Eyelid Surgery',
'Ptosis Correction',
'Orbital Reconstruction',
'Tear Duct Surgery',
'Cosmetic Procedures'
],
backgroundUrl: '/images/exclusiveSection/ipl machine.png'
},
{
title: 'Dry Eye Disease(DED)',
description: [
'Diagnosis and staging',
'LLLT',
'IPL'
],
backgroundUrl: '/images/exclusiveSection/ipl machine.png'
},
{
title: 'Lasers',
description: [
'Diagnosis and staging',
'LLLT',
'IPL',
'Anterior segment NdYAG',
'Posterior segment Fd NdYAG (green)'
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
className="carousel-card relative w-64 cursor-pointer overflow-visible rounded-md
border border-gray-200 bg-white shadow-lg transition-all duration-300
ease-in-out hover:z-20"
onMouseEnter={() => handleHover(i)}
onMouseLeave={handleLeave}
>
{/* Always Visible Summary */}
<div className="flex h-20 flex-col justify-center p-4">
<h3 className="text-lg font-semibold text-[#009a9a]">{service.title}</h3>
</div>

text
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
</div> ); }
export default RightAnimatedCards;