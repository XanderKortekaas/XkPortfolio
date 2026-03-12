import { Routes, Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
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
      </Routes>
    </div>
  );
}

export default App;
