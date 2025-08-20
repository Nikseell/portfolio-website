import { type FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClassName = (path: string) => {
    const baseClasses = "px-6 py-2 rounded-full font-medium transition-colors";
    const activeClasses = "bg-white text-black";
    const inactiveClasses = "text-white hover:text-gray-300";

    return `${baseClasses} ${
      location.pathname === path ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-6 transition-all duration-300 w-full${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center w-full max-w-[90rem] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex-1 flex justify-start">
          <Link
            to="/"
            className="text-white text-2xl font-bold hover:text-gray-300 transition-colors"
          >
            NL.
          </Link>
        </div>

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

        <div className="flex-1 flex justify-end">
          <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
