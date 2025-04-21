import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#009a9a] text-gray-300">
            <div className="container mx-auto px-4 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Column */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Renu Eye Care</h3>
                        <p className="text-gray-200 mb-4">
                            Dedicated to providing exceptional eye care services with advanced technology and compassionate care.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-200">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-200 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#services" className="text-gray-200 hover:text-white transition-colors">Services</a></li>
                            <li><a href="#contact" className="text-gray-200 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#009a9a]">Our Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Eye Examination</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Cataract Surgery</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Glaucoma Treatment</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Corneal Transplant</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Laser Treatments</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#009a9a]">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FiMapPin className="text-gray-200 mr-3 mt-1" />
                                <span className="text-gray-200">Graham Bazar, Dibrugarh, Assam 786001</span>
                            </li>
                            <li className="flex items-center">
                                <FiPhone className="text-gray-200 mr-3" />
                                <span className="text-gray-200">+91 602-609-602-7, +91 602-609-602-9</span>
                            </li>
                            <li className="flex items-center">
                                <FiMail className="text-gray-200 mr-3" />
                                <span className="text-gray-200">renueyecarecenter@gmail.com</span>
                            </li>
                            <li className="flex items-start">
                                <FiClock className="text-gray-200 mr-3 mt-1" />
                                <div className="text-gray-200">
                                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    <p>Sunday: 10:00 AM - 2:00 PM</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black py-4">
                <div className="container mx-auto px-4 text-center text-sm">
                    <p className="text-gray-200">
                        © {year} Renu Eye Care. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;