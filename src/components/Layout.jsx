import ThemeToggle from "./ThemeToggle.jsx";
import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <button
        className="skip-link"
        onClick={() => {
          document.getElementById("main-content")?.focus();
        }}
      >
        Skip to content
      </button>

      <header>
        <p className="brand">Ryan | Software Developer</p>

        <nav aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <ThemeToggle />
      </header>

      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      <footer>
        <p>React Portfolio | Web Technologies 2026</p>
      </footer>
    </>
  );
}
