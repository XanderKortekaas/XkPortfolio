export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
  color: string;
  borderColor: string;
  iconColor: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend & Web",
    description: "My core experience lies in building responsive, interactive, and accessible user interfaces using modern web technologies like React and Tailwind CSS.",
    skills: [
      { name: "React", proficiency: 60 },
      { name: "TypeScript", proficiency: 65 },
      { name: "Tailwind CSS", proficiency: 60 },
      { name: "HTML & CSS", proficiency: 65 },
      { name: "JavaScript", proficiency: 70 },
    ],
    color: "from-cyan-500/80 to-blue-500/80",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400"
  },
  {
    id: "gamedev",
    title: "Game Development",
    description: "I love exploring game mechanics and 3D environment design. I have hands-on experience building projects in industry-standard engines like Unity and Unreal.",
    skills: [
      { name: "Unity", proficiency: 65 },
      { name: "C#", proficiency: 60 },
      { name: "Unreal Engine", proficiency: 60 },
    ],
    color: "from-purple-500/80 to-pink-500/80",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400"
  },
  {
    id: "tools",
    title: "Tools & Other",
    description: "A solid workflow is key to good development. I use version control and modern UI/UX principles to ensure my projects are both functional and beautiful.",
    skills: [
      { name: "Git", proficiency: 65 },
      { name: "GitHub/GitLab", proficiency: 65 },
      { name: "Responsive Design", proficiency: 55 },
      { name: "UI/UX Concepts", proficiency: 55 },
    ],
    color: "from-indigo-500/80 to-violet-500/80",
    borderColor: "border-indigo-500/30",
    iconColor: "text-indigo-400"
  }
];
