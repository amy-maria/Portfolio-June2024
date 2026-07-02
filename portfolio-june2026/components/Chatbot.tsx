'use client';

import { useChat } from '@ai-sdk/react';
import { useState, useRef, useEffect } from 'react'  


export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: '/api/chat',
    });
    //scroll down when new messages arrive
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div className="fixed bottom-6 right-6 z-60 font-sans">
            {/* floating button, visible msg box is closed*/}
            {!isOpen && (
                <button 
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
                aria-label="open chat"
                >
                    {/* chat icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            </button>
        
            )}

            {/* popup chat window visibile when open */}
            { isOpen && (
                <div className="flex flex-col w-[360px] sm:w-[400px] h-[500px] bg-slate border border-gray-400 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 animate-in slide-in-from-bottom-5">
                    {/* Chatbot header*/}
            <div className="flex items-center justify-between p-4 bg-slate-600 text-white">
                <div>
                <h3 className="font-semibold text-white-800"></h3>
                <p className="text-xs text-white-800">Ask Me about Amy's background, tech stack and experience</p>
            </div>
                    {/*close button*/} 
                <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Close chat"   
                    >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            {/* Message area*/}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-400">
                        {messages.length === 0 && (
                            <div className="text-center mt-12 px-4">
                                <p className="text-sm font-medium text-white-700">Let's Chat</p>
                                <p className="text-sm text-white-300 mt-1">
                                                      I can answer questions regarding Amy's background, management experience, or web projects.

                                </p>
                                </div>
                                
                )}

                    {messages.map(m => (
                        <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
   <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-black rounded-br-none' 
                    : 'bg-white text-black-800 border border-gray-100 rounded-bl-none'
                }`}>
                  {m.content}
                </div>
            </div>
            ))}
                 {/* scroll into view */} 
            <div ref={messagesEndRef} />
          </div>
{/* Chat input form*/}
        <form className="p-3 border-t border-gray-300 bg-slate-200 flex gap-2 items-center" onSubmit={handleSubmit}>
            <input
                className="flex-1 px-4 py-2 text-sm border border-black-500 
                text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-700 disabled:bg-slate-300"
                value={input}
                placeholder="e.g., What LIS platforms does Amy know?"
                onChange={handleInputChange}
                disabled={isLoading}
            />
            <button
                type="submit"
                className="p-2 bg-blue-600 hover:bg-blue-700 text-black rounded-xl disabled:opacity-40 transition-colors"
                disabled={isLoading || !input.trim()}
            >
                Send
                </button>
            </form>

        </div>
            )}
    </div>

    );
}