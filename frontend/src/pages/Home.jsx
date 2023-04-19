function Home() {
  return (
    <div className="home">
      <div className="planets-pic">
        <a href="mercury">
          <img
            src="../src/assets/planets-surface/mercury.jpg"
            className="planet-img"
            alt="Mercure"
          />
        </a>
        <div className="planet-name">
          <h1>Mercure</h1>
        </div>
      </div>
      <div className="planets-pic">
        <a href="venus">
          <img
            src="../src/assets/planets-surface/venus.jpg"
            className="planet-img"
            alt="Venus"
          />
        </a>
        <div className="planet-name">
          <h1>Venus</h1>
        </div>
      </div>
      <div className="planets-pic">
        <a href="/pages/Planet">
          <img
            src="../src/assets/planets-surface/earth.jpg"
            className="planet-img"
            alt="Terre"
          />
        </a>
        <div className="planet-name">
          <h1>Terre</h1>
        </div>
      </div>
      <div className="planets-pic">
        <a href="mars">
          <img
            src="../src/assets/planets-surface/mars.jpg"
            className="planet-img"
            alt="Mars"
          />
        </a>
        <div className="planet-name">
          <h1>Mars</h1>
        </div>
      </div>
      <div className="planets-pic">
        <a href="jupiter">
          <img
            src="../src/assets/planets-surface/jupiter.jpg"
            className="planet-img"
            alt="Jupiter"
          />
        </a>
        <div className="planet-name">
          <h1>Jupiter</h1>
        </div>
      </div>
      <div className="planets-pic">
        <a href="saturne">
          <img
            src="../src/assets/planets-surface/saturne.jpg"
            className="planet-img"
            alt="Saturne"
          />
        </a>
        <div className="planet-name">
          <h1>Saturne</h1>
        </div>
      </div>
      <div className="planets-pic">
        <a href="uranus">
          <img
            src="../src/assets/planets-surface/uranus.jpg"
            className="planet-img"
            alt="Uranus"
          />
        </a>
        <div className="planet-name">
          <h1>Uranus</h1>
        </div>
      </div>
      <div className="planets-pic">
        <a href="neptune">
          <img
            src="../src/assets/planets-surface/neptune.jpg"
            className="planet-img"
            alt="Neptune"
          />
        </a>
        <div className="planet-name">
          <h1>Neptune</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
