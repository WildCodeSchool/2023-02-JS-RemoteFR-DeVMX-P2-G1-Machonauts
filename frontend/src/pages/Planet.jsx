import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Planet() {
  const { planet } = useParams();
  const displayNumber = (number) => {
    return number.toLocaleString("fr-FR");
  };
  const isNegativeNumber = (number) => {
    return number < 0;
  };
  const getAuFromKm = (number) => {
    return Number.parseFloat((number / 149597870.7).toFixed(3)).toLocaleString(
      "fr-FR"
    );
  };
  const getCelsiusFromKelvin = (number) => {
    return Math.round(number - 273.15);
  };
  const [isNot404, setIsNot404] = useState(false);
  const [currentPlanet, setCurrentPlanet] = useState(planet);
  const [planets, setPlanets] = useState([]);
  const [introduction, setIntroduction] = useState({});
  const [characteristics, setCharacteristics] = useState({});
  const [images, setImages] = useState([]);
  const planetName = isNot404 && introduction.title ? introduction.title : null;
  const planetDescription =
    isNot404 && introduction.description ? introduction.description : null;
  const currentPlanetUCFirst =
    currentPlanet[0].toUpperCase() + currentPlanet.slice(1);
  if (currentPlanet !== planet) setCurrentPlanet(planet);
  useEffect(() => {
    if (images) setImages([]);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/planets`)
      .then((response) => response.json())
      .then((data) => setPlanets(data))
      .catch((error) => console.error(error));
    fetch(`${import.meta.env.VITE_BACKEND_URL}/planets/${currentPlanet}`)
      .then((response) => {
        if (response.status === 404) {
          setIsNot404(false);
          return {};
        }
        setIsNot404(true);
        return response.json();
      })
      .then((data) => setIntroduction(data))
      .catch((error) => console.error(error));
    if (isNot404) {
      fetch(
        `https://images-api.nasa.gov/search?q=${currentPlanet}&media_type=image&center=JPL`
      )
        .then((response) => response.json())
        .then((data) =>
          setImages(
            data.collection.items.slice(0, 6).map((item) => {
              return {
                id: item.data[0].nasa_id,
                src: item.links[0].href,
                alt: item.data[0].description,
              };
            })
          )
        )
        .catch((error) => console.error(error));
      fetch(
        `https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,${currentPlanetUCFirst}`
      )
        .then((response) => response.json())
        .then((data) => setCharacteristics(data.bodies[0]));
    }
  }, [currentPlanet]);

  return (
    <>
      <Header />
      <article className={isNot404 ? `planet ${planet}` : "planet"}>
        {isNot404 ? (
          <>
            <h1>
              <img
                src={`/src/assets/planets-surface/${planet}.jpg`}
                alt=""
                width="330"
                height="330"
              />
              {}
              {planetName}
            </h1>
            <p>{planetDescription}</p>
            {Object.keys(characteristics).length && (
              <>
                <section>
                  <h2>Caractéristiques orbitales</h2>
                  <dl>
                    <dt>Demi-grand axe</dt>
                    <dd>
                      {displayNumber(characteristics.semimajorAxis)}&nbsp;km{" "}
                      <span>
                        ({getAuFromKm(characteristics.semimajorAxis)}&nbsp;au)
                      </span>
                    </dd>
                    <dt>Aphélie</dt>
                    <dd>
                      {displayNumber(characteristics.aphelion)}&nbsp;km{" "}
                      <span>
                        ({getAuFromKm(characteristics.aphelion)}&nbsp;au)
                      </span>
                    </dd>
                    <dt>Périhélie</dt>
                    <dd>
                      {displayNumber(characteristics.perihelion)}&nbsp;km{" "}
                      <span>
                        ({getAuFromKm(characteristics.perihelion)}&nbsp;au)
                      </span>
                    </dd>
                    <dt>Excentricité</dt>
                    <dd>{displayNumber(characteristics.eccentricity)}</dd>
                    <dt>Période de révolution</dt>
                    <dd>
                      {displayNumber(characteristics.sideralOrbit)}&nbsp;jours
                    </dd>
                    <dt>Inclinaison sur l’écliptique</dt>
                    <dd>{displayNumber(characteristics.inclination)}°</dd>
                    <dt>Nœud ascendant</dt>
                    <dd>{displayNumber(characteristics.longAscNode)}°</dd>
                    <dt>Satellites connus</dt>
                    <dd>
                      {characteristics.moons ? characteristics.moons.length : 0}
                    </dd>
                  </dl>
                </section>
                <section>
                  <h2>Caractéristiques physiques</h2>
                  <dl>
                    <dt>Rayon équatorial</dt>
                    <dd>{displayNumber(characteristics.equaRadius)}&nbsp;km</dd>
                    <dt>Rayon polaire</dt>
                    <dd>
                      {displayNumber(characteristics.polarRadius)}
                      &nbsp;km
                    </dd>
                    <dt>Rayon moyen volumétrique</dt>
                    <dd>{displayNumber(characteristics.meanRadius)}&nbsp;km</dd>
                    <dt>Aplatissement</dt>
                    <dd>{displayNumber(characteristics.flattening)}</dd>
                    <dt>Volume</dt>
                    <dd>
                      {displayNumber(characteristics.vol.volValue)}
                      &nbsp;×&nbsp;10
                      <sup>
                        {displayNumber(characteristics.vol.volExponent)}
                      </sup>
                      &nbsp;km<sup>3</sup>
                    </dd>
                    <dt>Masse</dt>
                    <dd>
                      {displayNumber(characteristics.mass.massValue)}
                      &nbsp;×&nbsp;10
                      <sup>
                        {displayNumber(characteristics.mass.massExponent)}
                      </sup>
                      &nbsp;kg
                    </dd>
                    <dt>Masse volumique globale</dt>
                    <dd>
                      {displayNumber(characteristics.density)}
                      &nbsp;t/m<sup>3</sup>
                    </dd>
                    <dt>Gravité de surface</dt>
                    <dd>
                      {displayNumber(characteristics.gravity)}
                      &nbsp;m/s<sup>2</sup>
                    </dd>
                    <dt>Vitesse de libération</dt>
                    <dd>{displayNumber(characteristics.escape)}&nbsp;m/s</dd>
                    <dt>
                      Période de rotation <span>(jour sidéral)</span>
                    </dt>
                    <dd>
                      {displayNumber(characteristics.sideralRotation)}&nbsp;h
                      {isNegativeNumber(characteristics.sideralRotation) && (
                        <span>(rétrograde)</span>
                      )}
                    </dd>
                    <dt>Inclinaison de l’axe</dt>
                    <dd>{displayNumber(characteristics.axialTilt)}°</dd>
                    <dt>
                      Température de surface <span>(à 100&nbsp;kPa)</span>
                    </dt>
                    <dd>
                      {displayNumber(characteristics.avgTemp)}&nbsp;K (
                      {getCelsiusFromKelvin(characteristics.avgTemp)}&nbsp;°C)
                    </dd>
                  </dl>
                </section>
              </>
            )}
            {images && (
              <ul>
                {images.map((image) => {
                  return (
                    <li key={image.id}>
                      <img
                        lang="en"
                        src={image.src}
                        alt={image.alt}
                        width="130"
                        height="130"
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        ) : (
          <>
            <h1>Houston&nbsp;? On a un problème&nbsp;!</h1>
            <p>La planète demandée n’a pas été trouvée.</p>
          </>
        )}
        <nav className="other-planets">
          <ul>
            {planets
              .filter((item) => item.name_id !== planet)
              .map((anotherPlanet) => {
                const nameId = anotherPlanet.name_id;
                const name = anotherPlanet.title;
                return (
                  <li key={nameId}>
                    <Link to={`/planet/${nameId}`}>{name}</Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      </article>
      <Footer />
    </>
  );
}

export default Planet;
