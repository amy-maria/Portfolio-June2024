//single card data for typescript interface
export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  extendedDescription: string;
  keyFeatures: string;
  stack: string;
  image: string;
  altText: string;
}

export const projectsData: ProjectProps[] = [
  {
    id: 1,
    title: 'Trip Planner',
    description:
      'An AI-powered travel assistant that generates complete, day-by-day itineraries—including expected weather, routes, activities, dining options, and budget estimates—based on user-defined destinations and trip lengths.',
    extendedDescription:
      "Planning a trip shouldn't feel like a second job. This full-stack application takes the friction out of travel by leveraging AI to build custom itineraries in seconds. Users simply input their starting point, destination, and trip duration. The backend processes the request to dynamically calculate optimal routes, select highly-rated activities, recommend local dining, and forecast expected expenses.",
    keyFeatures:
      'Automated multi- day routing, localized dining and activity curation, and real - time expense estimation.',
    stack: 'Python, React, Tailwind CSS',
    image: '/images/aitripplanner.png',
    altText: 'screen shot of trip planner app using Python and AI',
  },
  {
    id: 2,
    title: 'Data Extraction',
    description:
      'An interactive data visualization tool that extracts world internet usage data from a CSV dataset and dynamically generates an illustrative time-series line plot for specific regions upon user request.',
    extendedDescription:
      'This project is a practical application of data processing and visualization for the web. It uses a Python backend to handle data from a provided CSV file and serves a clean Single Page Application (SPA) interface. The application processes the time-series data and utilizes the Matplotlib library to create clear, visually compelling charts. By clicking the "Generate Plot" button, users receive a tailored visual representation of the growth in online populations by continent, showcasing the integration of powerful data analysis tools into a user-friendly web experience.',
    keyFeatures:
      'Server - side CSV data processing, dynamic chart generation, clean and minimalist Single Page Application interface.',
    stack: 'Python, Flask, Matplotlib',
    image: '/images/globalonlinepopulation.png',
    altText:
      'screenshot of data extraction of global online population using Python',
  },
  {
    id: 3,
    title: 'Promptopia',
    description:
      'An open-source, full-stack AI prompting platform where users can securely authenticate via OAuth to discover, create, edit, and share creative AI prompts.',
    extendedDescription:
      'A dynamic web application designed for the modern AI landscape, built to serve as a centralized hub for discovering and sharing optimized AI prompts. This project primarily showcases robust full-stack development using Next.js and secure authentication integrations. By implementing OAuth, users can easily log in to create their own prompt cards, manage their profile feed, and have complete CRUD capabilities to edit or delete their shared content. The interface features a smooth search system by tag or username, optimizing user discovery across the community.',
    keyFeatures:
      'Secure OAuth user authentication, full CRUD operations, and dynamic tag- based community search.',
    stack: 'Next.js, React, Tailwind CSS, OAuth',
    image: '/images/promptopia.png',
    altText: 'screenshot of Promptopia app using Next.js and OAuth',
  },
  {
    id: 4,
    title: 'Python Weather app',
    description:
      'A full-stack Python application providing real-time weather forecasting alongside a community discussion board, featuring secure user authentication and dynamic API data fetching.',
    extendedDescription:
      'This project combines external API integration with multi-page web development. On the main dashboard, users can search for any city to instantly retrieve current meteorological data and a detailed 5-day forecast. Beyond live weather tracking, the application features a dedicated community space. By registering and logging into an account, users can interact on a separate message board to post updates and share localized updates, effectively demonstrating backend user management, state preservation, and third-party API data consumption.',
    keyFeatures:
      'Real-time API weather data fetching, 5-day visual forecast parsing, and user authentication with an interactive community post feed.',
    stack: 'Python, Flask, CSS, HTML',
    image: '/images/pythonweather.png',
    altText: 'screenshot of weather app with user posts',
  },
  {
    id: 5,
    title: 'React Weather App',
    description:
      'A sleek, highly responsive frontend application that delivers real-time weather analytics, featuring a dynamic measurement conversion toggle and contextual asset rendering based on atmospheric conditions.',
    extendedDescription:
      'This single-page application elevates the standard weather dashboard by focusing on conditional rendering and state management. Users can fetch global meteorological data instantaneously, with the interface dynamically adapting its visual assets to match current weather descriptions. Built to emphasize user preference, the app features an instantaneous toggle allowing users to switch fluidly between Fahrenheit and Celsius measurements across both the main overview and the extended forecast display. The project highlights clean component modularity, fluid state propagation, and production-ready deployment.',
    keyFeatures:
      'Unit conversion toggles (Imperial/Metric), condition-driven asset rendering, and asynchronous client-side API data orchestration.',
    stack: 'React, Tailwind CSS, JavaScript, Netlify',
    image: '/images/Reactweather.png',
    altText: 'screenshot of weather app using React',
  },

  {
    id: 6,
    title: 'MovieLand',
    description:
      'A responsive, cinematic single-page application built with React that allows users to seamlessly search an external entertainment database and discover movies in real time.',
    extendedDescription:
      'This streaming-inspired single-page application focuses on asynchronous API consumption and lightweight frontend architecture. Built entirely with vanilla JavaScript to showcase core language mastery, the application enables users to instantly query a global cinema database from a clean, dark-mode search interface. The frontend captures user input, orchestrates live API requests, and dynamically renders the matching titles, media categories, and promotional poster artwork into a responsive grid system without requiring a heavy framework.',
    keyFeatures:
      'Live dynamic search filtering, asynchronous API data handling, and custom framework-free DOM manipulation.',
    stack: 'React, HTML5, CSS3',
    image: '/images/Movieland3.png',
    altText: 'screenshot of Netflix style movie search',
  },
];
