import profiles from "../datas/data-infos-profiles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";

function About() {
  return (
    <>
      <Header />
      <div className="about-container-global">
        <div className="entreprise-infos-container">
          <h1>Qui sommes-nous&nbsp;?</h1>
          <p>
            SpaceMX est une société innovante spécialisée dans la création de
            sites web axés sur l'espace. Fondée par des experts en technologie
            et en astronautique, la société se consacre à la promotion et à
            l'exploration de l'espace à travers une plateforme numérique unique.
            Leur site propose une expérience immersive et interactive pour les
            passionnés d'astronomie, les amateurs de sciences spatiales, ainsi
            que pour les éducateurs et les étudiants. En fournissant des
            informations précises et fiables sur l'univers, SpaceMX vise à
            inspirer la prochaine génération de scientifiques et d'explorateurs
            de l'espace.
          </p>
        </div>

        <div className="team-infos-container">
          <h1>Notre équipe</h1>
          <div className="team-cards-container">
            {profiles.map((profile) => {
              return (
                <TeamCard
                  key={profile.id}
                  firstName={profile.firstName}
                  lastName={profile.lastName}
                  title={profile.title}
                  description={profile.description}
                  github={profile.github}
                  linkedin={profile.linkedin}
                  mail={profile.mail}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
