import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const StickyActions = () => {
    return (
        <>
            {/* Floating WhatsApp Button (Desktop & Mobile) */}
            <a
                href="https://wa.me/919935200774?text=Hi,%20I%20visited%20your%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-50 bg-[#25D366] hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center animate-bounce-slow"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={24} className="md:w-7 md:h-7" />
            </a>

            {/* Sticky Bottom Call Button (Mobile Only) */}
            <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 md:hidden z-40 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)]">
                <a
                    href="tel:+919935200774"
                    className="w-full bg-primary text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-lg shadow-primary/20"
                >
                    <Phone size={20} />
                    Call Shop Now
                </a>
            </div>
        </>
    );
};

export default StickyActions;
