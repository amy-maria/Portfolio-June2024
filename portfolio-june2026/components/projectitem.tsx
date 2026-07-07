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
    <div className='rounded-xl overflow-hidden shadow-lg bg-white relative group border border-gray-100'>
      <div className='relative h-64 w-full'>
        {/* Image Container */}

        <Image
          src={image}
          alt={altText}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover'
          style={{ viewTransitionName: `project-${id}` }}
        />
      </div>

      {/* Card Text */}
      <div className='p-5 bg-slate-200 '>
        <h3 className='text-xl font-bold text-gray-800 mb-2'>{title}</h3>
        <p className='text-gray-600 text-sm leading-relaxed'>{description}</p>
      </div>
    </div>
  );
}
