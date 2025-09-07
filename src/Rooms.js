import React from 'react';

const roomsData = [
  {
    name: 'Deluxe Room',
    description: 'A perfect blend of comfort and elegance, ideal for solo travelers or couples.',
    imageUrl: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop',
    features: ['King Size Bed', 'Free Wi-Fi', 'Air Conditioning', 'City View'],
  },
  {
    name: 'Family Suite',
    description: 'Spacious and well-appointed, our family suites offer ample space for relaxation.',
    imageUrl: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?q=80&w=1974&auto=format&fit=crop',
    features: ['Two Queen Beds', 'Living Area', 'Free Wi-Fi', 'Garden View'],
  },
  {
    name: 'Presidential Suite',
    description: 'Experience the pinnacle of luxury with our exclusive Presidential Suite.',
    imageUrl: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1974&auto=format&fit=crop',
    features: ['Master Bedroom', 'Private Balcony', 'Jacuzzi', '24/7 Butler Service'],
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-16 md:py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800">Our Comfortable Rooms</h2>
          <p className="mt-4 text-lg text-gray-600">Designed for your peace and comfort.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <div key={room.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
              <img src={room.imageUrl} alt={room.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <ul className="text-gray-700 space-y-1 mb-6">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="w-full text-center bg-amber-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-amber-700 transition">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;