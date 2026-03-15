import React from 'react';
import { Phone, MessageCircle, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <div id="home" className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-primary text-white pt-24 pb-20 lg:pt-32 lg:pb-40 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-accent/20 rounded-full mix-blend-overlay filter blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between gap-12">
                    <div className="lg:w-1/2 mb-12 lg:mb-0">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-accent animate-fade-in-up">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Flat 10% OFF on Accessories
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                            Upgrade to the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Latest Smart Tech</span>
                        </h1>

                        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Experience the best smartphones and accessories with genuine warranty and instant city-wide delivery.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="https://wa.me/919935200774?text=Hi,%20I%20want%20to%20know%20about%20latest%20mobile%20offers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-accent hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-green-500/20 text-lg"
                            >
                                <MessageCircle size={24} />
                                Chat on WhatsApp
                            </a>
                            <a
                                href="#mobiles"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all border border-white/30 hover:border-white/50 text-lg group"
                            >
                                Explore Products
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Hero Image / Illustration */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative mx-auto w-full max-w-md lg:max-w-full">
                            {/* Floating Cards Animation */}
                            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 z-20 relative">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center text-2xl shadow-lg"></div>
                                    <div>
                                        <h3 className="font-bold text-xl">iPhone 15 Pro</h3>
                                        <p className="text-sm text-gray-400">Titanium Design</p>
                                    </div>
                                    <span className="ml-auto font-bold text-accent bg-accent/10 px-3 py-1 rounded-full text-sm">In Stock</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 bg-white/10 rounded-full w-full"></div>
                                    <div className="h-2 bg-white/10 rounded-full w-2/3"></div>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-xl transform -rotate-3 translate-y-[-20px] translate-x-4 scale-95 z-10 absolute top-0 w-full hover:translate-y-[-10px] transition-all duration-500">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">S</div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-200">Samsung S24</h3>
                                        <p className="text-sm text-gray-500">Galaxy AI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
