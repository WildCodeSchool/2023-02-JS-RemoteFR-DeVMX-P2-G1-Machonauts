import earth from "../assets/planets-surface/earth.jpg";
import mercure from "../assets/planets-surface/mercury.jpg";
import venus from "../assets/planets-surface/venus.jpg";
import mars from "../assets/planets-surface/mars.jpg";
import jupiter from "../assets/planets-surface/jupiter.jpg";
import saturne from "../assets/planets-surface/saturn.jpg";
import uranus from "../assets/planets-surface/uranus.jpg";
import neptune from "../assets/planets-surface/neptune.jpg";

const planets = {
  mercury: {
    name: "Mercure",
    description:
      "Mercure est la première planète du Système solaire par ordre d’éloignement du Soleil. Mercure est une planète tellurique, comme le sont également Vénus, la Terre et Mars. Elle est près de trois fois plus petite et presque vingt fois moins massive que la Terre mais presque aussi dense qu’elle. Sa densité remarquable — dépassée seulement par celle de la Terre, qui lui serait d’ailleurs inférieure sans l’effet de la compression gravitationnelle — est due à l’importance de son noyau métallique, qui représenterait 85 % de son rayon, contre environ 55 % pour la Terre.",
    texture: mercure,
    posX: -8,
    posText: 0.75,
    cshadow: true,
    rshadow: true,
    spinSpeed: 0.00058,
  },
  venus: {
    name: "Vénus",
    description:
      "Vénus est la deuxième planète du Système solaire par ordre d’éloignement du Soleil. Vénus est l’une des quatre planètes telluriques du Système solaire. Elle est parfois appelée la « planète sœur » de la Terre en raison des similitudes relatives de leurs diamètres, masses, proximités au Soleil et compositions. Par d’autres aspects, elle est radicalement différente de la Terre : son champ magnétique est bien plus faible et elle possède une atmosphère beaucoup plus dense, composée de dioxyde de carbone à plus de 96 %. La pression atmosphérique à la surface de la planète est ainsi 92 fois supérieure à celle de la Terre, soit environ la pression ressentie, sur Terre, à 900 mètres sous l’eau. Elle est de loin la planète la plus chaude du Système solaire — même si Mercure est plus proche du Soleil — avec une température de surface moyenne de 462 °C (735 K). La planète est enveloppée d’une couche opaque de nuages d’acide sulfurique, hautement réfléchissants pour la lumière visible, empêchant sa surface d’être vue depuis l’espace. Bien que la présence d’océans d’eau liquide à sa surface par le passé soit supposée, la surface de Vénus est un paysage désertique sec et rocheux où se déroule toujours un volcanisme. La topographie de Vénus présente peu de reliefs élevés et consiste essentiellement en de vastes plaines géologiquement très jeunes : quelques centaines de millions d’années.",
    texture: venus,
    posX: -5,
    posText: 0.6,
    cshadow: true,
    rshadow: true,
    spinSpeed: -0.0024,
  },
  earth: {
    name: "Terre",
    description:
      "Terre est la troisième planète du Système solaire par ordre d’éloignement du Soleil. Par ailleurs, elle est le seul objet céleste connu pour abriter la vie. La Terre est la planète la plus dense du Système solaire ainsi que la plus grande et massive des quatre planètes telluriques. Son enveloppe rigide — appelée la lithosphère — est divisée en différentes plaques tectoniques qui migrent de quelques centimètres par an. Environ 71 % de la surface de la planète est couverte d’eau — notamment des océans, mais aussi des lacs et rivières, constituant l’hydrosphère — et les 29 % restants sont des continents et des îles. La majeure partie des régions polaires est couverte de glace, notamment avec l’inlandsis de l’Antarctique et la banquise de l’océan Arctique. La structure interne de la Terre est géologiquement active, le noyau interne solide et le noyau externe liquide (composés tous deux essentiellement de fer) permettant notamment de générer le champ magnétique terrestre par effet dynamo et la convection du manteau terrestre (composé de roches silicatées) étant la cause de la tectonique des plaques.",
    texture: earth,
    posX: -2,
    posText: 0.5,
    cshadow: true,
    rshadow: true,
    spinSpeed: 0.01,
  },
  mars: {
    name: "Mars",
    description:
      "Mars est la quatrième planète du Système solaire par ordre d’éloignement du Soleil. C’est une planète tellurique, comme le sont Mercure, Vénus et la Terre, environ dix fois moins massive que la Terre mais dix fois plus massive que la Lune. Sa topographie présente des analogies aussi bien avec la Lune, à travers ses cratères et ses bassins d’impact, qu’avec la Terre, avec des formations d’origine tectonique et climatique telles que des volcans, des rifts, des vallées, des mesas, des champs de dunes et des calottes polaires. Le plus haut volcan du Système solaire, Olympus Mons (qui est un volcan bouclier), et le plus grand canyon, Valles Marineris, se trouvent sur Mars.",
    texture: mars,
    posX: 1,
    posText: 0.5,
    cshadow: true,
    rshadow: true,
    spinSpeed: 0.009,
  },
  jupiter: {
    name: "Jupiter",
    description:
      "Jupiter est la cinquième planète du Système solaire par ordre d’éloignement du Soleil. Elle est la plus grande par la taille et la masse devant Saturne, qui est comme elle une planète géante gazeuse. Elle a une composition similaire au Soleil, constituée principalement d’hydrogène mais aussi d’hélium pour un quart de sa masse et un dixième de son volume. Elle possède probablement un noyau rocheux composé d’éléments plus lourds mais, comme les autres planètes géantes, Jupiter n’a pas de surface solide bien définie mais plutôt un vaste manteau d’hydrogène métallique ; de petites quantités de composés tels que l’ammoniac, le méthane et l’eau sont aussi détectables. Elle connaît toujours une contraction continue de son intérieur qui génère une chaleur supérieure à celle reçue du Soleil grâce au mécanisme de Kelvin-Helmholtz. Sa rapide période de rotation estimée à 9 h 55 min implique que la planète prend la forme d’un ellipsoïde de révolution avec un renflement léger autour de l’équateur et permet de générer un important champ magnétique donnant naissance à la magnétosphère de Jupiter, la plus puissante du Système solaire. Son atmosphère extérieure est visiblement séparée en plusieurs bandes de couleurs allant du crème au brun à différentes latitudes, avec des turbulences et des tempêtes dont les vents violents atteignent 600 km/h le long de leurs frontières interactives. La Grande Tache rouge, un anticyclone géant de taille comparable à la Terre observé depuis au moins le XVIIe siècle, en est un exemple.",
    texture: jupiter,
    posX: 4,
    posText: 0.65,
    cshadow: true,
    rshadow: true,
    spinSpeed: 0.021,
  },
  saturn: {
    name: "Saturne",
    description:
      "Saturne est la sixième planète du Système solaire par ordre d’éloignement du Soleil. Elle est la deuxième plus grande par la taille et la masse après Jupiter, qui est comme elle une planète géante gazeuse. La caractéristique la plus célèbre de la planète est son système d’anneaux proéminent. Composés principalement de particules de glace et de poussières, ils sont observés pour la première fois en 1610 par Galilée et se seraient formés il y a moins de 100 millions d’années.",
    texture: saturne,
    posX: 7,
    posText: 0.7,
    cshadow: true,
    rshadow: true,
    spinSpeed: 0.02,
  },
  uranus: {
    name: "Uranus",
    description:
      "Uranus est la septième planète du Système solaire par ordre d’éloignement du Soleil. Il s’agit de la quatrième planète la plus massive du Système solaire et de la troisième plus grande par la taille. Elle est la première planète découverte à l’époque moderne avec un télescope et non connue depuis l’Antiquité. Bien qu’elle soit visible à l’œil nu, son caractère planétaire n’est alors pas identifié en raison de son très faible éclat et de son déplacement apparent dans le ciel très lent. William Herschel l’observe pour la première fois le 13 mars 1781 et la confirmation qu’il s’agit d’une planète et non d’une comète est faite pendant les mois qui suivent. Comme Jupiter et Saturne, l’atmosphère d’Uranus est composée principalement d’hydrogène et d’hélium avec des traces d’hydrocarbures. Cependant, comme Neptune, elle contient une proportion plus élevée de « glaces » au sens physique, c’est-à-dire de substances volatiles telles que l’eau, l’ammoniac et le méthane, tandis que l’intérieur de la planète est principalement composé de glaces et de roches, d’où leur nom de « géantes de glaces ». Par ailleurs, le méthane est le principal responsable de la teinte aigue-marine de la planète. Son atmosphère planétaire est la plus froide du Système solaire, avec une température minimale de 49 K (−224 °C) à la tropopause, et présente une structure nuageuse en couches.",
    texture: uranus,
    posX: 10,
    posText: 0.6,
    cshadow: true,
    rshadow: true,
    spinSpeed: -0.0133,
  },
  neptune: {
    name: "Neptune",
    description:
      "Neptune est la huitième planète du Système solaire par ordre d’éloignement du Soleil. Elle est la plus éloignée connue du Système solaire. N’étant pas visible à l’œil nu, Neptune est le premier objet céleste et la seule des huit planètes du Système solaire à avoir été découverte par déduction plutôt que par observation empirique. En effet, l’astronome français Alexis Bouvard avait noté des perturbations gravitationnelles inexpliquées sur l’orbite d’Uranus et conjecturé au début du XIXe siècle qu’une huitième planète, plus lointaine, pouvait en être la cause. Les astronomes britannique John Couch Adams en 1843 et français Urbain Le Verrier en 1846 calculèrent indépendamment la position prévue de cette hypothétique planète. Grâce aux calculs de ce dernier, elle fut finalement observée pour la première fois le 23 septembre 1846 par l’astronome prussien Johann Gottfried Galle, à un degré de la position prédite. Bien que Galle ait utilisé les calculs de Le Verrier pour découvrir la planète, la paternité de la découverte entre Adams et Le Verrier fut longtemps disputée. La planète possède également un système d’anneaux faible et fragmenté et une magnétosphère. Comme celles de Jupiter et Saturne, l’atmosphère de Neptune est composée principalement d’hydrogène et d’hélium ainsi que de traces d’hydrocarbures et peut-être d’azote, bien qu’elle contienne une proportion plus élevée de « glaces » au sens astrophysique, c’est-à-dire de substances volatiles telles que l’eau, l’ammoniac et le méthane. Cependant, comme Uranus, son intérieur est principalement composé de glaces et de roches, d’où leur nom de « géantes de glaces ». Par ailleurs, le méthane est partiellement responsable de la teinte bleue de l’atmosphère de Neptune, bien que l’origine exacte de ce bleu azur reste encore inexpliquée. De plus, contrairement à l’atmosphère brumeuse et relativement sans relief d’Uranus, l’atmosphère de Neptune présente des conditions météorologiques actives et visibles.",
    texture: neptune,
    posX: 13,
    posText: 0.7,
    cshadow: true,
    rshadow: true,
    spinSpeed: 0.0142,
  },
};

export default planets;
