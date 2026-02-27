export default function StyleGuide() {
  const grays = [
    { name: "gray-900", hex: "#000000", class: "bg-gray-900" },
    { name: "gray-800", hex: "#1f1f1f", class: "bg-gray-800" },
    { name: "gray-700", hex: "#2e2e2e", class: "bg-gray-700" },
    { name: "gray-600", hex: "#313131", class: "bg-gray-600" },
    { name: "gray-500", hex: "#969593", class: "bg-gray-500" },
    { name: "gray-400", hex: "#a6a6a6", class: "bg-gray-400" },
    { name: "gray-300", hex: "#bdbbb7", class: "bg-gray-300" },
    { name: "gray-200", hex: "#f1f1f1", class: "bg-gray-200 text-black" },
    { name: "gray-100", hex: "#ffffff", class: "bg-gray-100 text-black" },
  ];

  const accents = [
    { name: "Blue", class: "bg-accent-blue" },
    { name: "Cyan", class: "bg-accent-cyan" },
    { name: "Indigo", class: "bg-accent-indigo" },
    { name: "Sky", class: "bg-accent-sky" },
    { name: "Violet", class: "bg-accent-violet" },
  ];

  return (
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-main-gradient">
        Portfolio Style Guide (Dit is om te zien wat voor kleuren ik ga
        gebruiken)
      </h1>

      {/* Grijstinten Sectie */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2 text-gray-400">
          Grijstinten (Achtergronden & Tekst)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {grays.map((g) => (
            <div
              key={g.name}
              className={`${g.class} p-6 rounded-xl border border-gray-700 flex flex-col justify-between`}
            >
              <span className="font-bold">{g.name}</span>
              <span className="text-xs opacity-60 uppercase">{g.hex}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Accenten Sectie */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2 text-gray-400">
          Accent Kleuren
        </h2>
        <div className="flex flex-wrap gap-4">
          {accents.map((a) => (
            <div
              key={a.name}
              className={`${a.class} px-8 py-4 rounded-full font-bold shadow-lg shadow-black/50 text-gray-900`}
            >
              {a.name}
            </div>
          ))}
        </div>
      </section>

      {/* Gradient Sectie */}
      <section>
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2 text-gray-400">
          Gradient Test
        </h2>
        <div className="h-20 w-full bg-main-gradient rounded-xl mb-4"></div>
        <p className="text-3xl w-full font-black text-transparent bg-clip-text bg-main-gradient uppercase">
          Fugiat necessitatibus ut voluptatem qui dicta dolorem harum. Omnis
          amet
        </p>
      </section>
    </div>
  );
}
