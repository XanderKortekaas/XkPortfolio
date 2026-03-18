export interface MediaItem {
  type: "image" | "video";
  url: string;
  caption?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  projectType: string[];
  media: MediaItem[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "My personal portfolio built with React and TypeScript. Showcases my projects and skills with a modern dark theme.",
    longDescription:
      "This is my personal portfolio website, built to present my projects, skills, and experience. The site is fully built with React and TypeScript, featuring a modern dark theme that uses glassmorphism and gradient accents. Styling is done with Tailwind CSS and the project is built with Vite for fast development and optimal performance.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Responsive design that works on all screen sizes",
      "Modern dark theme with glassmorphism effects",
      "Gradient accents and micro-animations for a premium look",
      "Component-based architecture with TypeScript",
    ],
    projectType: ["Solo project"],
    media: [],
  },
  {
    id: 2,
    title: "Night Racer",
    description: "A small racing game in the night",
    longDescription:
      "Night Racer is a racing game built in Unity with C#. The player races through a dark nighttime environment with dynamic lighting and obstacles. The project includes game physics, a scoring system, and atmospheric night graphics.",
    tags: ["Unity", "C#"],
    githubUrl: "https://gitlab.glu.nl/220442/nachtrijder",
    highlights: [
      "Made controls implemented in C# and Unity",
      "Made The 'car' movement",
      "Made detection if the car wasn't flying",
    ],
    projectType: ["Group Project"],
    media: [
      {
        type: "image",
        url: "/media/NightRacer.png",
        caption: "A screenshot of the game",
      },
      {
        type: "video",
        url: "/media/The Dutchman.mp4",
        caption: "Night Racer gameplay",
      },
    ],
  },
  {
    id: 3,
    title: "Unreal Engine",
    description:
      "A small scene made in Unreal with the Unreal Engine.",
    longDescription:
      "A 3D scene built with Unreal Engine to explore the capabilities of the engine. This project focuses on level design, materials, lighting, and creating a visually appealing environment. It was a learning project to gain experience with Unreal Engine's toolset.",
    tags: ["Unreal Engine"],
    highlights: [
      "Designed the environment",
      "Materials and textures applied",
      "Lighting and atmosphere created",
      "Learned the Unreal Engine workflow",
    ],
    projectType: ["Solo project"],
    media: [{
      type: "image",
      url: "/media/Project-Unreal.png",
      caption: "Unreal Engine scene",
    },],
  },
];
