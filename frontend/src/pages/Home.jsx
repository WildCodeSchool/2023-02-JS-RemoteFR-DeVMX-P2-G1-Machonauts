import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/planet/mercury">
        <img
          src="../src/assets/planets-surface/mercury.jpg"
          className="planet-img mercury"
          alt="Mercure"
        />
      </Link>
      <Link to="/planet/venus">
        <img
          src="../src/assets/planets-surface/venus.jpg"
          className="planet-img venus"
          alt="Venus"
        />
      </Link>
      <Link to="/planet/earth">
        <img
          src="../src/assets/planets-surface/earth.jpg"
          className="planet-img earth"
          alt="Terre"
        />
      </Link>
      <Link to="/planet/mars">
        <img
          src="../src/assets/planets-surface/mars.jpg"
          className="planet-img mars"
          alt="Mars"
        />
      </Link>
      <Link to="/planet/jupiter">
        <img
          src="../src/assets/planets-surface/jupiter.jpg"
          className="planet-img jupiter"
          alt="Jupiter"
        />
      </Link>
      <Link to="/planet/saturn">
        <img
          src="../src/assets/planets-surface/saturn.jpg"
          className="planet-img saturne"
          alt="Saturne"
        />
      </Link>
      <Link to="/planet/uranus">
        <img
          src="../src/assets/planets-surface/uranus.jpg"
          className="planet-img uranus"
          alt="Uranus"
        />
      </Link>
      <Link to="/planet/neptune">
        <img
          src="../src/assets/planets-surface/neptune.jpg"
          className="planet-img neptune"
          alt="Neptune"
        />
      </Link>
    </div>
  );
}

export default Home;
