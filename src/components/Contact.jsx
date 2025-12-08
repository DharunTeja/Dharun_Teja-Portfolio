import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram, FaWpforms } from 'react-icons/fa';

const Contact = ({ data }) => {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <div className="glass-panel max-w-4xl mx-auto rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>

                    <h2 className="text-4xl font-bold mb-6">Let's <span className="text-primary">Connect</span></h2>
                    <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                        I'm currently available for freelance work and internship opportunities.
                        Let's build something amazing together.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
                        <a href={`mailto:${data.email}`} className="flex items-center justify-center gap-3 text-xl hover:text-primary transition-colors">
                            <FaEnvelope /> {data.email}
                        </a>
                        <a href={data.googleForm} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-xl hover:text-primary transition-colors">
                            <FaWpforms /> Fill Contact Form
                        </a>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl hover:bg-primary hover:text-black transition-all transform hover:-translate-y-1">
                            <FaLinkedinIn />
                        </a>
                        <a href={data.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl hover:bg-primary hover:text-black transition-all transform hover:-translate-y-1">
                            <FaGithub />
                        </a>
                        <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl hover:bg-primary hover:text-black transition-all transform hover:-translate-y-1">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
