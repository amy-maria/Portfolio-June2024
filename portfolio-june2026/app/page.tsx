import Image from "next/image";
import ProjectCard from "@/components/projectcard";
import CertificateCard from "@/components/certificatecard";

export default function Home() {
  return (
    <main className="min-h-screen bg-0e0d0b py-12">
      <h1 className="text-3xl font-black text-center text-e2e8f0-900 mb-8">
        Welcome to Our Community
      </h1>
      <ProjectCard />
      <CertificateCard  />
    </main>
  );
}
