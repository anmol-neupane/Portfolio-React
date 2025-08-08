import { ArrowRight } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-900
   to-slate-900 pt-20 relative overflow-x-hidden"
    >
      {/*Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/*Leftcontainer */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p
              className={`text-blue-400 font-semibold text-lg transition-all duration-1000`}
            >
              Get Ready to start Work
            </p>
            <h1
              className={`text-5xl md:text-7xl font-black text-white transition-all duration-1000 delay-200`}
            >
              I'm
              <span className="text-blue-400">Developer</span> <br />
              <span className="text-white">Anmol Neupane</span>
            </h1>
            <p
              className={`text-gray-300 text-lg leading-relaxed max-w-lg transition-all duration-1000 delay-400`}
            >
              Winner of Australia's most covered fashion and Technology brand,
              with Anmol more focused on client all over the world. I help to
              make more visual online experience as well as the physical.
            </p>
            <button className="bg-blue-600 text-white px-8 py=4 rounded-lg hover:bg-green transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl font-medium hover:scale-105">
              LEARN MORE
              <ArrowRight
                className="w-5 h-5 text-white transition-transform
              group-hover:translate-x-1"
              />
            </button>
            <button className="border-2 border-slate-600 text-white px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-400 transition-all duration-300 font-medium flex items-center gap-2 group hover:scale-105">
              <play className="w-5 h-5" /> PLAY VIDEO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero; //export the component
