export interface ContactProps {
  title: string;
  href: string;
  iconName: string;
}
export const contactInformation: ContactProps[] = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/amymrowell/',
    iconName: 'FaLinkedin',
  },

  {
    title: 'GitHub',
    href: 'https://github.com/amy-maria?tab=repositories',
    iconName: 'FaGithub',
  },
  {
    title: 'Twitter/X',
    href: 'https://x.com/amymrowell',
    iconName: 'FaTwitter',
  },
  {
    title: 'Email',
    href: 'mailto:amymrowell@gmail.com',
    iconName: 'FaEnvelope',
  },
];
