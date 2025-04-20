import React from 'react';
import { motion } from 'framer-motion';


const AboutUs = () => {
  const highlights = [
    {
      number: "30+",
      title: "Years Experience",
      icon: "👨‍⚕️"
    },
    {
      number: "3",
      title: "Specialists",
      icon: "🏥"
    },
    {
      number: "100%",
      title: "Digital Care",
      icon: "🔬"
    }
  ];

  return (
    <section className=" py-16 bg-gradient-to-tr from-white to-[#009a9a]" id='about'>
      <div className="container mx-auto px-4 max-w-4xl  ">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-800 mb-3"
          >
            A Vision Nurtured Over Many Years
          </motion.h2>
          <div className="h-1 w-24 bg-[#009a9a] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <div className="text-3xl font-bold text-[#009a9a] mb-2">{item.number}</div>
              <div className="text-gray-600">{item.title}</div>
              
           </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;