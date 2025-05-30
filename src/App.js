import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Icons from "./Components/Icons";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth" section id="home">
      <Header />
      <Main />

      <section id="about" className="scroll-mt-[5rem]">
        <About />
      </section>

      <section id="stacks" className="scroll-mt-[5rem]">
        <Icons />
      </section>

      <section id="projects" className="scroll-mt-[5rem]">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-[5rem]">
        <Contact />
      </section>
    </div>
  );
}

export default App;
