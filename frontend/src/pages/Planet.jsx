import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import planets from "../datas/planets";

function Planet() {
  const { planet } = useParams();
  const planetName = planets[planet].name;
  const [currentPlanet, setCurrentPlanet] = useState(planet);
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
  }, [currentPlanet]);

  return (
    <article className={`planet ${planet}`}>
      <h1>
        <img src={`/src/assets/planets-surface/${planet}.jpg`} alt="" />
        {}
        {planetName}
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sed egestas dui. Ut sit amet lectus varius, dignissim eros non, viverra
        tellus. Nullam vitae consectetur nisi. Cras elementum, metus quis
        iaculis dapibus, massa odio molestie risus, condimentum pellentesque mi
        augue eget libero. Phasellus sagittis nec justo eu lacinia. Quisque
        maximus ipsum metus, porttitor sollicitudin justo accumsan sagittis.
        Vivamus quis rutrum metus. Ut sed euismod ante. Phasellus eros erat,
        hendrerit quis elit lobortis, gravida semper nunc. Praesent libero mi,
        accumsan a interdum non, ornare non risus.
      </p>
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
                  <Link to={`/pages/Planet/${anotherPlanet}`}>
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
