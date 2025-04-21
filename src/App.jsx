import React, { useEffect, useRef } from 'react'; // Import useEffect and useRef
import Lenis from '@studio-freight/lenis'; // Import Lenis
import { useScroll } from 'motion/react';


import Header from '../src/components/shared/Header/Header';
import Hero from '../src/components/route-home/Hero/Hero';
import ExclusiveSection from './components/route-home/ExclusiveSection/ExclusiveSection';
import ServicesSection from './components/route-home/ServicesSection/ServicesSection';
import AboutUs from './components/route-home/aboutUs/AboutUs';
import ContactUs from './components/route-home/ContactUs/ContactUs';
import Footer from './components/route-home/Footer/Footer';


function App() {
  const lenisRef = useRef(null); // Create a ref to hold the Lenis instance

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenisInstance = new Lenis({
      duration: 1.5, // How long the scroll takes
      easing: (t) => Math.min(2, 1.001 - Math.pow(2, -10 * t)), // Easing function for smooth effect
      direction: 'vertical', // Vertical scrolling
      gestureDirection: 'vertical', // Gestures for vertical scrolling
      smooth: true, // Enable smooth scrolling
      smoothTouch: false, // Disable smooth scroll on touch devices (often better for mobile)
      touchMultiplier: 2, // Sensitivity on touch devices
      // You can add more options here if needed
    });

    lenisRef.current = lenisInstance; // Store the instance in the ref

    // Define the animation frame loop
    function raf(time) {
      lenisRef.current?.raf(time); // Update Lenis on each frame
      requestAnimationFrame(raf); // Request the next frame
    }

    // Start the animation frame loop
    requestAnimationFrame(raf);

    // Clean up Lenis instance when component unmounts
    return () => {
      lenisRef.current?.destroy();
    };
  }, []); // The empty dependency array ensures this runs only once on mount

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })

  return (

    <div className="relative overflow-x-hidden w-full">
      <Header />
      <Hero />
      <div className='relative h-fit'>
        <ExclusiveSection scrollYProgress={scrollYProgress} />
        <ServicesSection scrollYProgress={scrollYProgress} />
      </div>
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
//build