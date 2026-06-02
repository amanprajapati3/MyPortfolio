import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold">
              Aman<span className="text-green-400">.dev</span>
            </h2>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Full Stack Developer specializing in MERN Stack,
              Shopify Development, and modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="text-slate-400 hover:text-green-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-green-400 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="text-slate-400 hover:text-green-400 transition"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-green-400 transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-green-400 transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-green-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Connect With Me
            </h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/amanprajapati3"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-lg
                  hover:border-green-400
                  hover:text-green-400
                  transition-all
                  duration-300
                "
                title="Github"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/aman-prajapati-020135314/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-lg
                  hover:border-green-400
                  hover:text-green-400
                  transition-all
                  duration-300
                "
                title="Linkedin"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://leetcode.com/u/Amankumar9818/"
                className="
                  p-3
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-lg
                  hover:border-green-400
                  hover:text-green-400
                  transition-all
                  duration-300
                "
                title="Leetcode"
              >
                <SiLeetcode size={22} />
              </a>

              <a
                href="mailto:amanprajapati9871@gmail.com"
                className="
                  p-3
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-lg
                  hover:border-green-400
                  hover:text-green-400
                  transition-all
                  duration-300
                "
                title="email"
              >
                <IoMdMail size={22} />
              </a>
            </div>

            <p className="text-slate-400 mt-5">
              Available for freelance projects,
              internships, and full-time opportunities.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-slate-500 text-center md:text-left">
              © {currentYear} Aman Prajapati. All rights reserved.
            </p>

            <a
              href="#hero"
              className="
                flex
                items-center
                gap-2
                px-4
                py-2
                bg-slate-900
                border
                border-slate-800
                rounded-lg
                hover:border-green-400
                hover:text-green-400
                transition-all
                duration-300
              "
            >
              <FaArrowUp size={18} />
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;