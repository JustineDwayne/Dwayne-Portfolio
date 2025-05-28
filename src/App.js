import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Icons from "./Components/Icons";
function App() {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth" section id="home">
      <Header />
      <Main />
      <About />
      <Icons />
    </div>
  );
}

export default App;
