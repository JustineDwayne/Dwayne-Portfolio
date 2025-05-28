import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <About />
    </div>
  );
}

export default App;
