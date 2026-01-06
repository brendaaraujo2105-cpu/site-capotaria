
import { GoogleGenAI } from "@google/genai";

// Use the specialized AI model to provide automotive interior advice
export const getAIAdvice = async (userPrompt: string) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.warn("API Key não encontrada. Certifique-se de que process.env.API_KEY está disponível.");
    return "O serviço de consultoria IA está temporariamente indisponível (falta de chave). Por favor, entre em contato direto pelo WhatsApp.";
  }

  // Always initialize with the direct reference to process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `Você é um consultor especialista em capotaria e estética automotiva da 'Luxor Capotaria'. 
        Seu tom é profissional, luxuoso e prestativo. 
        Ajude os clientes a escolherem materiais (couro legítimo, sintético premium, alcântara), 
        combinações de cores e estilos de costura (diamante, clássica, esportiva) para o interior de seus carros.
        Sempre sugira soluções que aumentem o valor de revenda e o conforto.
        Responda em Português do Brasil de forma concisa.`,
        temperature: 0.7,
      },
    });
    
    // Accessing the .text property directly from the response object
    return response.text || "Desculpe, não consegui processar sua solicitação agora.";
  } catch (error) {
    console.error("Erro na consulta IA:", error);
    return "Ocorreu um erro ao consultar o nosso especialista virtual. Por favor, tente novamente mais tarde.";
  }
};
