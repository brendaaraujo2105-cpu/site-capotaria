
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url('https://picsum.photos/id/111/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 mb-6 bg-amber-600/20 text-amber-400 border border-amber-400/30 rounded-full text-sm font-semibold tracking-widest uppercase">
            Excelência em Revestimentos
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            A Arte da Restauração <br />
            <span className="text-amber-500">Automotiva</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Especialistas em transformar o interior do seu veículo com materiais premium e acabamento artesanal. De clássicos a supercarros, devolvemos o luxo e o conforto que você merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center shadow-lg shadow-amber-900/20"
            >
              Nossos Serviços <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => document.getElementById('consultant')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm rounded-lg font-bold text-lg transition-all flex items-center justify-center"
            >
              Consultor IA Grátis
            </button>
          </div>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
