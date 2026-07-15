import { CertificateCardItem, CertificateProps } from './certificateitem';

const certificatesData: CertificateProps[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'SheCodes',
    image: '/education/Web Development certificate.png',
    altText: 'Web Development certificate',
  },
  {
    id: 2,
    title: 'Introduction to Python',
    description: 'SheCodes',
    image: '/education/IntroPython.png',
    altText: 'Introduction to Python certificate',
  },
  {
    id: 3,
    title: 'Advanced Python',
    description: 'SheCodes',
    image: '/education/PythonAdvanced.png',
    altText: 'Advanced Python certificate',
  },
  {
    id: 4,
    title: 'React Development',
    description: 'SheCodes',
    image: '/education/ReactDevCert.png',
    altText: 'React Development certificate',
  },
  {
    id: 5,
    title: 'Responsive Web Development',
    description: 'SheCodes',
    image: '/education/ResponsiveWebDevCert.png',
    altText: 'Responsive Web Development certificate',
  },
  {
    id: 6,
    title: 'Specialize in QA Manual Testing',
    description: 'Udemy',
    image: '/education/specialize qa.png',
    altText: 'Specialize in QA Manual Testing certificate',
  },
];
export default function CertificateCard() {
  return (
    <div className='container mx-auto p-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {certificatesData.map((certificate) => (
          <CertificateCardItem key={certificate.id} {...certificate} />
        ))}
      </div>
    </div>
  );
}
