import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home2D from "../components/Home2D";
import Immersive from "./Immersive";
import rocket from "../assets/rocket-logo.webp";
import MobileImmersive from "./MobileImmersive";

function Home({ toggle, toggle2 }) {
  const [isVisible, setIsVisible] = useState(false);

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

      <Footer />
    </>
  );
}

Home.propTypes = {
  toggle: PropTypes.bool.isRequired,
  toggle2: PropTypes.bool.isRequired,
};

export default Home;
