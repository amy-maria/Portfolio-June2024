import Image from 'next/image';
import { ProjectProps } from './data';

{
  /*//No link, parent file will wrap*/
}
export default function ProjectCardItem({
  id,
  title,
  description,
  image,
  altText,
}: ProjectProps) {
  return (
    <div className='h-full flex flex-col rounded-xl overflow-hidden shadow-lg bg-white relative group border border-gray-100'>
      <div className='relative h-64 w-full'>
        {/* Image Container */}

        <Image
          src={image}
          alt={altText}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover transition-transform duration-300 group-hover:scale-105'
          style={{ viewTransitionName: `project-${id}` }}
          loading='eager'
        />
      </div>

      {/* Card Text */}
      <div className='p-5 bg-slate-200 flex flex-col flex-1'>
        <h2 className='text-xl font-bold text-gray-800 mb-2'>{title}</h2>
        <p className='text-gray-600 text-sm leading-relaxed line-clamp-3'>
          {description}
        </p>
        <div className='mt-3 pt-3 flex items-center gap-1 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200'>
          <span>View details</span>
          <svg
            className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-1'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
