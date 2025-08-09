import { ArrowRight, Github, Linkedin, Play, Youtube } from "lucide-react";
import React, { useEffect, useState } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Side */}
          <div className="space-y-6">
            <p
              className={`text-blue-400 font-semibold text-lg transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Get Ready to Start Work
            </p>

            <h1
              className={`text-5xl md:text-7xl font-black text-white leading-tight transition-all duration-700 delay-150 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              I'm <span className="text-blue-400">Developer</span> <br /> Anmol
              Neupane
            </h1>

            <p
              className={`text-gray-300 text-lg max-w-md transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              MERN stack developer passionate about crafting high-quality,
              modern solutions that align with your business goals and deliver
              real impact.
            </p>

            {/* Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center gap-2 group font-medium">
                LEARN MORE{" "}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="border-2 border-blue-600 text-white px-8 py-4 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 flex items-center gap-2 group">
                <Play className="w-5 h-5" /> PLAY VIDEO
              </button>
            </div>

            {/* Social Icons */}
            <div
              className={`flex gap-4 pt-6 transition-all duration-700 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {[Linkedin, Youtube, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative max-w-lg mx-auto min-w-[300px]">
              <img
                src="https://www.seekpng.com/png/full/38-383793_being-an-expert-in-software-development-requires-a.png"
                alt="Portrait of Anmol Neupane"
                className="w-full rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-2xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
