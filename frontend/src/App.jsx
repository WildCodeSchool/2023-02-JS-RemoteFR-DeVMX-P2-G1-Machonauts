import Header from "./components/Header";
import Contact from "./pages/Contact";
import Planet from "./components/Planet";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Planet />
      <Contact />
    </div>
  );
}
export default App;
