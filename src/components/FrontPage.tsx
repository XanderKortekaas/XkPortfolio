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
            <p className="text-gray-400 mt-1 text-sm leading-relaxed">
              Junior Developer | Welcome to my portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
