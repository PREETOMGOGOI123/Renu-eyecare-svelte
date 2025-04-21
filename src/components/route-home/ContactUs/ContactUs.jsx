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
                            src="https://www.google.com/maps/place/Renu+Eye+Care+Centre,+Graham+Bazar,+Dibrugarh,+Assam+786001/data=!4m2!3m1!1s0x374099947260150d:0x5cf9800b6bc76d5b?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjE1MS45MDEYACDXggMqYyw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NDM5Myw5NDIxMzIwMEICSU4%3D&skid=74e10279-1c30-4cb9-90a4-c077c3233ca7"
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