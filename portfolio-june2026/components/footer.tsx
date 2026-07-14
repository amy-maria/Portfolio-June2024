import { FaCopyright } from 'react-icons/fa';
import { TechIcon } from '@/components/TechIcon';
import { contactInformation } from './contactinformation';

export default function Footer() {
  return (
    <footer id='footer'>
      <div className='w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6'>
        <div className='flex flex-wrap items-center gap-3'>
          {contactInformation.map(({ title, href, iconName }) => (
            <a
              key={title}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              title={title}
              className='flex items-center gap-2 font-mono text-s text-[#e2e8f0] border border-gray-300 px-4 py-2 rounded-full bg-gray-900 hover:border-gray-600 hover:bg-blue-300 transition-colors duration-200'>
              <TechIcon name={iconName} />
            </a>
          ))}
        </div>

        <div className='flex flex-row-reverse items-center gap-2 font-mono text-s text-gray-700'>
          <span>Amy Rowell {new Date().getFullYear()}</span>
          <FaCopyright />
        </div>
      </div>
    </footer>
  );
}
