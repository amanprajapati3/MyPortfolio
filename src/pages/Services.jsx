import {
  Code2,
  ShoppingCart,
  Store,
  Layout,
  Database,
  Search,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const Services = () => {
  const services = [
    {
      title: "Full Stack Development",
      icon: <Code2 size={40} />,
      description:
        "Building scalable web applications using React.js, Node.js, Express.js, and MongoDB with modern architecture and best practices.",
    },
    {
      title: "E-Commerce Development",
      icon: <ShoppingCart size={40} />,
      description:
        "Developing feature-rich online stores with authentication, product management, cart systems, and order processing.",
    },
    {
      title: "Shopify Development",
      icon: <Store size={40} />,
      description:
        "Custom Shopify theme development, Liquid customization, section building, store optimization, and feature implementation.",
    },
    {
      title: "Frontend Development",
      icon: <Layout size={40} />,
      description:
        "Creating responsive, interactive, and user-friendly interfaces using React.js, Tailwind CSS, and modern UI techniques.",
    },
    {
      title: "API Integration",
      icon: <Database size={40} />,
      description:
        "Integrating third-party APIs, payment gateways, authentication systems, analytics tools, and backend services.",
    },
    {
      title: "SEO & Performance",
      icon: <Search size={40} />,
      description:
        "On-page SEO optimization, Google Search Console setup, Google Tag Manager integration, and website performance improvements.",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-green-400 uppercase tracking-widest font-semibold">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What I Can Build For You
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
            From full-stack web applications to Shopify stores and
            performance optimization, I help businesses create modern,
            scalable, and user-focused digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <ScrollReveal direction="right">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-8
                transition-all
                duration-300
                hover:border-green-400
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-green-500/10
              "
            >
              <div
                className="
                  text-green-400
                  mb-6
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal direction="left">
        <div className="mt-20">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">
            <h3 className="text-3xl font-bold">
              Have a Project in Mind?
            </h3>

            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Whether you need a MERN stack application, Shopify store
              customization, or a modern business website, I'm ready
              to help bring your ideas to life.
            </p>

            <a
              href="#contact"
              className="
                inline-block
                mt-8
                px-8
                py-3
                bg-green-500
                text-slate-950
                font-semibold
                rounded-lg
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                hover:shadow-green-500/30
              "
            >
              Let's Work Together
            </a>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;