import React, { useEffect, useState } from "react";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative transition-all duration-1000">
            <div className="relative group w-full max-w-md mx-auto border-2 border-blue-500 rounded-2xl p-2 hover:border-green-400 transition-all duration-300">
              <img
                src="https://static.vecteezy.com/system/resources/previews/044/428/143/non_2x/cartoon-character-with-the-desk-working-concept-illustration-free-png.png"
                alt="Programmer"
                className="w-full rounded-xl transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-2 bg-gradient-to-tr from-green-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Floating decoration */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-red-600/20 rounded-full">
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-600/20 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 transition-all duration-1000 delay-300">
            <div className="space-y-4">
              <p className="text-blue-400 font-semibold text-lg">About Us</p>
              <h2 className="text-4xl md:text-5xl text-white font-bold">
                Why hire me for <br />{" "}
                <span className="text-blue-400 ">your next project?</span>
              </h2>
              <p className="text-blue-400 font-semibold">
                Full Stack Software Engineer
              </p>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p
                className={`text-lg transition-all duration-100 delay delay-500`}
              >
                I am a highly qualified candidate for your upcoming project,
                bringing comprehensive expertise in full-stack development and
                contemporary technologies. I am dedicated to thoroughly
                understanding your business objectives in order to deliver
                customized solutions that precisely address your requirements.
                Through clear and consistent communication, an unwavering
                commitment to quality and punctual delivery, and a continuous
                pursuit of learning and innovation, I ensure that every
                challenge is addressed with effective and innovative
                problem-solving.
              </p>
              <p className={`text-lg transition-all duration-1000 delay-700`}>
                I am committed to delivering exceptional results by combining
                technical expertise with a strong work ethic and collaboration.
                I prioritize understanding your business goals and maintain
                clear communication to ensure alignment. My focus on continuous
                improvement and adaptability enables me to proactively solve
                challenges and deliver innovative solutions.
              </p>
            </div>

            <div
              className={`grid grid-cols-2 gap-8 py-6 transition-all duration-1000 delay-500`}
            >
              <div className="group">
                <p className="text-blue-400 font-semiboldtransition-all duration-300">
                  Name
                </p>
                <p className="text-white font-semibold">Anmol Neupane</p>
                <p className="text-white font-semibold">
                  Full stack Software Engineer
                </p>
              </div>
              <div className="group">
                <p className="text-blue-400 font-semibold transition-all duration-300">
                  Location
                </p>
                <p className="text-white font-semibold">
                  Wollongong, NSW, 2500
                </p>
                <div className="group">
                  <p className="text-white font-semibold transition-all duration-300">
                    Email: anmol.neupaney@gmail.com
                  </p>
                  <p className="text-white font-semibold"></p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 transition-all duration-1000 delay-1100">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
                  Download
                </button>
                <button className="border-1 border-blue-600 text-white px-8 py-3 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium hover:scale-105">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
