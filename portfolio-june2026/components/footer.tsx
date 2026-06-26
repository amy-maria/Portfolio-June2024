import { FaCopyright } from "react-icons/fa";
import TechIcon from "./TechIcon";
import { contactInformation } from "./contactinformation";

export default function Footer() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-3">
            {contactInformation.map(({ title, href, iconName }) => (
                <a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreffer"
                    title={title}
                    className="flex items-center gap-2 font-mono text-xs text-[#e2e8f0] border border-gray-800 px-4 py-2 rounded-full bg-gray-900/30 hover:border-gray-600 transition-colors duration-200">
                    <TechIcon name={iconName} />
                    </a>
            ))}
            </div>
        
            <div className="flex flex-row-reverse items-center gap-2 font-mono text-xs text-[#e2e8f0]"><span>Amy Rowell {new Date().getFullYear()}</span><FaCopyright />
            </div>
            </div>
    );
}