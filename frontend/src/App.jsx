import { useEffect, useState } from "react";
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
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setToggle(true);
    }
  }, []);
  useEffect(() => {
    if (window.innerWidth < 1280) {
      setToggle2(true);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <button
          type="button"
          className="switch-immersive"
          onClick={() => setToggle(!toggle)}
        >
          2D / 3D
        </button>
        <button
          type="button"
          className="switch-immersive-mobile"
          onClick={() => setToggle2(!toggle2)}
        >
          2D / 3D
        </button>
        <ParticleBackground />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/home"
            element={<Home toggle={toggle} toggle2={toggle2} />}
          />
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
