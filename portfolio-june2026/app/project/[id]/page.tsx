import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/components/data';
import LinkButton from '@/components/linkButton';

interface PageProps {
  params: Promise<{ id: string }>; // App Router asynchronous params structure
}

export default async function ProjectDetailPage({ params }: PageProps) {
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
    <main className='max-w-4xl mx-auto p-8 min-h-screen bg-slate-300'>
      {/* Back Button */}
      <Link
        href='/'
        className='inline-block text-blue-800 hover:underline mb-6 font-medium'>
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
      <h1 className='text-2xl font-black text-black'>{project.title}</h1>
      {/* Expanded Hero Showcase Container */}

      {/* Detail Copy Block */}
      <div className='text-lg font-black mb-4'>
        <p className='text-black leading-relaxed'>
          {project.extendedDescription}
        </p>
        <p className='text-black  text-lg mt-2 leading-relaxed'>
          Key Features: {project.keyFeatures}
        </p>
        <span className=' flex items-center justify-center'>
          <LinkButton url={project.url} />
        </span>
      </div>
    </main>
  );
}
