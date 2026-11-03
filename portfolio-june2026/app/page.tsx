import ProjectCard from '@/components/projectcard';
import CertificateCard from '@/components/certificatecard';
import About from '@/components/about';
import Hero from '@/components/hero';
import CTA from '@/components/cta';


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ crashtest?: string }>;
}) {
  const params = await searchParams;
  //test hook for tests/error.spec.tsx
  if (process.env.NODE_ENV !== 'production' && params.crashtest === 'true') {
    throw new Error('Test crash');
  }

  return (
    <main className='min-h-screen bg-[#0e0d0b] px-8 py-12'>
      <h1 className='text-2xl text-center text-white mb-1'>
        Amy Rowell, Full-stack Developer
      </h1>
      <Hero />
      <section id='projects' className='scroll-mt-30'>
        <h2 className='text-2xl text-center text-white'>Completed Projects</h2>
        <ProjectCard />
      </section>
      <section id='education' className='scroll-mt-28'>
        <h3 className='mt-4 text-2xl text-center text-white'>Education</h3>
        <CertificateCard />
      </section>
      <section id='about' className='scroll-mt-28'>
        <h4 className='text-center text-2xl text-blue-600 mb-4'>About Me</h4>
        <About />
      </section>
      <CTA />
    </main>
  );
}
