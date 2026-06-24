import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>; // App Router asynchronous params structure
}

export default async function ProjectDetailPage({ params }: PageProps) {
    //dynamic ID value from address bar
  const { id } = await params;
  
  // Look up your project details using the ID variable
  const project = getProjectById(id); 

  return (
    <main className="max-w-4xl mx-auto p-8 min-h-screen bg-white">
      {/* Back Button */}
      <Link href="/" className="inline-block text-blue-600 hover:underline mb-6 font-medium">
        ← Back to Projects
      </Link>

    <main className="max-w-4xl mx-auto p-6">
      <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-6">
        <Image
          src={project.image}
          alt={project.altText}
          fill
          priority // Ensures high LCP performance on page load
          className="object-cover"
          // 💡 MUST MATCH the exact string format from your grid card component
          style={{ viewTransitionName: `project-image-${id}` }}
        />
      </div>
      <h1 className="text-4xl font-black text-gray-900">{project.title}</h1>
    </main>

    {/* Expanded Hero Showcase Container */}
      <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl mb-8 bg-gray-100">
        <Image
          src="/images/hamburg-park.jpg" // 💡 Temporary hardcoded image path fallback for testing
          alt="Expanded view showcase"
          fill
          priority // Tells Next.js to bypass lazy loading optimizations for instant layout paints
          className="object-cover"
          style={{ viewTransitionName: `project-image-${id}` }} // Keeps your ViewTransition bound
        />
      </div>

      {/* Detail Copy Block */}
      <h1 className="text-4xl font-black text-gray-900 mb-4">Project ID Reference: #{id}</h1>
      <p className="text-gray-600 leading-relaxed">
        Next.js successfully routed to this dynamic folder file layout! Replace this mock design 
        template with your actual project lookup database or state logic arrays.
      </p>
    </main>
  );
  );
}
