import { useState } from 'react'
import './App.css'
// import '../pages/Home.jsx';
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}


export default App;
