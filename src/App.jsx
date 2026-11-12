import { useState } from 'react'
import './App.css'
// import '../pages/Home.jsx';
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Skills from "./pages/Skills/Skills.jsx";

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
    </>
  )
}


export default App;
