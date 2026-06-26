import { FaPython, FaReact, FaFigma, FaNodeJs,FaGithub, FaTwitter, FaLinkedin,  } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql, SiVercel, SiPostgresql} from "react-icons/si"; 


export default function TechIcon({ name }: { name: string; }) {
    switch (name) {
        case "FaPython": return <FaPython />;
        case "FaReact": return <FaReact />;
        case "SiNextdotjs": return <SiNextdotjs />;
        case "SiTypescript": return <SiTypescript />;
        case "SiTailwind": return <SiTailwindcss />;
        case "FaFigma": return <FaFigma />;
        case "FaNodeJs": return <FaNodeJs />;
        case "SiGraphal": return <SiGraphql />;
        case "SiVercel": return <SiVercel />;
        case "SiPostgressql": return <SiPostgresql />;
        case "FaGitHub": return <FaGithub />;
        case "FaTwitter": return <FaTwitter />;
        case "FaLinkedin": return <FaLinkedin />;
            
    }
    
}