import Header from "../components/Header";
import Footer from "../components/Footer";
import Rocket from "../components/Rocket";
import rockets from "../datas/rockets-datas";

function Rockets() {
  return (
    <>
      <Header />
      <div className="rockets-container-global">
        <h1>LES PLUS IMPORTANTES MISSIONS SPATIALES DE LA NASA</h1>
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
      <Footer />
    </>
  );
}

export default Rockets;
