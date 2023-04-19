import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/planet/mercury">
        <img
          src="../src/assets/planets-surface/mercury.jpg"
          className="mercury"
          alt="Mercure"
        />
      </Link>
      <Link to="/planet/venus">
        <img
          src="../src/assets/planets-surface/venus.jpg"
          className="venus"
          alt="Venus"
        />
      </Link>
      <Link to="/planet/earth">
        <img
          src="../src/assets/planets-surface/earth.jpg"
          className="earth"
          alt="Terre"
        />
      </Link>
      <Link to="/planet/mars">
        <img
          src="../src/assets/planets-surface/mars.jpg"
          className="mars"
          alt="Mars"
        />
      </Link>
      <Link to="/planet/jupiter">
        <img
          src="../src/assets/planets-surface/jupiter.jpg"
          className="jupiter"
          alt="Jupiter"
        />
      </Link>
      <Link to="/planet/saturn">
        <img
          src="../src/assets/planets-surface/saturn.jpg"
          className="saturne"
          alt="Saturne"
        />
      </Link>
      <Link to="/planet/uranus">
        <img
          src="../src/assets/planets-surface/uranus.jpg"
          className="uranus"
          alt="Uranus"
        />
      </Link>
      <Link to="/planet/neptune">
        <img
          src="../src/assets/planets-surface/neptune.jpg"
          className="neptune"
          alt="Neptune"
        />
      </Link>
    </div>
  );
}

export default Home;
