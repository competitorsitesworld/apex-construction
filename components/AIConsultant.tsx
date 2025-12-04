import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { Chat } from '@google/genai';
import { createChatSession, sendMessageToGemini } from '../services/gemini';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Greetings. I am Blueprint, APEX's AI architect. I can assist with cost estimations, material comparisons, and zoning regulations. How may I assist your project planning today?", timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatSessionRef.current = createChatSession();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || !chatSessionRef.current) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(chatSessionRef.current, userMsg.text);
      setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: Date.now() }]);
    } catch (error) {
      console.error("Chat error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-consultant" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-800/20 skew-x-12 transform origin-top pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 space-y-8 text-white">
            <div>
               <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Intelligent Planning</h4>
               <h2 className="text-4xl font-bold mb-6">AI-Powered <br/> Project Consultant</h2>
               <p className="text-neutral-400 text-lg leading-relaxed">
                 Before we break ground, use our advanced AI model to clarify your vision. Get instant answers on feasibility, materials, and estimated timelines.
               </p>
            </div>
            
            <div className="border-t border-neutral-800 pt-8">
               <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-4">Recommended Inquiries</h3>
               <div className="space-y-3">
                 {["Cost per sq ft for industrial steel?", "Sustainable insulation options?", "Timeline for 5-story office?"].map((q, i) => (
                   <button key={i} 
                       className="w-full text-left text-sm text-neutral-400 hover:text-orange-400 hover:bg-neutral-800 p-4 border border-neutral-800 transition-all flex items-center justify-between group"
                       onClick={() => setInputValue(q)}
                   >
                     {q}
                     <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </button>
                 ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-neutral-950 border border-neutral-800 h-[650px] flex flex-col shadow-2xl">
              
              {/* Chat Header */}
              <div className="p-6 border-b border-neutral-800 flex items-center gap-4 bg-neutral-900">
                <div className="w-10 h-10 bg-orange-600 flex items-center justify-center text-white">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white tracking-wide">BLUEPRINT <span className="text-neutral-500 font-normal">AI MODEL</span></h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-neutral-400 uppercase tracking-wider">System Active</span>
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-neutral-950">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-white text-black' : 'bg-neutral-800 text-orange-500'}`}>
                        {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </div>
                      <div className={`p-5 text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-neutral-800 text-white border border-neutral-700' 
                          : 'bg-transparent text-neutral-300 border border-neutral-800'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                   <div className="flex justify-start">
                     <div className="flex gap-4 max-w-[85%]">
                        <div className="w-8 h-8 flex items-center justify-center shrink-0 bg-neutral-800 text-orange-500">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="p-4 flex items-center gap-2 border border-neutral-800">
                           <Loader2 className="h-4 w-4 animate-spin text-orange-500" />
                           <span className="text-neutral-500 text-xs uppercase tracking-widest">Processing Data...</span>
                        </div>
                     </div>
                   </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-6 bg-neutral-900 border-t border-neutral-800">
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Input query parameters..." 
                    className="flex-1 bg-neutral-950 border border-neutral-800 px-6 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors font-mono text-sm"
                    disabled={isLoading}
                  />
                  <button 
                    onClick={handleSend} 
                    disabled={isLoading || !inputValue.trim()}
                    className="w-14 bg-white hover:bg-orange-500 text-black hover:text-white transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIConsultant;