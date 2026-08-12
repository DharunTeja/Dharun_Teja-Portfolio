import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBolt, FaPaperPlane, FaSpinner } from 'react-icons/fa';
const Contact = ({ data }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic Client Validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus('error');
            setErrorMessage('Please fill out all required fields (*).');
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        try {
            // Using Web3Forms for a fully functional backend-free static site form submission
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: data.web3FormsKey || '64d60c49-eb44-48f8-a1bf-4b47c050c26c', // Dynamic access key configuration
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || 'New Message from Developer Portfolio',
                    message: formData.message
                })
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(result.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
            setErrorMessage('Network error. Please check your connection and try again.');
        }
    };

    return (
        <section id="contact" className="py-20 bg-dark/50 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-6xl">
                
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Send a Message Form */}
                    <div className="lg:col-span-8 bg-black/40 border border-white/5 rounded-3xl p-6 md:p-10 glass-panel">
                        <div className="flex items-center gap-3 mb-8">
                            <FaPaperPlane className="text-primary text-xl" />
                            <h3 className="text-xl md:text-2xl font-semibold text-white">Send a Message</h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Full Name & Email Address Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className="w-full bg-[#111115] border border-white/10 focus:border-primary/50 text-white rounded-xl py-3 px-4 outline-none transition-colors text-sm"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        className="w-full bg-[#111115] border border-white/10 focus:border-primary/50 text-white rounded-xl py-3 px-4 outline-none transition-colors text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    className="w-full bg-[#111115] border border-white/10 focus:border-primary/50 text-white rounded-xl py-3 px-4 outline-none transition-colors text-sm"
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Tell me about your project, idea, or just say hello..."
                                    className="w-full bg-[#111115] border border-white/10 focus:border-primary/50 text-white rounded-xl py-3 px-4 outline-none transition-colors text-sm resize-none"
                                    required
                                ></textarea>
                            </div>

                            {/* Alert Notifications */}
                            {status === 'success' && (
                                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-sm font-medium animate-fadeIn">
                                    Message sent successfully! I will get back to you shortly.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-4 rounded-xl text-sm font-medium animate-fadeIn">
                                    {errorMessage || 'Failed to send message. Please try again.'}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-3.5 bg-[#8ba697] text-zinc-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-opacity-90 active:scale-[0.98] transition-all cursor-pointer shadow-md disabled:bg-opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <FaSpinner className="animate-spin text-lg" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Contact Details Cards */}
                    <div className="lg:col-span-4 flex flex-col gap-5">
                        
                        {/* Email Card */}
                        <a href={`mailto:${data.email}`} className="group flex items-center gap-4 bg-black/40 border border-white/5 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 glass-panel cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shrink-0">
                                <FaEnvelope className="text-lg" />
                            </div>
                            <div className="overflow-hidden">
                                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest block">Email</span>
                                <span className="text-sm md:text-base font-medium text-white block truncate">{data.email}</span>
                            </div>
                        </a>

                        {/* Phone Card */}
                        {data.phone && (
                            <a href={`tel:${data.phone.replace(/\s+/g, '')}`} className="group flex items-center gap-4 bg-black/40 border border-white/5 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 glass-panel cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shrink-0">
                                    <FaPhoneAlt className="text-lg animate-pulse" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest block">Phone</span>
                                    <span className="text-sm md:text-base font-medium text-white block">{data.phone}</span>
                                </div>
                            </a>
                        )}

                        {/* Location Card */}
                        {data.location && (
                            <div className="group flex items-center gap-4 bg-black/40 border border-white/5 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 glass-panel">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shrink-0">
                                    <FaMapMarkerAlt className="text-lg" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest block">Location</span>
                                    <span className="text-sm md:text-base font-medium text-white block">{data.location}</span>
                                </div>
                            </div>
                        )}

                        {/* Available Status Card */}
                        <div className="bg-black/40 border border-white/5 rounded-2xl p-5 border-l-4 border-l-emerald-500 glass-panel">
                            <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold text-sm tracking-wider">
                                <FaBolt className="text-lg" />
                                <span>Currently Available</span>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed font-medium">
                                Seeking opportunities in AI/ML Engineering, Data Science, and Software Development to apply my skills in machine learning, web technologies, and intelligent system development.
                            </p>
                        </div>

                        {/* Resume View Link */}
                        <a
                            href="https://drive.google.com/file/d/18moai8QZzxZcKPX6rXk5UijrmKPQ1Ied/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 text-center text-xs font-semibold text-gray-400 uppercase tracking-widest hover:text-primary transition-colors cursor-pointer underline underline-offset-8"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
