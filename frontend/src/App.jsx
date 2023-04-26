import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planet from "./pages/Planet";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Rockets from "./pages/Rockets";
import Welcome from "./pages/Welcome";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/planet/:planet" element={<Planet />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/a-propos" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
