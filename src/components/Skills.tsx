import { Link } from 'react-router-dom';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white min-h-[60vh] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-accent-cyan/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent-violet/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-main-gradient">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          A broad overview of my technical expertise and tools.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Link
            to={`/skills/${category.id}`}
            key={category.id}
            className={`flex flex-col p-6 rounded-2xl bg-gray-800/80 backdrop-blur-md border ${category.borderColor} shadow-xl hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden group cursor-pointer`}
          >
            {/* Inner subtle gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color.replace(/\/80/g, '/20')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <h3 className={`text-xl font-bold ${category.iconColor} mb-4 relative z-10 flex items-center justify-between`}>
              {category.title}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </h3>

            <div className="flex flex-wrap gap-2 relative z-10">
              {category.skills.map((skill) => (
                <span 
                  key={skill.name}
                  className="px-3 py-1 text-sm font-medium bg-gray-900/50 rounded-full border border-gray-700 text-gray-200"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
