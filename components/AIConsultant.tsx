
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { getAIAdvice } from '../geminiService.ts';
import { ChatMessage } from '../types.ts';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou o especialista virtual da Luxor Capotaria. Em que posso ajudar você hoje? Pode me perguntar sobre cores de couro, tipos de costura ou o que combina melhor com o modelo do seu carro.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const advice = await getAIAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: advice }]);
    } catch (error) {
      console.error("Erro no AIConsultant:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Desculpe, tive um problema técnico. Tente novamente." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    "Qual cor de couro combina com carro preto?",
    "Couro legítimo ou sintético?",
    "Como limpar bancos de couro?",
    "O que é costura diamante?"
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-amber-500/20 rounded-2xl mb-4 border border-amber-500/30">
            <Sparkles className="h-6 w-6 text-amber-500" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Consultor de <span className="text-amber-500">Estilo IA</span></h2>
          <p className="text-slate-400">Descubra as melhores combinações para o seu projeto com nossa inteligência especializada.</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="p-4 border-b border-slate-700 bg-slate-800/50 flex items-center">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center mr-3">
              <Bot className="text-slate-900 h-6 w-6" />
            </div>
            <div>
              <h3 className="text-white font-bold">Especialista Luxor</h3>
              <span className="text-emerald-500 text-xs flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-1"></span> Online agora
              </span>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-amber-500 ml-3' : 'bg-slate-700 mr-3'}`}>
                    {msg.role === 'user' ? <User className="h-5 w-5 text-slate-900" /> : <Bot className="h-5 w-5 text-amber-500" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-amber-600 text-white rounded-tr-none' : 'bg-slate-700 text-slate-200 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex bg-slate-700 p-4 rounded-2xl rounded-tl-none space-x-1">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="px-6 py-3 flex flex-wrap gap-2 overflow-x-auto">
            {quickQuestions.map((q, i) => (
              <button 
                key={i} 
                onClick={() => setInput(q)}
                className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 px-3 py-1.5 rounded-full border border-slate-600 transition-colors whitespace-nowrap"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-800/80 border-t border-slate-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ex: Qual couro combina com um Civic preto?"
                className="flex-1 bg-slate-900 text-white border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all placeholder:text-slate-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white w-12 h-12 flex items-center justify-center rounded-xl transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
