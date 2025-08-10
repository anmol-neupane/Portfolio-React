import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
