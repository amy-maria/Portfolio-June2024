
import ProjectCard from "@/components/projectcard";
import CertificateCard from "@/components/certificatecard";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-[0e0d0b] py-12">
      <h1 className="text-3xl font-black text-center text-[e2e8f0] mb-8">
       HERO TEXT
      </h1>
      <ProjectCard />
      <h2 className="text-3xl font-black text-center text-[e2e8f0] mb-8">CALL TO ACTION TEXT</h2>
      <h2 className="text-3xl font-black text-center text-[e2e8f0] mb-8">CERTIFICATES</h2>
      <CertificateCard />
      <h2 className="text-3xl font-black text-center text-[e2e8f0] mb-8">ABOUT ME</h2>
      <About  />
      <h4 className="text-3xl font-black text-center text-[e2e8f0] mb-8"></h4>
      <h3 className="text-3xl font-black text-center text-[e2e8f0] mb-8">Let's Work Together</h3>
    
      <footer>
        
      </footer>
      </main>
  );
}
