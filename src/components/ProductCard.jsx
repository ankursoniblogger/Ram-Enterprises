import React from 'react';
import { MessageCircle } from 'lucide-react';

const ProductCard = ({ product }) => {
    const { name, price, brand, image, specs, isOffer } = product;
    const message = `Hello, I want details about ${name}`;
    const whatsappLink = `https://wa.me/919935200774?text=${encodeURIComponent(message)}`;

    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full hover:-translate-y-1">
            <div className="relative p-4 flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 h-48 sm:h-56 overflow-hidden">
                {isOffer && (
                    <div className="absolute top-0 left-0 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-br-lg z-10 shadow-sm">
                        SALE
                    </div>
                )}
                <img
                    src={image}
                    alt={name}
                    className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-500 will-change-transform"
                    loading="lazy"
                />
            </div>

            <div className="p-3 sm:p-4 flex-grow flex flex-col">
                <div className="text-[10px] sm:text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">{brand}</div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">{name}</h3>

                <div className="flex flex-wrap gap-1.5 mb-3 text-[10px] sm:text-xs text-gray-600">
                    {Object.values(specs).slice(0, 2).map((spec, i) => (
                        <span key={i} className="bg-gray-100 px-2 py-0.5 rounded-md">{spec}</span>
                    ))}
                </div>

                <div className="mt-auto pt-3 border-t border-gray-50">
                    <div className="flex flex-wrap justify-between items-baseline mb-3 gap-1">
                        <div className="text-lg sm:text-xl font-bold text-primary">₹{price}</div>
                        {isOffer && <span className="text-[10px] sm:text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">Best Price</span>}
                    </div>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-accent hover:bg-green-500 text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-green-500/10 hover:shadow-green-500/20"
                    >
                        <MessageCircle size={16} />
                        <span className="hidden sm:inline">Check on WhatsApp</span>
                        <span className="sm:hidden">WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
