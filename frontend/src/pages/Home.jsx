import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import rocket from "../assets/rocket-logo.webp";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/planets`)
      .then((response) => response.json())
      .then((data) => setPlanets(data))
      .catch((error) => console.error(error));
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
        <div className="home">
          {planets.map((planet) => {
            const nameId = planet.name_id;
            const name = planet.title;
            return (
              <div key={nameId} className="planets-pic">
                <Link to={`/planet/${nameId}`}>
                  <img
                    src={`../src/assets/planets-surface/${nameId}.jpg`}
                    className={`planet-img ${nameId}`}
                    alt={name}
                  />
                </Link>
                <div className="planet-name">
                  <h1>{name}</h1>
                </div>
              </div>
            );
          })}
        </div>
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

export default Home;
