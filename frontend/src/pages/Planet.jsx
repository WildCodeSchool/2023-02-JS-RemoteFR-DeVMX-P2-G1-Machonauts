/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import PlanetModal from "../components/PlanetModal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import planets from "../datas/planets";
import EarthClouds from "../components/EarthClouds";

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
  const planetName = planets[planet].name;
  const planeTexture = planets[planet].texture;
  const planetDescription = planets[planet].description;
  const [currentPlanet, setCurrentPlanet] = useState(planet);
  const [characteristics, setCharacteristics] = useState({});
  const [images, setImages] = useState([]);
  const currentPlanetUCFirst =
    currentPlanet[0].toUpperCase() + currentPlanet.slice(1);
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
      `https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,${currentPlanetUCFirst}`
    )
      .then((response) => response.json())
      .then((data) => setCharacteristics(data.bodies[0]));
  }, [currentPlanet]);

  return (
    <>
      <Header />

      <article className={`planet ${planet}`}>
        <div className="planets">
          <Canvas
            camera={{
              zoom: 38,
              position: [0, 10, 50],
              fov: 76,
              near: 0.1,
              far: 1000,
            }}
          >
            <ambientLight intensity={0.4} />
            <pointLight position={[-50, 30, 60]} intensity={2} />
            <PlanetModal name={planetName} texture={planeTexture} />
            {planetName === "Terre" && <EarthClouds />}
          </Canvas>
          <h1>{planetName}</h1>
        </div>
        <p>{planetDescription}</p>
        {Object.keys(characteristics).length && (
          <>
            <section>
              <h2>Caractéristiques orbitales</h2>
              <dl>
                <dt>Demi-grand axe</dt>
                <dd>
                  {displayNumber(characteristics.semimajorAxis)}&nbsp;km
                  <span>
                    ({getAuFromKm(characteristics.semimajorAxis)}&nbsp;au)
                  </span>
                </dd>
                <dt>Aphélie</dt>
                <dd>
                  {displayNumber(characteristics.aphelion)}&nbsp;km
                  <span>({getAuFromKm(characteristics.aphelion)}&nbsp;au)</span>
                </dd>
                <dt>Périhélie</dt>
                <dd>
                  {displayNumber(characteristics.perihelion)}&nbsp;km
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
                <dd>{displayNumber(characteristics.polarRadius)}&nbsp;km</dd>
                <dt>Rayon moyen volumétrique</dt>
                <dd>{displayNumber(characteristics.meanRadius)}&nbsp;km</dd>
                <dt>Aplatissement</dt>
                <dd>{displayNumber(characteristics.flattening)}</dd>
                <dt>Volume</dt>
                <dd>
                  {displayNumber(characteristics.vol.volValue)}&nbsp;×&nbsp;10
                  <sup>{displayNumber(characteristics.vol.volExponent)}</sup>
                  &nbsp;km<sup>3</sup>
                </dd>
                <dt>Masse</dt>
                <dd>
                  {displayNumber(characteristics.mass.massValue)}&nbsp;×&nbsp;10
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
                <dt>Inclinaison de l'axe</dt>
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
      <Footer />
    </>
  );
}

export default Planet;
