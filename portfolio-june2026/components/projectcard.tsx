import Image from 'next/image';
import ProjectCardItem, { ProjectProps } from './projectitem';
import {Link} from 'next-view-transitions'

const projectsData: ProjectProps[] = [
    {
        id: 1,
        title: "Trip Planner",
        description:
            "python",
        stack: "Python",
        image:
            "/images/aitripplanner.png",
    
        altText: "screen shot of trip planner app using Python and AI",
    },
    {
        id: 2,
        title: "Data Extraction",
        description:
            "python",
        stack: "Python",
        image:
            "/images/globalonlinepopulation.png",
        altText: "screenshot of data extraction of global online population using Python",

    },
    {
        id: 3,
        title: "Promptopia",
        description:
                        "python",

        stack: "Next",
        image:
            "/images/promptopia.png",
        altText: "screenshot of Promptopia app using Next.js and OAuth",

    },
    {
        id: 4,
        title: "Weather app",
        description:
                        "python",

        stack: "Python",
        image:
            "/images/pythonweather.png",
        altText: "screenshot of weather app with user posts",

    },
    {
        id: 5,
        title: "Weather app",
        description:
                        "python",

        stack: "React",
        image:
            "/images/Reactweather.png",
        altText: "screenshot of weather app using React",

    },
    {
        id:6,
        title: "Figma",
        description:
                       "python",

        stack: "Figma",
        image:
            "/images/Figmadesign.png",
        altText: "screenshot of site build from Figma design",

    },
    {
        id: 7,
        title: "Robots",
        description:
                        "python",

        stack: "vanilla JS",
        image:
            "/images/acmerobots.png",
        altText: "screenshot of acme robots app",

    },
    {
        id: 8,
        title: "MovieLand",
        description:
                        "python",

        stack: "vanilla JS",
        image:
            "/images/Movieland3.png",
        altText: "screenshot of Netflix style movie search",

    }
];
export default function ProjectCard() {
    return (
   <div className="container mx-auto p-6">
      {/* Responsive CSS Grid wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {projectsData.map((project) => (
        <Link key={project.id} href={`/projects/${project.id}`}>
          <ProjectCardItem 
            {...project} 
           // Uses JavaScript spread operator to pass all properties as props
          />
          </Link>
        ))} 
        
      </div>
    </div>
  );
}