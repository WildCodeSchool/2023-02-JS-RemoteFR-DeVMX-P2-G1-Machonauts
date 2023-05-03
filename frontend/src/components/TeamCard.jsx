import PropTypes from "prop-types";
import imgProfil from "../assets/Monaut.svg";

function TeamCard({
  firstName,
  lastName,
  title,
  description,
  github,
  linkedin,
  mail,
}) {
  return (
    <div className="card-machaunaut-container">
      <div className="picture-profil-container">
        <img src={imgProfil} alt="logo astronaut" />
        <h2>
          {`${firstName}    
          ${lastName}`}
        </h2>
        <h3>{title}</h3>
      </div>
      <div className="caracteristics-infos-container">
        <p>{description}</p>
      </div>
      <div className="icons-container">
        <a href={github} target="blank">
          <i className="fa-brands fa-github" />
        </a>
        <a href={linkedin} target="blank">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a href={`mailto:${mail}`} target="blank">
          <i className="fa-solid fa-envelope" />
        </a>
      </div>
    </div>
  );
}

TeamCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
};
export default TeamCard;
