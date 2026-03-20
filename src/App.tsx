import { Routes, Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import SkillDetail from "./components/SkillDetail";
import logo from "./assets/YE.png";

function HomePage() {
  return (
    <>
      <section id="home">
        <FrontPage logo={logo} />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar logo={logo} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/skills/:id" element={<SkillDetail />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
