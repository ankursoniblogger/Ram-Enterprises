import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { shopDetails } from '../data/products';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Shop</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold mb-6">Contact Details</h3>

                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Address</h4>
                                    <p className="text-gray-600">{shopDetails.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Phone</h4>
                                    <a href={`tel:${shopDetails.phone}`} className="text-gray-600 hover:text-primary transition-colors block">
                                        {shopDetails.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 mb-8">
                                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Opening Hours</h4>
                                    <p className="text-gray-600">Mon - Sun: 10:00 AM - 09:00 PM</p>
                                </div>
                            </div>

                            <a
                                href={`https://wa.me/${shopDetails.whatsapp}?text=Hello,%20I%20have%20a%20query`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-accent hover:bg-green-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-lg shadow-green-500/20"
                            >
                                <MessageCircle size={24} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="lg:w-1/2 h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        <iframe
                            src={shopDetails.mapLink}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Shop Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
