import React from 'react';
import { ShieldCheck, Banknote, RefreshCcw, Truck } from 'lucide-react';

const features = [
    {
        icon: <ShieldCheck size={40} className="text-primary" />,
        title: "100% Genuine Products",
        description: "We sell only original and branded smartphones with company warranty."
    },
    {
        icon: <Banknote size={40} className="text-primary" />,
        title: "Best Price Guarantee",
        description: "Get the best market rates and exclusive discounts on every purchase."
    },
    {
        icon: <RefreshCcw size={40} className="text-primary" />,
        title: "Easy Exchange",
        description: "Upgrade your old phone with our hassle-free exchange policy."
    },
    {
        icon: <Truck size={40} className="text-primary" />,
        title: "Same Day Delivery",
        description: "Free and fast delivery across Gonda city."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-gray-50 hover:bg-white group">
                            <div className="mb-4 inline-block p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
