import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import planets from "../datas/planets";

function Planet() {
  const { planet } = useParams();
  const planetName = planets[planet].name;
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(
      `https://images-api.nasa.gov/search?q=${planet}&media_type=image&center=JPL`
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
  }, []);

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
    </article>
  );
}

export default Planet;
