import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Helper to get client safely
const getClient = () => {
  const apiKey = process.env.API_KEY || ''; 
  // We allow empty string to prevent crash, but calls will fail if key is missing
  return new GoogleGenAI({ apiKey });
};

export const createChatSession = (): Chat => {
  const ai = getClient();
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are 'Blueprint', a helpful and knowledgeable AI construction consultant for APEX. 
      Your goal is to assist potential clients with initial questions about construction projects, renovations, materials, and estimated timelines.
      - Be professional, encouraging, and concise.
      - If asked for specific quotes, explain that you can provide rough ranges but they should contact the sales team for a precise estimate.
      - You are an expert in both residential and commercial construction.
      - Keep responses under 150 words unless asked for detailed steps.`,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't process that request. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};