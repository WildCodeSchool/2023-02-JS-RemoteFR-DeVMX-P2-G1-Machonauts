import { useParams } from "react-router-dom";
import planets from "../datas/planets";

function Planet() {
  const { planet } = useParams();
  const planetName = planets[planet].name;
  console.info(planets);
  return (
    <article className={`planet ${planet}`}>
      <h1>
        <img src="/src/assets/earth.png" alt="" /> {planetName}
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
      <ul>
        <li>
          <img src="/src/assets/earth-picture.jpg" alt="" />
        </li>
        <li>
          <img src="/src/assets/earth-picture.jpg" alt="" />
        </li>
        <li>
          <img src="/src/assets/earth-picture.jpg" alt="" />
        </li>
        <li>
          <img src="/src/assets/earth-picture.jpg" alt="" />
        </li>
        <li>
          <img src="/src/assets/earth-picture.jpg" alt="" />
        </li>
        <li>
          <img src="/src/assets/earth-picture.jpg" alt="" />
        </li>
      </ul>
    </article>
  );
}

export default Planet;
