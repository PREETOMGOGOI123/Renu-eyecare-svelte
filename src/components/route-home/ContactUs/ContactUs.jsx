import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const ContactUs = () => {
    const contactInfo = [
        {
            icon: <FiMapPin className="text-2xl text-[#009a9a]" />,
            title: "Our Location",
            details: [
                "Renu Eye Care",
                "Graham Bazar, Dibrugarh",
                "Assam, 786001"
            ]
        },
        {
            icon: <FiPhone className="text-2xl text-[#009a9a]" />,
            title: "Phone Numbers",
            details: [
                "+91 602-609-602-7",
                "+91 602-609-602-9"
            ]
        },
        {
            icon: <FiMail className="text-2xl text-[#009a9a]" />,
            title: "Email Us",
            details: [
                "renueyecarecenter@gmail.com",
                
            ]
        },
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-[#e0e7e7]" >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Get In <span className="text-[#009a9a]">Touch</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-[#009a9a] mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-xl shadow-lg p-8 mb-16"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <h4 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h4>
                                        {item.details.map((detail, i) => (
                                            <p key={i} className="text-gray-600">{detail}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-xl shadow-lg p-2 h-80"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14276.458275231971!2d94.89866043963536!3d27.47885259657573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373f3aa13b323e83%3A0xfb23f0835c515f88!2sGraham%20Bazar%2C%20Dibrugarh%2C%20Assam%20786001!5e0!3m2!1sen!2sin!4v1712134571636!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Renu Eye Care Location"
                            className="rounded-lg"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;