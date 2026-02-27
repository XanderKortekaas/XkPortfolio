import { useState, useEffect } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  {
    /* Als je de site van grootte veranderd and worden de link dingen zoals projects in een burger gestopt */
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Projecten", href: "#projects" },
    { name: "Over mij", href: "#about" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      {/* De "Pill" container */}
      <div className="mx-auto max-w-5xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-full px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="text-xl font-bold tracking-tighter text-gray-900">
          Xander Kortekaas<span className="text-accent-blue">.</span>
        </div>

        <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-main-gradient">
          Digital Portfolio
        </h1>
        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-color-gray-700 hover:text-accent-indigo transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CONTACT KNOP & MOBILE MENU BUTTON */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
            Contact
          </button>

          {/* Hamburger Icon voor Mobiel */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-color-gray-600 hover:bg-gray-100 rounded-full transition"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBIEL MENU (DROPDOWN) */}
      {isOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-xs bg-white border border-gray-100 shadow-xl rounded-2xl p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-center py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-blue-600 text-white py-3 rounded-xl font-bold">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
