import Image from 'next/image';

export interface CertificateProps {
  id: number;
  title: string;
  description: string;
  image: string;
  altText: string;
}
export function CertificateCardItem({
  title,
  description,
  image,
  altText,
}: CertificateProps) {
  return (
    <div className='w-100% rounded-xl overflow-hidden shadow-lg bg-white relative group border border-gray-100 '>
      {/* Image Container */}
      <div className='relative h-64 bg-slate-200 w-full'>
        <Image
          src={image}
          alt={altText}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover transition-transform duration-300 group-hover:scale-105'
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
