import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const brands = ["All", "Apple", "Samsung", "Vivo", "Oppo", "Realme", "Xiaomi", "OnePlus"];

const Products = () => {
    const [activeBrand, setActiveBrand] = useState("All");

    const filteredProducts = activeBrand === "All"
        ? products
        : products.filter(product => product.brand === activeBrand);

    return (
        <section id="mobiles" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Mobiles</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our wide range of branded smartphones. Filter by your favorite brand to find the perfect device.
                    </p>
                </div>

                {/* Brand Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {brands.map((brand) => (
                        <button
                            key={brand}
                            onClick={() => setActiveBrand(brand)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-sm
                  ${activeBrand === brand
                                    ? 'bg-primary text-white shadow-md transform scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow'
                                }`}
                        >
                            {brand}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No products found for this brand.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Products;
