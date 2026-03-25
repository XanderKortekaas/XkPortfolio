import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent-violet/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-cyan/8 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center animate-fade-in">
        {/* Big 404 */}
        <h1 className="text-[10rem] md:text-[14rem] font-extrabold leading-none text-transparent bg-clip-text bg-main-gradient select-none">
          404
        </h1>

        {/* Divider */}
        <div className="h-[2px] w-24 bg-main-gradient rounded-full mx-auto mb-6" />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-3">
          Page not found
        </h2>
        <p className="text-gray-400 text-base max-w-sm mx-auto mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-main-gradient text-white font-bold text-sm hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-accent-indigo/25 hover:-translate-y-0.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
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
    </section>
  );
}
