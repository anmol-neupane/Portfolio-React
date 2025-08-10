import React, { useState } from "react";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Tech Solutions",
    period: "Jan 2023 - Present",
    details: [
      "Developed responsive web applications using React and TailwindCSS.",
      "Collaborated with designers and backend teams for seamless integration.",
      "Improved page load speed by 30% through optimization.",
    ],
  },
  {
    id: 2,
    role: "Junior Software Engineer",
    company: "Innovatech",
    period: "Jun 2021 - Dec 2022",
    details: [
      "Maintained and enhanced existing React projects.",
      "Implemented unit testing using Jest and React Testing Library.",
      "Participated in Agile sprint planning and daily standups.",
    ],
  },
  {
    id: 3,
    role: "Intern Developer",
    company: "Creative Apps",
    period: "Jan 2021 - May 2021",
    details: [
      "Assisted in building UI components for mobile apps.",
      "Wrote clean, reusable code under supervision.",
      "Learned best practices in version control and code reviews.",
    ],
  },
];

export default function Experience() {
  const [selectedId, setSelectedId] = useState(null);

  const toggleDetails = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gray-900 text-white min-h-screen"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-400">
          My Experience
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map(({ id, role, company, period, details }) => (
            <div
              key={id}
              className="border border-gray-700 rounded-lg p-6 cursor-pointer hover:bg-gray-800 transition"
              onClick={() => toggleDetails(id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{role}</h3>
                  <p className="text-gray-400">{company}</p>
                </div>
                <span className="text-sm text-gray-500">{period}</span>
              </div>

              {selectedId === id && (
                <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                  {details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
