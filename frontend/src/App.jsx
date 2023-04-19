import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planet from "./pages/Planet";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/pages/Home" element={<Home />} />
          <Route path="/pages/Planet/:planet" element={<Planet />} />
          <Route path="/pages/AboutUs" element={<AboutUs />} />
          <Route path="/pages/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
