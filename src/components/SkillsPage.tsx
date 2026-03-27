import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { skillCategories } from "../data/skills";

// SVG icons for each category
const categoryIcons: Record<string, React.ReactElement> = {
  frontend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  gamedev: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
};
export default function SkillsPage() {
  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -120; // Accounts for navbar and spacing
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <section className="flex flex-col items-center min-h-screen bg-gray-900 text-white px-6 pt-32 pb-20 relative overflow-hidden"
      onClick={() => navigate("/")}
      title="Click background to go home"
    >
      {/* Background glows */}
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-accent-cyan/8 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-accent-violet/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-indigo/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl space-y-16">

        {/* ── Hero ── */}
        <div 
          className="flex flex-col items-center text-center animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-main-gradient mb-3">
            Skills &amp; Technologies
          </h1>
          <div className="h-[2px] w-16 bg-main-gradient rounded-full mb-4" />
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            A curated overview of my technical expertise — click any category to explore details and proficiency levels.
          </p>
        </div>

        {/* ── Category Cards ── */}
        <div className="space-y-6">
          {skillCategories.map((category, idx) => (
            <Link
              to={`/skills/${category.id}`}
              key={category.id}
              id={category.id}
              className="group block animate-slide-up"
              style={{ animationDelay: `${idx * 120}ms` }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`relative rounded-2xl border ${category.borderColor} bg-gray-800/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl`}
              >
                {/* Hover gradient wash */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color.replace(/\/80/g, "/10")} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 p-7 md:p-8 flex flex-col md:flex-row md:items-center gap-6">

                  {/* Left — icon + text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`${category.iconColor} flex-shrink-0`}>
                        {categoryIcons[category.id]}
                      </span>
                      <h2 className={`text-2xl font-bold ${category.iconColor}`}>
                        {category.title}
                      </h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xl">
                      {category.description}
                    </p>
                  </div>

                  {/* Right — skill pills + arrow */}
                  <div className="flex flex-col items-start md:items-end gap-4 flex-shrink-0">
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-900/60 border border-gray-700 text-gray-300"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <span
                      className={`inline-flex items-center gap-2 text-sm font-semibold ${category.iconColor} transition-transform group-hover:translate-x-1 duration-300`}
                    >
                      View proficiency levels
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* ── Back button ── */}
        <div className="flex justify-center animate-slide-up" style={{ animationDelay: "400ms" }}>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-accent-cyan text-accent-cyan font-bold hover:bg-accent-cyan hover:text-gray-900 transition-all duration-300 group"
            onClick={(e) => e.stopPropagation()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to home
          </Link>
        </div>

      </div>
    </section>
  );
}
