import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import AboutMe from "./components/about-me/AboutMe";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/contact-me/ContactMe";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <ContactMe /> 
      <Footer />
    </div>
  );
}

export default App;
