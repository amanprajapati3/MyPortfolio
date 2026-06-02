
const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl pt-28 mx-auto px-4 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 border border-green-500/30 rounded-full bg-green-500/10 mb-6">
              <span className="text-green-400 text-sm font-medium">
                Full Stack Developer
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building
              <span className="text-green-400"> Modern </span>
              Web Applications
            </h1>

            <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-2xl">
              I develop responsive, scalable, and user-focused web
              applications using React.js, Node.js, Express.js,
              MongoDB, and Shopify. From business websites to
              full-stack e-commerce platforms, I transform ideas
              into production-ready solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-green-500 text-slate-950 font-semibold rounded-lg hover:scale-105 transition-all duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-slate-700 rounded-lg hover:border-green-400 hover:text-green-400 transition-all duration-300"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="p-6 font-mono text-sm">
                <p className="text-green-400">
                  const developer = {"{"}
                </p>

                <p className="ml-4 text-slate-300">
                  name: "Aman Prajapati",
                </p>

                <p className="ml-4 text-slate-300">
                  role: "Full Stack Developer",
                </p>

                <p className="ml-4 text-slate-300">
                  stack: ["React", "Node", "Express", "MongoDB"],
                </p>

                <p className="ml-4 text-slate-300">
                  experience: "Client Projects",
                </p>

                <p className="ml-4 text-slate-300">
                  status: "Available for Work"
                </p>

                <p className="text-green-400">{"}"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-400">5+</h3>
            <p className="text-slate-400">Projects</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-400">2+</h3>
            <p className="text-slate-400">Client Websites</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-400">MERN</h3>
            <p className="text-slate-400">Stack</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-400">Shopify</h3>
            <p className="text-slate-400">Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;