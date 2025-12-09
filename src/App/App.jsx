/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: App.jsx
   Version: III
   Creation: 02/06/2023
   Last modification: 12/09/2025 (Jenny Spicer)
*/

import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Awards from "../Pages/Awards";
import Research from "../Pages/Research";
//import Blog from "../Pages/Blog";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Research />
      <Awards />
      <Skills />
      {/* TODO: Blog / Game Journals */}
      <Contact />
    </>
  );
}

export default App;