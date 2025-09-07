import React from 'react';

const Dining = () => {
  return (
    <section id="dining" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Exquisite Dining</h2>
          <p className="text-lg text-gray-600 mb-6">
            Savor the divine flavors of Ayodhya at our in-house restaurant. We serve a wide range of pure vegetarian delicacies, prepared with the freshest ingredients and traditional recipes. Our serene ambiance provides the perfect setting for a peaceful meal with your loved ones.
          </p>
          <a href="#contact" className="text-amber-700 font-semibold hover:underline">
            View Menu & Timings
          </a>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="/assets/dining.jpg" 
            alt="Dining at Vatsalya Bhawan"
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Dining;