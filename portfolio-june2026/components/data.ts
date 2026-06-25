//single card data for typescript interface
export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  stack: string;
  image: string;
  altText: string;
}

export const projectsData: ProjectProps[] = [
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
        id: 6,
        title: "MovieLand",
        description:
                        "python",

        stack: "vanilla JS",
        image:
            "/images/Movieland3.png",
        altText: "screenshot of Netflix style movie search",

    }
];
