import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <h3 className="text-white font-bold text-lg mb-1">Ram Enterprises</h3>
                    <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
                   
                  {/* <div><p>Design by <a href="https://www.instagram.com/ankur.soni20/" target="_blank" rel="noopener noreferrer">Ankur soni &hearts;</a></p></div>  text-yellow-600*/}

<div>
  <p>
    Design by{" "}
    <a
      href="https://www.instagram.com/ankur.soni20/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white font-semibold inline-block transform transition-all duration-300 hover:skew-x-5 hover:scale-105 hover:text-yellow-600"
    >
      Ankur Soni  ❤️
    </a>
  </p>
</div>

                <div className="flex gap-6">
                    <a href="https://www.instagram.com/ram_enterprises_gonda/" target='_blank' className="hover:text-white transition-colors"><Instagram size={20} /></a>
                    <a href="https://www.facebook.com/share/1BfR2g2C6N/" target='_blank' className="hover:text-white transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
