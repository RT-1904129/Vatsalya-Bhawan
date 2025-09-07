import React from 'react';

const images = [
  '/assets/common-room-1.jpeg',
  '/assets/room-image-2.jpeg',
  '/assets/room-image-5.jpeg',
  '/assets/god-image.jpeg',
  '/assets/room-image-8.jpeg',
  '/assets/room-image-9.jpeg',
  '/assets/washroom-image-1.jpeg',
  '/assets/washroom-image-2.jpeg',
  '/assets/maingate.jpg',
  '/assets/image-1.jpg',
  '/assets/amunitites.jpg'
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800">Glimpses of Vatsalya Bhawan</h2>
          <p className="mt-4 text-lg text-gray-600">A picture is worth a thousand words.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transform hover:scale-110 transition duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;