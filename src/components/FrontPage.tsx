export default function FrontPage({ logo }: { logo: any }) {
  return (
    // Front page Card
    <section className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-900 text-white min-h-[80vh] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-color-accent-blue/20 blur-[120px] rounded-full"></div>

      {/* De Card */}
      <div className="relative z-10 mx-auto flex max-w-md items-center gap-x-6 rounded-2xl bg-gray-800 p-8 shadow-2xl border border-main-gradient">
        <img
          src={logo}
          className="h-32 w-32 rounded-full border-4 border-accent-indigo object-cover shadow-lg"
          alt="Xander Kortekaas"
        />

        <div>
          {/* Gradient op mijn naam */}
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-main-gradient">
            Xander Kortekaas
          </div>
          <p className="text-color-gray-400 mt-1 text-sm leading-relaxed">
            Junior Developer | Welkom op mijn digitale portfolio.
          </p>
        </div>
      </div>
    </section>
  );
}
