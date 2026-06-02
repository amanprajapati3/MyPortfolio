import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaCode } from "react-icons/fa";



import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiRedux,
} from "react-icons/si";
import ScrollReveal from "../components/ScrollReveal";

const Skills = () => {
  const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <FaNodeJs /> },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "C", icon: <FaCode /> },
      { name: "C++", icon: <FaCode /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

  return (
    <section className="bg-slate-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-green-400 uppercase tracking-widest font-semibold">
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technologies I Work With
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
            A collection of technologies and tools I use to build modern,
            scalable, and high-performance web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <ScrollReveal direction="left">
        <div className="space-y-12">
          {skills.map((group, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-green-400 mb-6">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {group.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="
                      group
                      bg-slate-900
                      border
                      border-slate-800
                      rounded-xl
                      p-6
                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-3
                      transition-all
                      duration-300
                      hover:border-green-400
                      hover:-translate-y-2
                      hover:shadow-lg
                      hover:shadow-green-500/20
                    "
                  >
                    <div
                      className="
                        text-4xl
                        text-green-400
                        transition-all
                        duration-300
                        group-hover:scale-125
                        group-hover:rotate-6
                      "
                    >
                      {skill.icon}
                    </div>

                    <p className="text-slate-300 font-medium text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>

        {/* Bottom Banner */}
        <ScrollReveal direction="right">
        <div className="mt-20">
          <div
            className="
              bg-gradient-to-r
              from-slate-900
              to-slate-800
              border
              border-slate-800
              rounded-2xl
              p-8
              text-center
            "
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Full Stack MERN & Shopify Developer
            </h3>

            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Passionate about building responsive user interfaces,
              scalable backend systems, and custom Shopify experiences
              that solve real-world business problems.
            </p>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;