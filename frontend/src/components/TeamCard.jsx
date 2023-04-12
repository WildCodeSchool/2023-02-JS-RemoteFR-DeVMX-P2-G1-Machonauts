import imgProfil from "../assets/Monaut.svg";

function TeamCard() {
  return (
    <div className="card-machaunaut-container">
      <div className="picture-profil-container">
        <img src={imgProfil} alt="" />
        <h1>Nicolas LOPES</h1>
        <h2>web dev de l'espace</h2>
      </div>
      <div className="caracteristique-infos-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo harum
          nulla, expedita vitae aut enim ducimus. Fugit nulla sint incidunt
          voluptatem repellat dolore repellendus voluptatum ad quo. Cum, autem
          dignissimos?
        </p>
      </div>
    </div>
  );
}
export default TeamCard;
