import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Planet from "./components/Planet";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/pages/Home" element={<Home />} />
          <Route path="/pages/Planet" element={<Planet />} />
          <Route path="/pages/AboutUs" element={<AboutUs />} />
          <Route path="/pages/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
