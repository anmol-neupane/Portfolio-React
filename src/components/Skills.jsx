import React from "react";

function Skills() {
  const skills = [
    { name: "UI/UX", level: 78 },
    { name: "React", level: 78 },
    { name: "Docker", level: 78 },
    { name: "NODEJs", level: 78 },
    { name: "Express", level: 78 },
    { name: "Mongoose", level: 78 },
  ];

  const education = [
    {
      year: "2017-2019",
      title: "Bachelors of IT",
      institution: "Punjab University",
      description:
        "I have completed my bachelors in IT from Punjab University. I have learned different fundamentals of computer science in depth level.",
    },
    {
      year: "2022-2024",
      title: "Masters of IT",
      institution: "University Of Wollongong",
      description:
        "I have completed my bachelors in IT from Punjab University. I have learned different fundamentals of computer science in depth level.",
    },
    {
      year: "2017-2019",
      title: "Bachelors of IT",
      institution: "Punjab University",
      description:
        "I have completed my bachelors in IT from Punjab University. I have learned different fundamentals of computer science in depth level.",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Education */}
          <div className="transition-all duration-1000">
            <div className="mb-12">
              <p className="text-blue-400 font-semibold text-lg mb-4">
                Qualification
              </p>
              <p className="text-white text-4xl font-bold mb-8 ">Education</p>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-2 border-blue-900 pl-6 hover:bg-blue-900 relative group transition-all duration-1000"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-0 rounded-full group-hover:scale-125 transition-all duration-300" />
                  <div className="text-white text-lg font-bold mb-2 transition-all duration-300">
                    {edu.title}
                  </div>
                  <p className="text-white">{edu.description}</p>
                  <p className="text-white bold mt-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mt-1">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div className="transition-all duration-1000 delay-300">
            <div className="mb-12">
              <p className="text-blue-400 font-semibold text-lg mb-4">Expert</p>
              <p className="text-white text-4xl font-bold mb-8">My skills</p>
            </div>
            <div className="space-y-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="text-white">
                  <p className="font-semibold mb-1">{skill.name}</p>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div
                      className=" bg-blue-500 h-4 rounded-full hover:bg-blue-300 transition-all duration300 "
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
