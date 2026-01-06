
import React from 'react';
import { Car } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Car className="h-8 w-8 text-amber-500" />
            <span className="ml-2 text-2xl font-serif font-bold">
              LUXOR <span className="text-amber-500">CAPOTARIA</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
            <a href="#home" className="hover:text-amber-500 transition-colors">Início</a>
            <a href="#services" className="hover:text-amber-500 transition-colors">Serviços</a>
            <a href="#gallery" className="hover:text-amber-500 transition-colors">Portfólio</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contato</a>
          </div>

          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Luxor Capotaria Premium. Todos os direitos reservados.
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>Luxor Capotaria Ltda - CNPJ 00.000.000/0000-00. Desenvolvido com foco em excelência e luxo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
