import { IconType } from 'react-icons/lib';
import {
  FaPython,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiVercel,
  SiPostgresql,
} from 'react-icons/si';

const iconMap: Record<string, IconType> = {
  FaPython,
  FaReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  FaFigma,
  FaNodeJs,
  SiGraphql,
  SiVercel,
  SiPostgresql,
  FaGithub,
  FaTwitter,
  FaLinkedin,
};

export function TechIcon({ name }: { name: string }) {
  const IconComponent = iconMap[name];
  return IconComponent ? <IconComponent /> : null;
}
