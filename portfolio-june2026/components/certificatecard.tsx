import Image from 'next/image';
import CertificateCardItem, { CertificateProps } from './certificateitem';

const certificatesData: CertificateProps[] = [
    {
        id: 1,
        title: "Web Development",
        description:
            "SheCodes",
        image:
            "/education/Web Development certificate.png",
        altText: "Web Development certificate",
        
    },
    {
        id: 2,
        title: "Introduction to Python",
        description:
            "SheCodes",
        image:
            "/education/IntroPython.png",
        altText: "Introduction to Python certificate",

    },
    {
        id: 3,
        title: "Advanced Python",
        description:
            "SheCodes",
        image:
            "/education/PythonAdvanced.png",
        altText: "Advanced Python certificate",

    },
    {
        id: 4,
        title: "React Development",
        description:
            "SheCodes",
        image:
            "/education/ReactDevCert.png",
        altText: "React Development certificate",

    },
    {
        id: 5,
        title: "Responsive Web Development",
        description:
            "SheCodes",
        image:
            "/education/ResponsiveWebDevCert.png",
        altText: "Responsive Web Development certificate",

    },
    {
        id:6,
        title: "Specialize in QA Manual Testing",
        description:
            "Udemy",
        image:
            "/education/specialize qa.png",
        altText: "Specialize in QA Manual Testing certificate",
    },

];
export default function CertificateCard() {
    return (
      /* 
      1. max-w-7xl & mx-auto: Centers everything and stops it stretching endlessly on huge monitors.
      2. grid: Turns on the grid system.
      3. grid-cols-1 md:grid-cols-2 lg:grid-cols-3: Locks 1 card on phone, 2 on tablet, and exactly 3 on desktop.
      4. gap-6: Adds space between the cards so they don't touch.
    */
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((certificate) => (
          <CertificateCardItem 
            key={certificate.id} 
            {...certificate} // Uses JavaScript spread operator to pass all properties as props
          />
        )
        )}
            </div>
            </div>
  );
}