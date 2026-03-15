import { Smartphone, Star, Battery, Cpu, Camera } from 'lucide-react';

export const products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        price: "1,55,900",
        brand: "Apple",
        image: "/images/products/iphone-15-pro-max.png",
        specs: { ram: "8GB", storage: "256GB", battery: "4441mAh" },
        isOffer: true
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        price: "1,29,999",
        brand: "Samsung",
        image: "/images/products/samsung-s24-ultra.png",
        specs: { ram: "12GB", storage: "256GB", battery: "5000mAh" },
        isOffer: true
    },
    {
        id: 3,
        name: "Vivo X100 Pro",
        price: "89,999",
        brand: "Vivo",
        image: "/images/products/vivo-x100-pro.png",
        specs: { ram: "16GB", storage: "512GB", battery: "5400mAh" },
        isOffer: false
    },
    {
        id: 4,
        name: "OnePlus 12",
        price: "64,999",
        brand: "OnePlus",
        image: "/images/products/oneplus-12.png",
        specs: { ram: "12GB", storage: "256GB", battery: "5400mAh" },
        isOffer: true
    },
    {
        id: 5,
        name: "Redmi Note 13 Pro+",
        price: "31,999",
        brand: "Xiaomi",
        image: "/images/products/redmi-note-13-pro-plus.png",
        specs: { ram: "8GB", storage: "256GB", battery: "5000mAh" },
        isOffer: true
    },
    {
        id: 6,
        name: "Oppo Reno 11 Pro",
        price: "39,999",
        brand: "Oppo",
        image: "/images/products/oppo-reno-11-pro.webp",
        specs: { ram: "12GB", storage: "256GB", battery: "4600mAh" },
        isOffer: false
    },
    {
        id: 7,
        name: "Realme 12 Pro+",
        price: "29,999",
        brand: "Realme",
        image: "/images/products/realme-12-pro-plus.png",
        specs: { ram: "8GB", storage: "128GB", battery: "5000mAh" },
        isOffer: true
    },
    {
        id: 8,
        name: "Samsung Galaxy A54",
        price: "35,499",
        brand: "Samsung",
        image: "/images/products/samsung-a54.png",
        specs: { ram: "8GB", storage: "256GB", battery: "5000mAh" },
        isOffer: false
    },
    {
        id: 9,
        name: "iPhone 13",
        price: "49,900",
        brand: "Apple",
        image: "/images/products/iphone-13.png",
        specs: { ram: "4GB", storage: "128GB", battery: "3240mAh" },
        isOffer: true
    }
];

export const reviews = [
    {
        id: 1,
        name: "Rahul Kumar",
        comment: "Best mobile shop in the city! Got my iPhone at a very good price.",
        rating: 5
    },
    {
        id: 2,
        name: "Amit Singh",
        comment: "Very helpful staff and genuine products. Highly recommended.",
        rating: 5
    },
    {
        id: 3,
        name: "Priya Sharma",
        comment: "Quick service and easy EMI options available. Great experience!",
        rating: 4
    }
];

export const accessories = [
    {
        id: 101,
        name: "Wireless Earbuds Pro",
        price: "1,499",
        brand: "Boat",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800",
        specs: { type: "TWS", battery: "30h Playback" },
        isOffer: true
    },
    {
        id: 102,
        name: "JBL Bluetooth Speaker",
        price: "2,999",
        brand: "JBL",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=800",
        specs: { type: "Speaker", battery: "10h Playback" },
        isOffer: false
    },
    {
        id: 103,
        name: "Premium Mobile Case",
        price: "499",
        brand: "Spigen",
        image: "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&q=80&w=800",
        specs: { type: "Case", material: "Silicone" },
        isOffer: true
    },
    {
        id: 104,
        name: "20W Fast Charger",
        price: "999",
        brand: "Apple",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800",
        specs: { type: "Charger", output: "20W" },
        isOffer: false
    },
    {
        id: 105,
        name: "10000mAh Power Bank",
        price: "1,299",
        brand: "Mi",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=800",
        specs: { type: "Power Bank", capacity: "10000mAh" },
        isOffer: true
    }
];

export const shopDetails = {
    name: "Ram Enterprises",
    address: "Arya Nagar, Gonda, Uttar Pradesh 271122",
    phone: "+919935200774", // Verify this number, using placeholder based on request
    whatsapp: "919935200774",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.397686417757!2d81.9616423!3d27.1329623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a079375555555%3A0x1c43152565656565!2sRam%20Enterprises!5e0!3m2!1sen!2sin!4v1708888888888!5m2!1sen!2sin"
};
