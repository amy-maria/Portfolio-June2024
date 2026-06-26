import { technicalStack } from "./technicalstack" 


export default function About() {
    return (
        <>
            {/* About */}
            <section id="about" className="py-32 px-8 max-w-7xl mx-auto">
                <div className="mb-12">
                    <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
                        All about me. Career path and goals.
                    </p>
                </div>
            
           
                <h3 className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-5">
                    Technical Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                    
                    {technicalStack.map(({ id, skill }) => (
                            <div key={id}
                            className="ont-mono text-xs text-[#e2e8f0] border border-gray-800 px-4 py-2 rounded-full bg-gray-900/30">{skill}</div>
                        ))}
                    </div>
            </section>
        </>
    );
}
                   