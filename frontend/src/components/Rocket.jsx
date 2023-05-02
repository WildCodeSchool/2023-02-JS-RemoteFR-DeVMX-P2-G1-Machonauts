// eslint-disable-next-line react/prop-types
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

export default Rocket;
