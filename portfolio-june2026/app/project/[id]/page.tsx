import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/components/data';

interface PageProps {
  params: Promise<{ id: string }>; // App Router asynchronous params structure
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const [handleClick]
  // dynamic id
  const { id } = await params;
  // direct evaluation
  const project = projectsData.find((item) => String(item.id) === String(id));
  //prevent page rendering crashes if id does not exist
  if (!project) {
    return (
      <div className='p-8 text-center font-bold'>
        Project layout reference not found.
      </div>
    );
  }
  return (
    <main className='max-w-4xl mx-auto p-8 min-h-screen bg-white'>
      {/* Back Button */}
      <Link
        href='/'
        className='inline-block text-blue-600 hover:underline mb-6 font-medium'>
        ← Back to Projects
      </Link>

      {/* Hero Container */}
      <div className='relative h-96 w-full rounded-2xl overflow-hidden mb-6'>
        <Image
          src={project.image}
          alt={project.altText}
          fill
          priority
          className='object-cover'
          style={{ viewTransitionName: `project-${id}` }}
        />
      </div>
      {/*project content text details */}
      <h1 className='text-4xl font-black text-gray-900'>{project.title}</h1>
      {/* Expanded Hero Showcase Container */}

      {/* Detail Copy Block */}
      <div className='text-4xl font-black text-gray-900 mb-4'> 
      <p className='text-gray-600 leading-relaxed'>
        {project.extendedDescription}</p>
       <p>Key Features: {project.keyFeatures}
      </p>
      <button onClick={handleClick}>See It</button>
      </div>
    </main>
  );
}
