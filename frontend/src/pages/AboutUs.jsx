import TeamCard from "../components/TeamCard";

function AboutUs() {
  return (
    <div className="aboutUs-container-global">
      <div className="entreprise-infos-container">
        <h1>Qui sommes nous</h1>
        <p>
          Nous sommes sommes une entrprise qui vous permettra de voyager dans
          l'espace. Depuis plus de 10 ans nous explorons l'univers grace a nos
          expert en astronomie. Notre base de donnée nous permet d'avoir des
          informations confidentielles et protégées. Nous sommes sommes une
          entrprise qui vous permettra de voyager dans l'espace. Depuis plus de
          10 ans nous explorons l'univers grace a nos expert en astronomie.
          Notre base de donnée nous permet d'avoir des informations
          confidentielles et protégées.
        </p>

        <h1>Our Mission</h1>
        <p>
          Notre mission est de vous apporter toutes les informations utiles
          pouvoir vous immerger dans cet univers . Notre mission est de vous
          apporter toutes les informations utiles pouvoir vous immerger dans cet
          univers . Notre mission est de vous apporter toutes les informations
          utiles pouvoir vous immerger dans cet univers . Notre Notre mission
          est de vous apporter toutes les informations utiles pouvoir vous
          immerger dans cet univers .
        </p>
      </div>

      <div className="team-infos-container">
        <h1>Notre équipe</h1>
        <div className="team-cards-container">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
