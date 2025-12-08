/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: App.jsx
   Version: II
   Creation: 02/06/2023
   Last modification: 11/24/2025 (Jenny Spicer)
*/

import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Awards from "../Pages/Awards";
//import Research from "../Pages/Research";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      {/* TODO: <Research /> */}
      <Awards />
      <Skills />
      {/* TODO: Blog / Game Journals */}
      <Contact />
    </>
  );
}

export default App;