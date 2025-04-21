import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Column */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#009a9a]">Renu Eye Care</h3>
                        <p className="text-gray-400 mb-4">
                            Dedicated to providing exceptional eye care services with advanced technology and compassionate care.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#009a9a]">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-[#009a9a] transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-[#009a9a] transition-colors">About Us</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-[#009a9a] transition-colors">Services</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-[#009a9a] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#009a9a]">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FiMapPin className="text-[#009a9a] mr-3 mt-1" />
                                <span className="text-gray-400">Graham Bazar, Dibrugarh, Assam 786001</span>
                            </li>
                            <li className="flex items-center">
                                <FiPhone className="text-[#009a9a] mr-3" />
                                <span className="text-gray-400">+91 602-609-602-7</span>
                            </li>
                            <li className="flex items-center">
                                <FiMail className="text-[#009a9a] mr-3" />
                                <span className="text-gray-400">renueyecarecenter@gmail.com</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 py-4">
                <div className="container mx-auto px-4 text-center text-sm">
                    <p className="text-gray-500">
                        © {year} Renu Eye Care. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;