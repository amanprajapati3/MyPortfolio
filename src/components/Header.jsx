import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      href: "#hero",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-green-500/10 py-3"
          : "bg-slate-950/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="text-2xl md:text-3xl font-bold text-white">
            Aman
            <span className="text-green-400">.dev</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                relative
                text-slate-300
                font-medium
                transition-all
                duration-300
                hover:text-green-400
                after:absolute
                after:left-0
                after:-bottom-1
                after:w-0
                after:h-[2px]
                after:bg-green-400
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="
              px-5
              py-2.5
              rounded-lg
              bg-green-500
              text-slate-950
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              hover:shadow-green-500/40
            "
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pt-5" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-5 pb-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                text-slate-300
                font-medium
                hover:text-green-400
                transition-all
                duration-300
              "
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="
              w-fit
              px-5
              py-2.5
              rounded-lg
              bg-green-500
              text-slate-950
              font-semibold
            "
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* progress bar */}
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-800">
        <div
          className="
      h-full
      bg-green-400
      transition-all
      duration-150
      shadow-[0_0_10px_rgba(74,222,128,0.8)]
    "
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};

export default Header;
