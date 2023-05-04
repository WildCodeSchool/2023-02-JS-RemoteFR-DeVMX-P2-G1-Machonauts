import { Link } from "react-router-dom";
import mercury from "../assets/planets-surface/mercury.jpg";
import venus from "../assets/planets-surface/venus.jpg";
import earth from "../assets/planets-surface/earth.jpg";
import mars from "../assets/planets-surface/mars.jpg";
import jupiter from "../assets/planets-surface/jupiter.jpg";
import saturn from "../assets/planets-surface/saturn.jpg";
import uranus from "../assets/planets-surface/uranus.jpg";
import neptune from "../assets/planets-surface/neptune.jpg";

function Home2D() {
  return (
    <div className="home">
      <div className="planets-pic">
        <Link to="/planet/mercury">
          <img src={mercury} className="planet-img mercury" alt="Mercure" />
        </Link>
        <div className="planet-name">
          <h1>Mercure</h1>
        </div>
      </div>
      <div className="planets-pic">
        <Link to="/planet/venus">
          <img src={venus} className="planet-img venus" alt="Venus" />
        </Link>
        <div className="planet-name">
          <h1>Venus</h1>
        </div>
      </div>
      <div className="planets-pic">
        <Link to="/planet/earth">
          <img src={earth} className="planet-img earth" alt="Terre" />
        </Link>
        <div className="planet-name">
          <h1>Terre</h1>
        </div>
      </div>
      <div className="planets-pic">
        <Link to="/planet/mars">
          <img src={mars} className="planet-img mars" alt="Mars" />
        </Link>
        <div className="planet-name">
          <h1>Mars</h1>
        </div>
      </div>
      <div className="planets-pic">
        <Link to="/planet/jupiter">
          <img src={jupiter} className="planet-img jupiter" alt="Jupiter" />
        </Link>
        <div className="planet-name">
          <h1>Jupiter</h1>
        </div>
      </div>
      <div className="planets-pic">
        <Link to="/planet/saturn">
          <img src={saturn} className="planet-img saturne" alt="Saturne" />
        </Link>
        <div className="planet-name">
          <h1>Saturne</h1>
        </div>
      </div>
      <div className="planets-pic">
        <Link to="/planet/uranus">
          <img src={uranus} className="planet-img uranus" alt="Uranus" />
        </Link>
        <div className="planet-name">
          <h1>Uranus</h1>
        </div>
      </div>
      <div className="planets-pic">
        <Link to="/planet/neptune">
          <img src={neptune} className="planet-img neptune" alt="Neptune" />
        </Link>
        <div className="planet-name">
          <h1>Neptune</h1>
        </div>
      </div>
    </div>
  );
}

export default Home2D;
