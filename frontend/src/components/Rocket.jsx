import PropTypes from "prop-types";

function Rocket({ src, description, name, alt }) {
  return (
    <div className="rocket-container">
      <img src={src} alt={alt} />
      <div className="rocket-infos-container">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
Rocket.propTypes = {
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Rocket;
