import React from 'react';
import ProductCard from './ProductCard';
import { accessories } from '../data/products';

const Accessories = () => {
    return (
        <section id="accessories" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                        Essential Gear
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Accessories</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Enhance your experience with high-quality audio gear, chargers, and protection for your devices.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
                    {accessories.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accessories;
