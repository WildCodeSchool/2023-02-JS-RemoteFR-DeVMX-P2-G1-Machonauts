import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/pages/Planet/mercury">
        <img
          src="../src/assets/planets-surface/mercury.jpg"
          className="mercury"
          alt="Mercure"
        />
      </Link>
      <Link to="/pages/Planet/venus">
        <img
          src="../src/assets/planets-surface/venus.jpg"
          className="venus"
          alt="Venus"
        />
      </Link>
      <Link to="/pages/Planet/earth">
        <img
          src="../src/assets/planets-surface/earth.jpg"
          className="earth"
          alt="Terre"
        />
      </Link>
      <Link to="/pages/Planet/mars">
        <img
          src="../src/assets/planets-surface/mars.jpg"
          className="mars"
          alt="Mars"
        />
      </Link>
      <Link to="/pages/Planet/jupiter">
        <img
          src="../src/assets/planets-surface/jupiter.jpg"
          className="jupiter"
          alt="Jupiter"
        />
      </Link>
      <Link to="/pages/Planet/saturne">
        <img
          src="../src/assets/planets-surface/saturne.jpg"
          className="saturne"
          alt="Saturne"
        />
      </Link>
      <Link to="/pages/Planet/uranus">
        <img
          src="../src/assets/planets-surface/uranus.jpg"
          className="uranus"
          alt="Uranus"
        />
      </Link>
      <Link to="/pages/Planet/neptune">
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
