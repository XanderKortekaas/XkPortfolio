import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Ye.png"
const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Unity",
  "C#",
  "HTML & CSS",
  "JavaScript",
];

const timeline = [
  {
    year: "2022 – Present",
    title: "Software Development Student",
    description:
      "Studying software development with a specialization in Game Development.",
  },
  {
    year: "2023",
    title: "First Game Projects",
    description:
      "Developed 'Night Racer' in Unity using C# and explored 3D environment design in Unreal Engine.",
  },
  {
    year: "2022",
    title: "Started Learning to Code",
    description:
      "Took my first steps into programming by mastering the fundamentals of HTML, CSS, and JavaScript.",
  },
];

export default function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-col items-center min-h-screen bg-gray-900 text-white px-6 pt-32 pb-20 relative overflow-hidden">
      {/* Background glows — positioned differently than other pages */}
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-accent-violet/12 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-32 left-1/4 w-96 h-96 bg-accent-cyan/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-indigo/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl space-y-16">
        {/* ── Hero intro ── */}
        <div
          className="flex flex-col items-center text-center animate-fade-in"
        >
          <div className="p-[3px] rounded-full bg-main-gradient mb-6 shadow-lg shadow-accent-indigo/20">
            <div className="w-28 h-28 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-main-gradient">
              <img
              src={logo}
              className="h-28 w-28 rounded-full border-4 border-gray-800 object-cover"
              alt="Xander Kortekaas"
            />
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-main-gradient mb-3">
            About Me
          </h1>
          <div className="h-[2px] w-16 bg-main-gradient rounded-full mb-4" />
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            — Junior Developer focused on continuous growth —
            always eager to explore new technologies and solve complex problems.
          </p>
        </div>

        {/* ── About text ── */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "100ms" }}
        >
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-main-gradient mb-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-main-gradient rounded-full" />
            Who Am I?
          </h2>
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              Hi! I'm Xander Kortekaas, a junior developer who loves to make silly things through code, sometimes it means building a game and sometimes it means building a website. I really don't have a preferance in what i need to do i also really like learning new coding languages. 
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm always eager to learn new technologies and push myself
              beyond my comfort zone. Whether it's crafting a polished UI
              with React or building game mechanics in Unity, I bring
              curiosity and dedication to every project I take on.
            </p>
          </div>
        </div>

        {/* ── Skills ── */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-main-gradient mb-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-main-gradient rounded-full" />
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  animationDelay: `${300 + i * 60}ms`,
                  borderColor:
                    i % 3 === 0
                      ? "rgba(34,211,238,0.4)"
                      : i % 3 === 1
                        ? "rgba(168,85,247,0.4)"
                        : "rgba(99,102,241,0.4)",
                  color:
                    i % 3 === 0
                      ? "#22d3ee"
                      : i % 3 === 1
                        ? "#a855f7"
                        : "#6366f1",
                  backgroundColor:
                    i % 3 === 0
                      ? "rgba(34,211,238,0.08)"
                      : i % 3 === 1
                        ? "rgba(168,85,247,0.08)"
                        : "rgba(99,102,241,0.08)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ── Timeline ── */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-main-gradient mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-main-gradient rounded-full" />
            My Journey
          </h2>

          <div className="relative pl-8 border-l-2 border-gray-700/60 space-y-10">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="relative animate-slide-up"
                style={{ animationDelay: `${400 + i * 120}ms` }}
              >
                {/* Gradient dot */}
                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-main-gradient shadow-md shadow-accent-indigo/30" />

                <span className="text-xs font-bold text-accent-cyan tracking-wider uppercase">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-gray-200 mt-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Gradient divider ── */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

        {/* ── Back button ── */}
        <div className="flex justify-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-accent-cyan text-accent-cyan font-bold hover:bg-accent-cyan hover:text-gray-900 transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
