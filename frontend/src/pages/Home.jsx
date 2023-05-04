import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home2D from "../components/Home2D";
import Immersive from "./Immersive";
import rocket from "../assets/rocket-logo.webp";
import MobileImmersive from "./MobileImmersive";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

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
    <>
      <Header />

      <div className="home-global-container">
        <div className="rocket-container-home">
          <Link to="../rockets">
            <img className="rocket-img" src={rocket} alt="rocket-draw" />
          </Link>
        </div>
        {toggle && !toggle2 && <Immersive />}
        {!toggle && !toggle2 && <Home2D />}
        {toggle2 && !toggle && <MobileImmersive />}
      </div>

      {isVisible && (
        <div className="astronaut">
          <img src="../src/assets/astronaut.svg" alt="" />
          <img src="../src/assets/astronaut-head.png" alt="" />
        </div>
      )}
      <button
        type="button"
        className="bonus-star"
        onClick={() => setIsVisible(!isVisible)}
      >
        {" "}
      </button>
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
      <Footer />
    </>
  );
}

export default Home;
