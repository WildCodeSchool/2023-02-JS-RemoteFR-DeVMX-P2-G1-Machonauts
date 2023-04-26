import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import rocket from "../assets/rocket-logo.webp";

function Home() {
  return (
    <>
      <Header />
      <div className="home-global-container">
        <Link to="../rockets">
          <div className="rocket-container">
            <img src={rocket} alt="" />
          </div>
        </Link>
        <div className="home">
          <div className="planets-pic">
            <Link to="/planet/mercury">
              <img
                src="../src/assets/planets-surface/mercury.jpg"
                className="planet-img mercury"
                alt="Mercure"
              />
            </Link>
            <div className="planet-name">
              <h1>Mercure</h1>
            </div>
          </div>
          <div className="planets-pic">
            <Link to="/planet/venus">
              <img
                src="../src/assets/planets-surface/venus.jpg"
                className="planet-img venus"
                alt="Venus"
              />
            </Link>
            <div className="planet-name">
              <h1>Venus</h1>
            </div>
          </div>
          <div className="planets-pic">
            <Link to="/planet/earth">
              <img
                src="../src/assets/planets-surface/earth.jpg"
                className="planet-img earth"
                alt="Terre"
              />
            </Link>
            <div className="planet-name">
              <h1>Terre</h1>
            </div>
          </div>
          <div className="planets-pic">
            <Link to="/planet/mars">
              <img
                src="../src/assets/planets-surface/mars.jpg"
                className="planet-img mars"
                alt="Mars"
              />
            </Link>
            <div className="planet-name">
              <h1>Mars</h1>
            </div>
          </div>
          <div className="planets-pic">
            <Link to="/planet/jupiter">
              <img
                src="../src/assets/planets-surface/jupiter.jpg"
                className="planet-img jupiter"
                alt="Jupiter"
              />
            </Link>
            <div className="planet-name">
              <h1>Jupiter</h1>
            </div>
          </div>
          <div className="planets-pic">
            <Link to="/planet/saturn">
              <img
                src="../src/assets/planets-surface/saturn.jpg"
                className="planet-img saturne"
                alt="Saturne"
              />
            </Link>
            <div className="planet-name">
              <h1>Saturne</h1>
            </div>
          </div>
          <div className="planets-pic">
            <Link to="/planet/uranus">
              <img
                src="../src/assets/planets-surface/uranus.jpg"
                className="planet-img uranus"
                alt="Uranus"
              />
            </Link>
            <div className="planet-name">
              <h1>Uranus</h1>
            </div>
          </div>
          <div className="planets-pic">
            <Link to="/planet/neptune">
              <img
                src="../src/assets/planets-surface/neptune.jpg"
                className="planet-img neptune"
                alt="Neptune"
              />
            </Link>
            <div className="planet-name">
              <h1>Neptune</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
