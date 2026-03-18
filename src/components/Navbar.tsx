import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ logo }: { logo: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith("#")) {
      const sectionId = href.slice(1);
      if (location.pathname !== "/") {
        // Navigate to home first, then scroll after render
        navigate("/");
        setTimeout(() => {
          document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About me", href: "/about" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 ">
      <div className="mx-auto max-w-5xl bg-gray-200/75 backdrop-blur-md border border-gray-200 shadow-lg rounded-full px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="p-[1px] rounded-full bg-main-gradient ">
          <img
            src={logo}
            className="h-12 w-12 rounded-full border-2 border-gray-800 "
            alt="Xander Kortekaas"
          />
        </Link>

        <Link
          to="/"
          className="text-xl font-bold tracking-tighter text-gray-900"
        >
          Xander Kortekaas<span className="text-accent-blue">.</span>
        </Link>

        <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-main-gradient">
          Digital Portfolio
        </h1>
        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-gray-700 hover:text-accent-indigo transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-accent-indigo transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CONTACT KNOP & MOBILE MENU BUTTON */}
        <div className="flex items-center gap-4">
          <a
            href="mailto: xander.kortekaas@gmail.com"
            className="hidden sm:block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200 text-center"
          >
            Contact
          </a>

          {/* Hamburger Icon voor Mobiel */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-500 rounded-full transition"
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
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                className="text-center py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-lg"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-center py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
          <a
            href="mailto:xander.kortekaas@gmail.com"
            className="bg-blue-600 text-white py-3 rounded-xl font-bold text-center block"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
