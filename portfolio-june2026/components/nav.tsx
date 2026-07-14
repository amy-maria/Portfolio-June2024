'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const activeSection = '/';
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/#projects', label: 'Projects' },
    { href: '/#education', label: 'Education' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <nav className='relative flex items-center justify-between md:justify-center gap-10 px-4 py-4 md:px-0'>
      {' '}
      <div className='hidden md:flex items-center gap-10'>
        {navItems.map(({ href, label }) => {
          const id = href.slice(1);

          return (
            <Link
              key={id}
              href={href}
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${activeSection === id ? 'text-[#e2e8f0]' : 'text-gray-300 hover:text-[#e2e8f0]'}`}>
              {label}
            </Link>
          );
        })}

        <a
          href='mailto:amymrowell@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#e2e8f0] font-mono text-xs tracking-widest uppercase border border-border px-4 py-2.5 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200'>
          Work With Me{' '}
        </a>
      </div>
      {/*set up mobile hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className='md:hidden text-[#e2e8f0] p-2'>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {/*mobile dropdown menu when hamburgered */}
      {isOpen && (
        <div className='absolute top-full left-0 right-0 md:hidden bg-black border-t border-border flex flex-col items-center gap-6 py-6 z-50'>
          {navItems.map(({ href, label }) => {
            const id = href.slice(1);
            return (
              <Link
                key={id}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                  activeSection === id
                    ? 'text-[#e2e8f0]'
                    : 'text-[#e2e8f0] hover:text-[#418cef]'
                }`}>
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
