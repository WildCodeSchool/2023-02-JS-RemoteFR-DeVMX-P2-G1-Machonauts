import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import planets from "../datas/planets";

function Planet() {
  const { planet } = useParams();
  const displayNumber = (number) => {
    return number.toLocaleString("fr-FR");
  };
  const isNegativeNumber = (number) => {
    return number < 0;
  };
  const planetName = planets[planet].name;
  const planetDescription = planets[planet].description;
  const [currentPlanet, setCurrentPlanet] = useState(planet);
  const [characteristics, setCharacteristics] = useState({});
  const [images, setImages] = useState([]);
  if (currentPlanet !== planet) setCurrentPlanet(planet);
  useEffect(() => {
    if (images) setImages([]);
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
      `https://api.le-systeme-solaire.net/rest/bodies?filter[]=id,eq,${currentPlanet}`
    )
      .then((response) => response.json())
      .then((data) => setCharacteristics(data.bodies[0]));
  }, [currentPlanet]);

  return (
    <article className={`planet ${planet}`}>
      <h1>
        <img src={`/src/assets/planets-surface/${planet}.jpg`} alt="" />
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
              <dd>{displayNumber(characteristics.semimajorAxis)}&nbsp;km</dd>
              <dt>Aphélie</dt>
              <dd>{displayNumber(characteristics.aphelion)}&nbsp;km</dd>
              <dt>Périhélie</dt>
              <dd>{displayNumber(characteristics.perihelion)}&nbsp;km</dd>
              <dt>Excentricité</dt>
              <dd>{displayNumber(characteristics.eccentricity)}</dd>
              <dt>Période de révolution</dt>
              <dd>{displayNumber(characteristics.sideralOrbit)} jours</dd>
              <dt>Inclinaison sur l’écliptique</dt>
              <dd>{displayNumber(characteristics.inclination)}°</dd>
              <dt>Nœud ascendant</dt>
              <dd>{displayNumber(characteristics.longAscNode)}°</dd>
              <dt>Satellites connus</dt>
              <dd>{characteristics.moons.length}</dd>
            </dl>
          </section>
          <section>
            <h2>Caractéristiques physiques</h2>
            <dl>
              <dt>Rayon équatorial</dt>
              <dd>{displayNumber(characteristics.equaRadius)}&nbsp;km</dd>
              <dt>Rayon polaire</dt>
              <dd>{displayNumber(characteristics.polarRadius)}&nbsp;km</dd>
              <dt>Rayon moyen volumétrique</dt>
              <dd>{displayNumber(characteristics.meanRadius)}&nbsp;km</dd>
              <dt>Aplatissement</dt>
              <dd>{displayNumber(characteristics.flattening)}</dd>
              <dt>Volume</dt>
              <dd>
                {displayNumber(characteristics.vol.volValue)} × 10
                <sup>{displayNumber(characteristics.vol.volExponent)}</sup>
                &nbsp;km<sup>3</sup>
              </dd>
              <dt>Masse</dt>
              <dd>
                {displayNumber(characteristics.mass.massValue)} × 10
                <sup>{displayNumber(characteristics.mass.massExponent)}</sup>
                &nbsp;kg
              </dd>
              <dt>Masse volumique globale</dt>
              <dd>
                {displayNumber(characteristics.density)}&nbsp;t/m<sup>3</sup>
              </dd>
              <dt>Gravité de surface</dt>
              <dd>
                {displayNumber(characteristics.gravity)}&nbsp;m/s<sup>2</sup>
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
              <dd>{displayNumber(characteristics.avgTemp)}&nbsp;K</dd>
            </dl>
          </section>
        </>
      )}
      {images && (
        <ul>
          {images.map((image) => {
            return (
              <li key={image.id}>
                <img lang="en" src={image.src} alt={image.alt} />
              </li>
            );
          })}
        </ul>
      )}
      <nav className="other-planets">
        <ul>
          {Object.keys(planets)
            .filter((item) => item !== planet)
            .map((anotherPlanet) => {
              return (
                <li key={anotherPlanet}>
                  <Link to={`/planet/${anotherPlanet}`}>
                    {planets[anotherPlanet].name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </article>
  );
}

export default Planet;
