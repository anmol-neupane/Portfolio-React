import React from "react";
function Projects() {
  const projects = [
    {
      title: "Diversity Interactive Workshop",
      description: "An engaging activity-based project on workplace diversity.",
      image: "/assets/new.jpg",
      link: "https://anmolneupane.com/",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and TailwindCSS.",
      image: "/assets/news.jpg",
      link: "https://your-link-here.com",
    },
    {
      title: "E-commerce App",
      description: "Full-stack e-commerce app with Stripe payments.",
      image: "/assets/ecommerce.jpg",
      link: "https://your-link-here.com",
    },
  ];

  return (
    <section
      id="project"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-bold text-lg uppercase tracking-wider">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold text-white">My Projects</h1>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-400/40 transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-blue-400">
                  {project.title}
                </h2>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
