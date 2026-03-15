import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Accessories from './components/Accessories';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Accessories />
        <WhyChooseUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}

export default App;
