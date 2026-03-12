export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  highlights: string[];
  collaborators: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Digital Portfolio",
    description:
      "Mijn persoonlijke portfolio gebouwd met React en TypeScript. Showcasest mijn projecten en vaardigheden met een modern dark theme.",
    longDescription:
      "Dit is mijn persoonlijke digitale portfolio website, gebouwd om mijn projecten, vaardigheden en ervaring te presenteren. De site is volledig gebouwd met React en TypeScript, met een modern dark theme dat gebruik maakt van glassmorphism en gradient accenten. De styling is gedaan met Tailwind CSS en het project wordt gebuild met Vite voor snelle development en optimale performance.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
    highlights: [
      "Responsive design dat werkt op alle schermformaten",
      "Modern dark theme met glassmorphism effecten",
      "Gradient accenten en micro-animaties voor een premium look",
      "Component-based architectuur met TypeScript",
    ],
    collaborators: ["Solo project"],
  },
  {
    id: 2,
    title: "Night Racer",
    description: "A small racing game in the night",
    longDescription:
      "Night Racer is een racegame gebouwd in Unity met C#. De speler racet door een donkere nachtelijke omgeving met dynamische verlichting en obstakels. Het project omvat game physics, een scoresysteem en sfeervolle nacht-graphics.",
    tags: ["Unity", "C#"],
    githubUrl: "#",
    liveUrl: "#",
    highlights: [
      "Game physics en besturing geïmplementeerd in C#",
      "Dynamische verlichting voor nachtelijke sfeer",
      "Score- en progressiesysteem",
      "Obstakel-generatie en collision detection",
    ],
    collaborators: ["Solo project"],
  },
  {
    id: 3,
    title: "Unreal Engine",
    description:
      "A small scene made in unreal with the unreal engine.",
    longDescription:
      "Een 3D scene gebouwd met Unreal Engine om de mogelijkheden van de engine te verkennen. Dit project richt zich op level design, materialen, verlichting en het creëren van een visueel aantrekkelijke omgeving. Het was een leerproject om ervaring op te doen met Unreal Engine's toolset.",
    tags: ["Unreal Engine"],
    githubUrl: "#",
    liveUrl: "#",
    highlights: [
      "Level design en environment art",
      "Materialen en textures toegepast",
      "Verlichting en sfeer gecreëerd",
      "Unreal Engine workflow geleerd",
    ],
    collaborators: ["Solo project"],
  },
];
