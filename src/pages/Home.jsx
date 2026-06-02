
// Components
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import ScrollReveal from "../components/ScrollReveal";

const Home = () => {
  return (
    <>
    <div className="mt-0">
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <ScrollReveal direction="top">
          <About />
        </ScrollReveal>
      </div>
      <div id="skills">
        <ScrollReveal direction="top">
          <Skills />
        </ScrollReveal>
      </div>
      <div id="projects">
        <ScrollReveal direction="top">
          <Projects />
        </ScrollReveal>
      </div>
      <div id="services">
        <ScrollReveal direction="bottom">
          <Services />
        </ScrollReveal>
      </div>
      <div id="contact">
        <ScrollReveal direction="top">
          <Contact />
        </ScrollReveal>
      </div>
        </div>
    </>
  );
};

export default Home;