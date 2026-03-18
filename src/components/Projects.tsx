import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white min-h-[80vh] relative overflow-hidden"
    >
      {/* Background glow — same as FrontPage */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-indigo/15 blur-[140px] rounded-full pointer-events-none" />

      {/* Section header */}
      <div className="relative z-10 w-full max-w-5xl mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-main-gradient">
          Projects
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          An overview of the projects I've built.
        </p>
      </div>

      {/* Project cards grid */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            className="p-[1px] rounded-2xl bg-main-gradient shadow-2xl group cursor-pointer hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="flex flex-col h-full rounded-2xl bg-gray-800 overflow-hidden">
              {/* Thumbnail */}
              {project.media.length > 0 && project.media.find(m => m.type === "image") && (
                <img
                  src={project.media.find(m => m.type === "image")!.url}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
              )}

              <div className="flex flex-col flex-1 p-6 gap-4">
              {/* Title */}
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-main-gradient">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-700 text-accent-cyan border border-accent-cyan/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View details hint */}
              <div className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-accent-cyan transition-colors mt-1">
                <span>View details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
