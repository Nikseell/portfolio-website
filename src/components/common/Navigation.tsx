import { type FC } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: FC = () => {
  const location = useLocation();

  const getLinkClassName = (path: string) => {
    const baseClasses = "px-6 py-2 rounded-full font-medium transition-colors";
    const activeClasses = "bg-white text-black";
    const inactiveClasses = "text-white hover:text-gray-300";

    return `${baseClasses} ${
      location.pathname === path ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-54 py-6">
      <Link
        to="/"
        className="text-white text-2xl font-bold hover:text-gray-300 transition-colors w-40"
      >
        NL.
      </Link>

      <div className="flex items-center space-x-8">
        <Link to="/" className={getLinkClassName("/")}>
          Home
        </Link>
        <Link to="/about" className={getLinkClassName("/about")}>
          About
        </Link>
        <Link to="/projects" className={getLinkClassName("/projects")}>
          Projects
        </Link>
        <Link to="/contact" className={getLinkClassName("/contact")}>
          Contact
        </Link>
      </div>

      <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors w-40">
        Download CV
      </button>
    </nav>
  );
};

export default Navigation;
