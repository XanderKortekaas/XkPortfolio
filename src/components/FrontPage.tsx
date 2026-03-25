export default function FrontPage({ logo }: { logo: any }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-900 text-white min-h-[80vh] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-blue/20 blur-[120px] rounded-full"></div>

      {/* DE CARD met gradient border effect */}
      {/* We gebruiken een div met padding en de gradient als achtergrond om de border te faken */}
      <div className="relative z-10 mx-auto p-[1px] rounded-2xl bg-main-gradient shadow-2xl">
        <div className="flex max-w-md items-center gap-x-6 rounded-2xl bg-gray-800 p-8">
          <div className="relative p-[2px] rounded-full bg-main-gradient shrink-0">
            <img
              src={logo}
              className="h-32 w-32 rounded-full border-4 border-gray-800 object-cover"
              alt="Xander Kortekaas"
            />
          </div>

          <div>
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-main-gradient">
              Xander Kortekaas
            </div>
            <p className="text-gray-400 mt-1 text-sm leading-relaxed mb-5">
              Junior Developer | Welcome to my portfolio.
            </p>
            <a 
              href="/cv.pdf"
              download="Xander_Kortekaas_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-main-gradient text-white font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-accent-indigo/25 hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
