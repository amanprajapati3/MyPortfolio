import ScrollReveal from "../components/ScrollReveal";

const About = () => {
  return (
    <section className="bg-slate-950 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-green-400 font-semibold tracking-widest uppercase">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Passionate About Building
            <span className="text-green-400"> Modern Web Experiences</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <ScrollReveal direction="left">
          <div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-400">
                Who I Am
              </h3>

              <p className="text-slate-300 leading-relaxed mb-4">
                Hi, I'm <span className="text-white font-semibold">Aman Prajapati</span>,
                a Full Stack Developer specializing in the MERN stack and Shopify
                development.
              </p>

              <p className="text-slate-300 leading-relaxed mb-4">
                I have completed my Bachelor of Computer Applications (BCA)
                and enjoy creating modern, responsive, and scalable web
                applications that deliver real business value.
              </p>

              <p className="text-slate-300 leading-relaxed">
                My experience includes developing full-stack e-commerce
                platforms, blogging systems, business websites, Shopify store
                customizations, and client projects using modern web
                technologies.
              </p>
            </div>
          </div>
          </ScrollReveal>

          {/* Right Side */}
          <ScrollReveal direction="right">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h4 className="text-green-400 font-semibold mb-2">
                Education
              </h4>

              <p className="text-white font-medium">
                Bachelor of Computer Applications
              </p>

              <p className="text-slate-400 mt-2">BCA Graduate</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h4 className="text-green-400 font-semibold mb-2">
                Experience
              </h4>

              <p className="text-white font-medium">
                Full Stack Development
              </p>

              <p className="text-slate-400 mt-2">
                MERN & Client Projects
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h4 className="text-green-400 font-semibold mb-2">
                Specialization
              </h4>

              <p className="text-white font-medium">
                MERN Stack Development
              </p>

              <p className="text-slate-400 mt-2">
                React, Node, Express, MongoDB
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h4 className="text-green-400 font-semibold mb-2">
                Additional Skills
              </h4>

              <p className="text-white font-medium">
                Shopify Development
              </p>

              <p className="text-slate-400 mt-2">
                Liquid, Theme Customization
              </p>
            </div>
          </div>
          </ScrollReveal>
        </div>

        {/* Bottom Stats */}
        <ScrollReveal direction="bottom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-400">MERN</h3>
            <p className="text-slate-400">Stack</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-400">Shopify</h3>
            <p className="text-slate-400">Developer</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-400">BCA</h3>
            <p className="text-slate-400">Graduate</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-400">Full Stack</h3>
            <p className="text-slate-400">Developer</p>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;