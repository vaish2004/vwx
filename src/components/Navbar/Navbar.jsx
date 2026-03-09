import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

const NAV_LINKS = ["Skills", "Experience", "Projects", "Domain Specialisations", "Architecture", "Contact"];

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar dark:bg-gray-900/85 bg-white/90 dark:border-white/10 border-black/10">

      <span className="navbar__logo text-indigo-500" onClick={() => scrollTo("hero")}>
        Jiten M
      </span>

      <div className={`navbar__links ${menuOpen ? "navbar__links--open dark:bg-gray-900 bg-white" : ""}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            className="navbar__link dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 dark:hover:bg-white/5 hover:bg-gray-100"
            onClick={() => scrollTo(link.toLowerCase())}
          >
            {link}
          </button>
        ))}
      </div>

      <div className="navbar__actions">
        <button
          className="navbar__theme-btn dark:bg-white/5 bg-gray-100 dark:border-white/10 border-black/10 dark:text-white text-gray-800"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="dark:bg-white bg-gray-800"></span>
          <span className="dark:bg-white bg-gray-800"></span>
          <span className="dark:bg-white bg-gray-800"></span>
        </button>
      </div>

    </nav>
  );
}
