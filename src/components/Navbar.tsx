import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ logo }: { logo: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  {
    /* If you change the size of the screen the links will be put in a burger */
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
    { name: "Skills", href: "/skills" },
  ];

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/XanderKortekaas",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/xander-kortekaas-b4b18a251",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 ">
      <div className="mx-auto max-w-5xl bg-gray-800/70 backdrop-blur-md border border-gray-700/50 shadow-lg rounded-full px-6 py-3 flex items-center justify-between">
        {/* LOGO + NAME */}
        <div className="flex items-center gap-3">
          <Link to="/" className="p-[1px] rounded-full bg-main-gradient">
            <img
              src={logo}
              className="h-12 w-12 rounded-full border-2 border-gray-800"
              alt="Xander Kortekaas"
            />
          </Link>
          <Link
            to="/"
            className="text-xl font-bold tracking-tighter text-gray-300"
          >
            Xander Kortekaas<span className="text-accent-blue">.</span>
          </Link>
        </div>
       
        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-gray-400 hover:text-accent-indigo transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "text-accent-cyan font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                       : "text-gray-400 hover:text-accent-indigo"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CONTACT BUTTON & MOBILE MENU BUTTON */}
        <div className="flex items-center gap-3">
          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-accent-cyan hover:bg-gray-700/60 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <a
            href="mailto:xander.kortekaas@gmail.com"
            className="hidden sm:block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200 text-center"
          >
            Contact
          </a>

          {/* Hamburger Icon for Mobile */}
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
        <div className="lg:hidden mt-2 mx-auto max-w-xs bg-gray-800/70 backdrop-blur-md border border-gray-700/50 shadow-xl rounded-2xl p-4 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                className="text-center py-2 text-gray-400 font-medium hover:bg-gray-50 rounded-lg"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`text-center py-2 font-medium rounded-lg transition-colors ${
                  location.pathname === link.href
                    ? "text-accent-cyan bg-gray-50/50 font-bold"
                    : "text-gray-400 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
          {/* Social Icons - Mobile */}
          <div className="flex items-center justify-center gap-4 py-1">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-accent-cyan hover:bg-gray-700/60 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>

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
