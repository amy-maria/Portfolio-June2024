import ProjectCardItem from './projectitem';
import { Link } from 'next-view-transitions';
import { projectsData } from './data';

export default function ProjectCard() {
  return (
    <div data-testid='project-card' className='container mx-auto p-8'>
      {/* Responsive CSS Grid wrapper */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
        {projectsData.map((project) => (
          <Link
            key={project.id}
            href={`/project/${project.id}`}
            className='block h-full'>
            <ProjectCardItem {...project} />
          </Link>
        ))}
      </div>
    </div>
  );
}
