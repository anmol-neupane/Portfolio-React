import React from "react";

function Skills() {
  const skills = [
    { name: "UI/UX", level: 90 },
    { name: "React", level: 80 },
    { name: "Docker", level: 55 },
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "Mongoose", level: 85 },
  ];

  const education = [
    {
      year: "2017-2019",
      title: "Bachelors of IT",
      institution: "Punjab University",
      description:
        "Completed a comprehensive degree in Information Technology, mastering computer science fundamentals and software development principles.",
    },
    {
      year: "2022-2024",
      title: "Masters of IT",
      institution: "University of Wollongong",
      description:
        "Focused on advanced computing concepts, software engineering, and cutting-edge technologies to drive innovation and problem-solving.",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Section */}
          <div className="transition-all duration-700 ease-in-out">
            <div className="mb-10">
              <p className="text-blue-400 font-semibold text-lg mb-2">
                Qualification
              </p>
              <h2 className="text-white text-3xl sm:text-4xl font-bold">
                Education
              </h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border border-blue-900 rounded-lg p-4 sm:p-6 hover:bg-blue-900/30 relative group transition-all duration-300"
                >
                  <div className="absolute -left-2 top-4 w-4 h-4 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-white text-lg font-bold mb-2">
                    {edu.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-400 text-xs mb-3">{edu.year}</p>
                  <p className="text-white text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="transition-all duration-700 ease-in-out delay-150">
            <div className="mb-10">
              <p className="text-blue-400 font-semibold text-lg mb-2">
                Expertise
              </p>
              <h2 className="text-white text-3xl sm:text-4xl font-bold">
                My Skills
              </h2>
            </div>
            <div className="space-y-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="text-white">
                  <div className="flex justify-between mb-1">
                    <p className="font-semibold">{skill.name}</p>
                    <span className="text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 sm:h-4 overflow-hidden">
                    <div
                      className="bg-blue-500 h-3 sm:h-4 rounded-full transition-all duration-500 ease-in-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
