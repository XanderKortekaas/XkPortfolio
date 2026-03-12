import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold text-gray-300 mb-4">
          Project niet gevonden
        </h1>
        <Link
          to="/"
          className="text-accent-cyan hover:text-accent-violet transition-colors font-semibold"
        >
          ← Terug naar home
        </Link>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 pt-28 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent-indigo/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-accent-violet/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-accent-cyan transition-colors mb-8 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Terug naar projecten
        </Link>

        {/* Main card */}
        <div className="p-[1px] rounded-2xl bg-main-gradient shadow-2xl animate-fade-in">
          <div className="rounded-2xl bg-gray-800 p-8 md:p-10">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-main-gradient mb-4">
              {project.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-700 text-accent-cyan border border-accent-cyan/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Long description */}
            <p className="text-gray-300 leading-relaxed mb-8">
              {project.longDescription}
            </p>

            {/* Highlights — What I did */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-transparent bg-clip-text bg-main-gradient mb-4">
                Wat ik heb gedaan
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-cyan shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collaborators */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-transparent bg-clip-text bg-main-gradient mb-4">
                Samengewerkt met
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.collaborators.map((collaborator) => (
                  <div
                    key={collaborator}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700/60 border border-gray-600/50"
                  >
                    {/* Avatar placeholder */}
                    <div className="w-6 h-6 rounded-full bg-main-gradient flex items-center justify-center text-xs font-bold text-white">
                      {collaborator.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm text-gray-300 font-medium">
                      {collaborator}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6" />

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-sm font-semibold py-3 rounded-full border border-gray-600 text-gray-300 hover:border-accent-violet hover:text-accent-violet transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-sm font-semibold py-3 rounded-full bg-main-gradient text-white hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-accent-indigo/25"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  Live Demo
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
