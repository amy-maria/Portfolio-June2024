
import ProjectCard from "@/components/projectcard";
import CertificateCard from "@/components/certificatecard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[0e0d0b] py-12">
      <h1 className="text-3xl font-black text-center text-[e2e8f0] mb-8">
       HERO TEXT
      </h1>
      <ProjectCard />
      <h2>CALL TO ACTION TEXT</h2>
      <h2>CERTIFICATES</h2>
      <CertificateCard />
      <h2>STACK</h2>
      <h4>ABOUT ME</h4>
      <h3>CONTACT ME</h3>
    </main>
  );
}
