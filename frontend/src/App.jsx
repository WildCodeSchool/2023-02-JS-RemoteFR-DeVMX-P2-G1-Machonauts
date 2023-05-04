import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planet from "./pages/Planet";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rockets from "./pages/Rockets";
import Welcome from "./pages/Welcome";
import ParticleBackground from "./components/ParticleBackground";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ParticleBackground />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/planet/:planet" element={<Planet />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
