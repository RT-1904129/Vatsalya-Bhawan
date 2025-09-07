import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-800 text-white">
      <div className="absolute inset-0">
        <img
          src="/assets/common-room-1.jpeg"
          alt="Vatsalya Bhawan hotel room"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-48 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          Experience Divinity and Comfort
        </h2>
        <p className="text-lg md:text-2xl text-amber-300 font-semibold mb-8">
          at Vatsalya Bhawan, Ayodhya
        </p>
        <a
          href="#rooms"
          className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-amber-700 transition transform hover:scale-105"
        >
          Explore Our Rooms
        </a>
      </div>
    </section>
  );
};

export default Hero;