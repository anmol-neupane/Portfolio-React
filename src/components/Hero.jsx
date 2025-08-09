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
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-900 pt-20 relative overflow-x-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p
                className={`text-blue-400 font-semibold text-lg transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Get Ready to start Work
              </p>

              <h1
                className={`text-5xl md:text-7xl font-black text-white transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                I'm <span className="text-blue-400">Developer</span> <br />
                <span className="text-white">Anmol Neupane</span>
              </h1>

              <p
                className={`text-gray-300 text-lg leading-relaxed max-w-lg transition-all duration-1000 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Winner of Australia's most covered fashion and Technology brand,
                with Anmol more focused on clients all over the world. I help
                create more visual online experiences as well as physical ones.
              </p>
            </div>

            {/* Buttons side by side */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl font-medium hover:scale-105">
                LEARN MORE
                <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
              </button>

              <button className="border-2 border-blue-600 text-white px-8 py-4 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium flex items-center gap-2 group hover:scale-105">
                <Play className="w-5 h-5" /> PLAY VIDEO
              </button>
            </div>

            {/* Social Icons below buttons */}
            <div
              className={`flex gap-4 pt-6 transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="#"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group hover:rotate-5"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 group hover:rotate-5"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-white transition-all duration-300 group hover:rotate-5"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="w-full max-w-lg mx-auto">
                <div className="relative group">
                  <img
                    src="https://www.seekpng.com/png/full/38-383793_being-an-expert-in-software-development-requires-a.png"
                    alt="Portrait of Anmol Neupane"
                    className="w-full shadow-2xl transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-600 rounded-2xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
