import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planet from "./pages/Planet";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rockets from "./pages/Rockets";
import Welcome from "./pages/Welcome";
import ParticleBackground from "./components/ParticleBackground";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ParticleBackground />
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/planet/:planet" element={<Planet />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/a-propos" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
