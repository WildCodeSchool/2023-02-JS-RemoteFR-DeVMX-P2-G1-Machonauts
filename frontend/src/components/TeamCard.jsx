/* eslint-disable react/prop-types */
import imgProfil from "../assets/Monaut.svg";

function TeamCard({ profil }) {
  return (
    <div className="card-machaunaut-container">
      <div className="picture-profil-container">
        <img src={imgProfil} alt="logo astrnaut" />
        <h2>
          {`${profil.firstName}    
          ${profil.lastName}`}
        </h2>
        <h3>{profil.title}</h3>
      </div>
      <div className="caracteristique-infos-container">
        <p>{profil.description}</p>
      </div>
      <div className="icons-container">
        <a href={profil.github} target="blank">
          <i className="fa-brands fa-github" />
        </a>
        <a href={profil.linkedin} target="blank">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a href={`mailto:${profil.mail}`} target="blank">
          <i className="fa-solid fa-envelope" />
        </a>
      </div>
    </div>
  );
}

export default TeamCard;
