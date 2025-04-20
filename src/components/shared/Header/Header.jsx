import { useState, useEffect, useRef } from 'react';
import './Header.css'
import eyeOpenBlack from '../../../assets/logo/eyeOpenBlack.png';
import eyeCloseBlack from '../../../assets/logo/eyeCloseBlack.png';
import logoEyeOpen from '../../../assets/logo/1.png';
import logoEyeClose from '../../../assets/logo/2.png';
import Navbar from './Navbar/Navbar';

function Header() {
  const [navOpaque, setNavOpaque] = useState(false);
  const [shouldBlink, setShouldBlink] = useState(false);
  const [headlineVisible, setHeadlineVisible] = useState(false);
  // State for mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShouldBlink(true);

      const handleScroll = () => {
        // Set header opacity and mobile menu close on scroll
        setNavOpaque(window.scrollY > 20);
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobileMenuOpen]); // Add isMobileMenuOpen to dependency array

  // Close mobile menu when clicking outside (optional but good UX)
  useEffect(() => {
    const handleClickOutside = (event) => {
        // Add a check here if needed to see if the click was outside the header or nav
        // For simplicity, we'll just close it on any click outside the header container
        // A more robust solution would check against the navbar div itself
        if (isMobileMenuOpen) {
            // You might need a ref for the navbar or check against event.target
             // if(!navRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)) {
             //     setIsMobileMenuOpen(false);
             // }
        }
    };

     // Only add listener when menu is open
    if (isMobileMenuOpen) {
       document.addEventListener('click', handleClickOutside);
    }


    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed right-0 left-0 z-50 mx-auto flex h-24 w-full items-center
     transition-all duration-300
      ${navOpaque ? 'bg-white top-0 py-1' : 'bg-transparent top-8'}`}
       // Adjust padding/height on opaque state if needed
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with Blink Animation */}
          <div className="relative z-50"> {/* Add z-index to keep logo above mobile menu */}
            <a href="/">
            <img
              src={navOpaque ? eyeOpenBlack : logoEyeOpen}
              alt="logo"
              className={`w-42 h-auto ${shouldBlink ? 'open_eye-visible' : ''}`}
            />
            <img
              src={navOpaque ? eyeCloseBlack : logoEyeClose}
              alt="logo"
              className={`eye-close absolute top-0 left-0 w-42 h-auto ${
                shouldBlink ? 'close_eye-visible' : ''
              }`}
            />
            </a>
          </div>

          {/* Hamburger Icon (Visible on small screens) */}
          <div className="md:hidden z-50"> {/* Add z-index to keep icon clickable */}
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col justify-around w-6 h-5 bg-transparent border-none cursor-pointer p-0"
              aria-label="Toggle mobile menu"
            >
              <div
                className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></div>
              <div
                className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></div>
              <div
                className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></div>
            </button>
          </div>

          {/* Navigation Menu */}
          <Navbar navOpaque={navOpaque} isMobileMenuOpen={isMobileMenuOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
