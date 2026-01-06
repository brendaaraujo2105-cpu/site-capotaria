
import React, { useState } from 'react';
import { GalleryImage } from '../types.ts';

const galleryImages: GalleryImage[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800', category: 'Clássicos', title: 'Restauração Vintage' },
  { id: 2, url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800', category: 'Esportivos', title: 'Cockpit Alcantara' },
  { id: 3, url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800', category: 'Luxo', title: 'Costura Diamante' },
  { id: 4, url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800', category: 'Luxo', title: 'Couro Bege Premium' },
  { id: 5, url: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800', category: 'Modernos', title: 'Personalização Exclusiva' },
  { id: 6, url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800', category: 'Esportivos', title: 'Detalhes em Carbono' },
];

const categories = ['Todos', 'Luxo', 'Clássicos', 'Esportivos', 'Modernos'];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredImages = activeCategory === 'Todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Portfólio de <span className="text-amber-600">Projetos</span></h2>
          <p className="text-slate-600">Confira alguns dos interiores mais incríveis que já passaram pelas nossas mãos.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === cat 
                  ? 'bg-amber-600 text-white shadow-lg' 
                  : 'bg-white text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-2xl shadow-md h-80">
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">{image.category}</span>
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-lg font-bold transition-all">
            Ver Galeria Completa no Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
