import ProjectCard from '@/components/projectcard';
import CertificateCard from '@/components/certificatecard';
import About from '@/components/about';
import Hero from '@/components/hero';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className='min-h-screen bg-[0e0d0b] py-12'>
      {/* Wrapping everything ensures any client-side hook errors are caught gracefully */}
      <Suspense
        fallback={
          <div className='text-center text-white py-20'>
            Loading portfolio...
          </div>
        }>
        <Hero />

        <ProjectCard />

        <h2 className='text-3xl font-black text-center text-[e2e8f0] mb-8'></h2>
        <h2 className='text-3xl font-black text-center text-[e2e8f0] mb-8'>
          CERTIFICATES
        </h2>
        <CertificateCard />
        <h2 className='text-3xl font-black text-center text-[e2e8f0] mb-8'></h2>

        <About />

        <h4 className='text-3xl font-black text-center text-[e2e8f0] mb-8'></h4>
        <h3 className='text-3xl font-black text-center text-[e2e8f0] mb-8'>
          <p>
            We should build something together. I am looking for a front-end or
            full-stack role where I can grow with a team — ideally one that
            values accessible, user-centered design. Have a project or an
            opening in mind? I would love to talk.
          </p>
          <button>Contact Me</button>
        </h3>
      </Suspense>
      <footer></footer>
    </main>
  );
}
