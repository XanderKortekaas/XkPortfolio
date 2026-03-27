import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { skillCategories } from "../data/skills";

export default function SkillDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const category = skillCategories.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!category) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold text-gray-300 mb-4">
          Skill Category not found
        </h1>
        <Link to="/" className="text-accent-cyan hover:text-accent-violet transition-colors font-semibold">
          ← Back to home
        </Link>
      </section>
    );
  }

  // Helper to extract a subtle version of the color gradient for background glows
  const subtleGlow = category.color.replace(/\/80/g, '/20');
  // Helper for the card border
  const borderGradient = category.color.replace(/\/80/g, '/50');

  return (
    <section
      className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6 pt-32 pb-20 relative overflow-hidden cursor-pointer"
      onClick={() => navigate("/")}
      title="Click background to go home"
    >
      {/* Background glow using category colors if possible, else default */}
      <div className={`absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br ${subtleGlow} blur-[160px] rounded-full pointer-events-none opacity-40`} />

      <div className="relative z-10 w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <div className={`p-[1px] rounded-2xl bg-gradient-to-br ${borderGradient} shadow-2xl animate-fade-in`}>
          <div className="rounded-2xl bg-gray-800 p-8 md:p-10">
            <h1 className={`text-3xl md:text-4xl font-extrabold ${category.iconColor} mb-6 tracking-tight drop-shadow-sm`}>
              {category.title}
            </h1>

            <p className="text-gray-300 leading-relaxed mb-10 text-lg">
              {category.description}
            </p>

            <h2 className="text-xl font-bold text-white mb-6 border-b border-gray-700/50 pb-2">
              Proficiency Levels
            </h2>

            <div className="space-y-8">
              {category.skills.map((skill, idx) => (
                <div key={skill.name} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-200 font-semibold text-lg">{skill.name}</span>
                    <span className={`text-sm font-bold ${category.iconColor}`}>{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-4 bg-gray-900 rounded-full overflow-hidden border border-gray-700/50 p-[2px] shadow-inner shadow-black/50">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${category.color} relative overflow-hidden transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.proficiency}%` }}
                    >
                      {/* Inner gloss effect for the bar */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/20 rounded-t-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Back button */}
            <div className="mt-12 pt-6 border-t border-gray-700/50 flex justify-center">
              <Link
                to="/skills"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-all duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Back to Skills
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
