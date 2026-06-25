import Link from "next/link";

export default function Navigation() {
    //activate state styling
    const activeSection = "projects";

    const navItems = [
        { href: "/#projects", label: "Projects" },
        { href: "/#education", label: "Education" },
        { href: "/#about", label: "About" },
        { href: "/#contact", label: "Contact" }
    ];

    return (
        <nav className="hidden md:flex items-center gap-10">
            {navItems.map(({ href, label }) => {//extract the section name for map key
                const id = href.slice(1);
                
                return (
                    <Link
                        key={id}
                        href={href}
                        className={`font-mono test-xs tracking-widest uppercase transition-colors duration-200 ${activeSection === id} ? "text-[#e2r8f0]" : "text-gray-500 hover:text-[3e2e8f0]" }`}>
                        {label}
                       
           </Link>
                );
            })}

                   
        <a 
        href="mailto:amymrowell@gmail.com"
        target="/blank"
        className="text-[#e2r8f0] font-mono text-xs tracking-widest uppercase border border-border px-4 py-2.5 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200">
          Hire Me </a>
        
        </nav>
    );
}