import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from "./components/nav";
import Landing from "./pages/landing";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
