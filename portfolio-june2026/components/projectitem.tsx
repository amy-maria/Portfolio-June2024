import Image from "next/image";
import {Link }from "next-view-transitions"
import { ViewTransition } from 'react'

//single card data for typescript interface
export interface ProjectProps {
    id: number;
    title: string;
    description:string;
    stack:string;
    image:string;
    altText:string;
}
export default function ProjectCardItem({ id, title, description, image, altText }: ProjectProps) {
  return (
    <Link href={`/project/${id}`} className="rounded-xl overflow-hidden shadow-lg bg-white relative group border border-gray-100 m-20">
      {/* Image Container */}
      <div className="relative h-64  w-full">
        <Image
          src={image}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          // 💡 Assign a unique view-transition-name to each card image
          style={{ viewTransitionName: `project-image-${id}` }}
        />
      </div>

      {/* Card Text */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    
    </Link>
  );
}
