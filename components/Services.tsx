
import React from 'react';
import { Sofa, ShieldCheck, Paintbrush, CircleUser, Zap } from 'lucide-react';
import { Service } from '../types.ts';

const services: Service[] = [
  {
    id: '1',
    title: 'Bancos em Couro',
    description: 'Revestimento completo em couro legítimo ou sintético premium com diversos padrões de costura.',
    icon: <Sofa className="h-8 w-8 text-amber-500" />,
    imageUrl: 'https://images.unsplash.com/photo-1542362567-b05503f35259?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Volantes & Manoplas',
    description: 'Restauração de volantes com materiais aderentes para melhor pegada e estética refinada.',
    icon: <CircleUser className="h-8 w-8 text-amber-500" />,
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Tetos & Colunas',
    description: 'Substituição de forros de teto descolados ou danificados por tecidos originais ou Alcântara.',
    icon: <Paintbrush className="h-8 w-8 text-amber-500" />,
    imageUrl: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Painéis & Portas',
    description: 'Recuperação de painéis trincados e personalização de forros de porta com iluminação LED.',
    icon: <Zap className="h-8 w-8 text-amber-500" />,
    imageUrl: 'https://images.unsplash.com/photo-1606016159991-fee4bfa289bb?auto=format&fit=crop&q=80&w=800',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Serviços de <span className="text-amber-600">Alta Costura</span></h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Combinamos técnicas tradicionais de alfaiataria com tecnologia moderna para entregar resultados impecáveis em cada detalhe do interior do seu carro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-md mb-4 -mt-12 relative z-10 border border-amber-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold mb-2">Por que escolher a Luxor?</h3>
            <div className="flex flex-col space-y-3 mt-4">
              <div className="flex items-center justify-center md:justify-start">
                <ShieldCheck className="h-5 w-5 text-amber-500 mr-3" />
                <span>Garantia de 2 anos em todos os serviços</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <ShieldCheck className="h-5 w-5 text-amber-500 mr-3" />
                <span>Uso de Couro Bovino 100% Legítimo</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <ShieldCheck className="h-5 w-5 text-amber-500 mr-3" />
                <span>Mão de obra especializada em veículos de luxo</span>
              </div>
            </div>
          </div>
          <button className="px-10 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-full font-bold transition-all transform hover:scale-105">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
