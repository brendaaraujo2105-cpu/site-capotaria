
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Entre em <span className="text-amber-600">Contato</span></h2>
            <p className="text-slate-600 mb-10 text-lg">Estamos ansiosos para transformar o seu veículo. Fale conosco por qualquer canal abaixo ou preencha o formulário para um orçamento personalizado.</p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-xl mr-4">
                  <MapPin className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Localização</h4>
                  <p className="text-slate-600">Av. Automotiva, 1234 - Bairro Industrial<br />São Paulo, SP</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-xl mr-4">
                  <Phone className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Telefone / WhatsApp</h4>
                  <p className="text-slate-600">(11) 99999-8888</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-xl mr-4">
                  <Mail className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">E-mail</h4>
                  <p className="text-slate-600">contato@luxorcapotaria.com.br</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold text-slate-900 mb-4">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-slate-100 p-3 rounded-full text-slate-600 hover:bg-amber-500 hover:text-white transition-all">
                  <Instagram size={24} />
                </a>
                <a href="#" className="bg-slate-100 p-3 rounded-full text-slate-600 hover:bg-amber-500 hover:text-white transition-all">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">WhatsApp</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Veículo (Marca e Modelo)</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" placeholder="Ex: BMW 320i 2022" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Serviço Desejado</label>
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all">
                  <option>Bancos em Couro</option>
                  <option>Restauração de Teto</option>
                  <option>Revestimento de Volante</option>
                  <option>Personalização Completa</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Mensagem (Opcional)</label>
                <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" placeholder="Descreva brevemente o que você precisa..."></textarea>
              </div>
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-slate-900/10 transition-all">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
