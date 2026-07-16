import ScrollReveal from "../components/ScrollReveal";

const Projects = () => {
  const projects = [
    {
      title: "Client E-Commerce Platform",
      category: "MERN Stack",
      description:
        "Full-stack e-commerce platform with authentication, admin dashboard, product management, order management, and responsive design.",
      image: "/Ecommrce-website.png",
      liveUrl: "https://delhi-shoes-ecommerce.vercel.app/",
      githubUrl: "https://github.com/amanprajapati3/Delhi-Shoes-ecommerce.git",
    },
    {
      title: "Movie Book",
      category: "Full Stack",
      description:
        "Full-stack Movie plateform where user can see latest movies trailer, info, and also book ticket.",
      image: "/Movie-book.png",
      liveUrl: "https://movie-book-eta.vercel.app/",
      githubUrl: "https://github.com/amanprajapati3/MovieBook.git",
    },
    {
      title: "News Hub",
      category: "Frontend Project",
      description:
        "This is News Hub website where You can read latest news all around the world and economy with different categories.",
      image: "/NewsHub.png",
      liveUrl: "https://news-hub-swart-three.vercel.app/",
      githubUrl: "https://github.com/amanprajapati3/NewsHub.git",
    },
    {
      title: "Apex Consultancy",
      category: "Client Project",
      description:
        "Professional consultancy website focused on business growth, services, and lead generation.",
      image: "/consultancy.png",
      liveUrl: "https://consultancy-website-nu.vercel.app/",
      githubUrl: "https://github.com/amanprajapati3/Consultancy-Website",
    },
    {
      title: "Hotel Management Website",
      category: "Frontend Project",
      description:
        "Modern hotel website with room showcase, booking interface, and responsive design.",
      image: "/Hotel-management.png",
      liveUrl: "https://my-hotel-management-seven.vercel.app/",
      githubUrl: "https://github.com/amanprajapati3/HotelManagement",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-green-400 uppercase tracking-widest font-semibold">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
            A collection of full-stack applications, client projects,
            and modern web experiences built using MERN Stack,
            Shopify, and frontend technologies.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <ScrollReveal direction="bottom">
        <div
          className="
            flex
            gap-8
            overflow-x-auto
            pb-6
            snap-x
            snap-mandatory
            scrollbar-thin
            scrollbar-thumb-green-500
            scrollbar-track-slate-800
          "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                min-w-[350px]
                md:min-w-[420px]
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                overflow-hidden
                snap-start
                transition-all
                duration-300
                hover:border-green-400
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-green-500/10
              "
            >
              {/* Image Placeholder */}
              <div className=" bg-slate-800 flex items-center justify-center border-b border-slate-700">
                <img src={project.image} alt="" className="h-fit" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-green-400 text-sm font-medium">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4
                      py-2
                      bg-green-500
                      text-slate-950
                      rounded-lg
                      font-semibold
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4
                      py-2
                      border
                      border-slate-700
                      rounded-lg
                      hover:border-green-400
                      hover:text-green-400
                      transition-all
                      duration-300
                    "
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>

        {/* Bottom Text */}
        <ScrollReveal direction="left">
        <div className="text-center mt-12">
          <p className="text-slate-500">
            Scroll horizontally to explore more projects →
          </p>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;