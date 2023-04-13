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
      <Home />
      <Planet />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
