import ProjectCard from '@/components/projectcard';
import CertificateCard from '@/components/certificatecard';
import About from '@/components/about';
import Hero from '@/components/hero';
import { Suspense } from 'react';
import CTA from '@/components/cta';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ crashtest?: string }>;
}) {
  const params = await searchParams;
  if (params.crashtest === 'true') {
    throw new Error('Test crash');
  }

  return (
    <main className='min-h-screen bg-[0e0d0b] px-8 py-12'>
      <Suspense
        fallback={
          <div className='text-center text-white py-20'>
            Loading portfolio...
          </div>
        }>
        <Hero />
        <section id='projects' className='scroll-mt-30'>
          <h1 className='text-2xl text-center text-white'>
            Completed Projects
          </h1>
          <ProjectCard />
        </section>
        <section id='education' className='scroll-mt-28'>
          <h2 className='mt-4 text-2xl text-center text-white'>Education</h2>
          <CertificateCard />
        </section>
        <section id='about' className='scroll-mt-28'>
          <h3 className='text-center text-2xl text-blue-600 mb-4'>About Me</h3>
          <About />
        </section>
        <CTA />
      </Suspense>
    </main>
  );
}
