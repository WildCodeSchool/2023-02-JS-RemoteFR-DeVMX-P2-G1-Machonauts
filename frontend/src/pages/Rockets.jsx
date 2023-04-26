import Rocket from "../components/Rocket";
import rockets from "../datas/rockets-datas";

function Rockets() {
  return (
    <div className="rockets-container-global">
      {rockets.map((rocket) => {
        return (
          <Rocket
            id={rocket.id}
            name={rocket.name}
            description={rocket.description}
            src={rocket.src}
            alt={rocket.alt}
            key={rocket.id}
          />
        );
      })}
    </div>
  );
}

export default Rockets;
