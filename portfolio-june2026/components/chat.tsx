'use client';
import { useState } from 'react';

export default function Chat() {
  {
    /*//handle user input*/
  }
  const [prompt, setPrompt] = useState('');
  {
    /*handle AI response*/
  }

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  {
    /*track ongoing messages*/
  }
  const [messages, setMessages] = useState<any[]>([]);
  {
    /*track conversation*/
  }

  const complete = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userQuestion = prompt;

    setIsLoading(true);
    setPrompt('');
    setError(null);

    {
      /*immediately show the users question in the message field*/
    }
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: 'user', content: userQuestion },
    ]);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const resultData = await response.json();

      if (!response.ok) {
        throw new Error(resultData.error || 'Something went wrong');
      }
      {
        /*append final ai response to the messages history*/
      }
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content:
            typeof resultData.text === 'string'
              ? resultData.text
              : 'Sorry, something went wrong.',
        },
      ]);

      {
        /*setCompletion*/
      }
      resultData.text;
    } catch (error) {
      console.error('Error:', error);
      setError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='fixed bottom-6 right-6 z-50 font-sans'>
      {/* floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label='Open chat'
          className='w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl'>
          💬
        </button>
      )}

      {/* chat window */}
      {isOpen && (
        <div
          role='complementary'
          aria-label='Portfolio assisant chat'
          className='flex flex-col w-90 sm:w-100 h-125 bg-slate-500 rounded-2xl shadow-2xl overflow-hidden'>
          {/* header */}
          <div className='flex items-center justify-between p-4 bg-slate-600 text-white'>
            <div className='text-sm font-semibold'>
              Ask about Amy’s background
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label='Close chat'
              className='text-white'>
              ✕
            </button>
          </div>

          {/* messages */}
          <div className='flex-1 p-4 overflow-y-auto space-y-3'>
            {messages.length === 0 && (
              <div className='text-center text-sm text-white mt-10'>
                Ask me anything about Amy Rowell’s experience or skills.
              </div>
            )}
            {/* Loop through historical chat logs */}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === 'user' ? 'justify-end' : 'justify-start'
                }`}>
                <div
                  className={`px-3 py-2 rounded-xl text-sm max-w-[80%] ${
                    m.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-black'
                  }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {/* 2. Thinking indicator bubble */}
            {isLoading && (
              <div className='flex justify-start'>
                <div className='px-3 py-2 rounded-xl text-sm max-w-[80%] bg-white text-black italic opacity-80 flex items-center gap-1'>
                  <span>Amy's Assistant is typing</span>
                  <span className='animate-pulse'>...</span>
                </div>
              </div>
            )}

            {error && (
              <div className='text-xs text-red-400 text-center bg-slate-800/40 py-1 rounded'>
                ⚠️ {error}
              </div>
            )}
          </div>

          <form
            onSubmit={complete}
            className='p-3 border-t flex gap-2 bg-slate-700'>
            <input
              className='flex-1 p-2 rounded text-sm bg-white text-black'
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder='Ask a question...'
              disabled={isLoading}
            />
            <button
              type='submit'
              disabled={isLoading}
              className='px-3 py-2 bg-blue-600 text-white rounded'>
              {isLoading ? '...' : 'Send'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
