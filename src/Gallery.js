import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1780&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1445019980597-93e8722462f6?q=80&w=1974&auto=format&fit=crop',
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