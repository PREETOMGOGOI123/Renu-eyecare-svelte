import React from 'react';

// Accept isMobileMenuOpen prop
function Navbar({ navOpaque, isMobileMenuOpen }) {
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`
        ${
          // Mobile Menu Styles (visible when isMobileMenuOpen is true)
          isMobileMenuOpen
            ? 'fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-white text-slate-700 z-40'
            // Desktop Styles (hidden on mobile, flex on md and up)
            : 'hidden md:flex place-items-center rounded-sm backdrop-blur-2xl'
        }
        duration-200
        ${
          // Desktop background and shadow based on navOpaque
          !isMobileMenuOpen && (navOpaque
            ? 'shadow-none bg-white/80'
            : 'shadow-2xl bg-white text-slate-700')
        }
      `}
       // Add onClick to close menu when clicking a link (Optional)
       // onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)} // Requires passing setIsMobileMenuOpen prop
    >
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className={`
             ${
                // Mobile link styles
                isMobileMenuOpen
                    ? 'text-2xl my-4 px-6 py-3 border-b last:border-none border-slate-300 text-center'
                    // Desktop link styles
                    : 'border-r-1 last:border-none px-4 py-2 pb-2 text-center'
             }
             border-slate-300
             underline transition duration-300 hover:scale-3d hover:skew-6 hover:text-slate-400
          `}
          // Consider adding an onClick handler here to close the menu when a link is clicked in mobile view
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
