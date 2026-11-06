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
    <div className='flex flex-col h-full rounded-lg overflow-hidden bg-gray border border-gray-100 shadow hover:shadow-xl transition-shadow  '>
      {/* Image Container */}
      <div className='relative aspect-[297/210] w-full bg-gray'>
        <Image
          src={image}
          alt={altText}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-contain p-2'
        />
      </div>

      {/* Card Text */}
      <div className='flex-1 px-3 py-2 bg-slate-200 '>
        <h3 className='text-sm font-bold text-gray-800 leading-snug'>{title}</h3>
        <p className='text-gray-600 text-sm '>{description}</p>
      </div>
    </div>
  );
}
