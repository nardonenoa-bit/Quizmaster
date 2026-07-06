import type { CategoryId, Difficulty, Question } from '../types'

let counter = 0

function q(
  category: CategoryId,
  difficulty: Difficulty,
  question: string,
  choices: string[],
  correctIndex: number,
  explanation: string,
  source?: string
): Question {
  counter += 1
  return {
    id: `q-${String(counter).padStart(3, '0')}`,
    category,
    difficulty,
    question,
    choices,
    correctIndex,
    explanation,
    source,
    createdAt: '2026-01-01',
  }
}

export const QUESTIONS: Question[] = [
  // ---------- HISTOIRE ----------
  q('histoire', 'facile', 'Quelle guerre mondiale a débuté en 1939 ?', ['Première Guerre mondiale', 'Seconde Guerre mondiale', 'Guerre de Corée', 'Guerre du Vietnam'], 1, 'La Seconde Guerre mondiale a débuté le 1er septembre 1939 avec l\'invasion de la Pologne.'),
  q('histoire', 'facile', 'Qui a été couronné empereur des Français en 1804 ?', ['Louis XIV', 'Napoléon Bonaparte', 'Charlemagne', 'Louis XVI'], 1, 'Napoléon Bonaparte s\'est couronné empereur à Notre-Dame de Paris en décembre 1804.'),
  q('histoire', 'facile', 'En quelle année a eu lieu la prise de la Bastille ?', ['1789', '1799', '1804', '1815'], 0, 'La prise de la Bastille, le 14 juillet 1789, marque le début de la Révolution française.'),
  q('histoire', 'facile', 'Quel mur emblématique est tombé en 1989 ?', ['Le mur de Berlin', 'La Grande Muraille', 'Le mur d\'Hadrien', 'Le mur des Lamentations'], 0, 'La chute du mur de Berlin le 9 novembre 1989 a marqué la fin de la guerre froide en Europe.'),
  q('histoire', 'moyen', 'Quelle civilisation a construit les pyramides de Gizeh ?', ['Les Mayas', 'Les Égyptiens', 'Les Romains', 'Les Perses'], 1, 'Les pyramides de Gizeh ont été édifiées par les anciens Égyptiens il y a environ 4500 ans.'),
  q('histoire', 'moyen', 'Qui a été le premier président des États-Unis ?', ['Thomas Jefferson', 'Abraham Lincoln', 'George Washington', 'John Adams'], 2, 'George Washington a été investi premier président des États-Unis en 1789.'),
  q('histoire', 'moyen', 'En quelle année Christophe Colomb a-t-il atteint l\'Amérique ?', ['1492', '1520', '1453', '1600'], 0, 'Christophe Colomb accoste dans les Caraïbes en 1492, pensant avoir atteint les Indes.'),
  q('histoire', 'moyen', 'Quel traité a officiellement mis fin à la Première Guerre mondiale ?', ['Le traité de Versailles', 'Le traité de Rome', 'Le traité de Maastricht', 'Le traité de Vienne'], 0, 'Le traité de Versailles, signé en 1919, a scellé la fin de la Première Guerre mondiale.'),
  q('histoire', 'difficile', 'En quelle année a eu lieu la révolution d\'Octobre en Russie ?', ['1905', '1917', '1922', '1929'], 1, 'La révolution d\'Octobre, menée par les bolcheviks, a eu lieu en 1917.'),
  q('histoire', 'difficile', 'Qui dirigeait l\'État français pendant le régime de Vichy ?', ['Charles de Gaulle', 'Georges Clemenceau', 'Philippe Pétain', 'Léon Blum'], 2, 'Philippe Pétain a dirigé le régime de Vichy de 1940 à 1944.'),
  q('histoire', 'difficile', 'Quelle bataille de 1815 a scellé la défaite définitive de Napoléon ?', ['Austerlitz', 'Waterloo', 'Trafalgar', 'Iéna'], 1, 'La bataille de Waterloo, en juin 1815, a mis fin définitivement au règne de Napoléon.'),
  q('histoire', 'difficile', 'En quelle année le Japon a-t-il capitulé, mettant fin à la Seconde Guerre mondiale ?', ['1943', '1944', '1945', '1946'], 2, 'Le Japon capitule en août 1945, après les bombardements d\'Hiroshima et Nagasaki.'),

  // ---------- GEOGRAPHIE ----------
  q('geographie', 'facile', 'Quelle est la capitale de la France ?', ['Lyon', 'Marseille', 'Paris', 'Toulouse'], 2, 'Paris est la capitale de la France depuis des siècles.'),
  q('geographie', 'facile', 'Quel est le plus grand océan du monde ?', ['Atlantique', 'Indien', 'Arctique', 'Pacifique'], 3, 'L\'océan Pacifique couvre environ un tiers de la surface du globe.'),
  q('geographie', 'facile', 'Quel est le plus long fleuve du monde ?', ['Le Nil', 'Le Danube', 'Le Mississippi', 'Le Rhin'], 0, 'Le Nil, en Afrique, est généralement considéré comme le plus long fleuve du monde.'),
  q('geographie', 'facile', 'Quelle est la capitale de l\'Italie ?', ['Milan', 'Venise', 'Rome', 'Naples'], 2, 'Rome est la capitale de l\'Italie et abrite le Vatican en son sein.'),
  q('geographie', 'moyen', 'Quel pays possède la plus grande superficie au monde ?', ['Chine', 'Canada', 'Russie', 'États-Unis'], 2, 'La Russie s\'étend sur plus de 17 millions de km², ce qui en fait le plus grand pays au monde.'),
  q('geographie', 'moyen', 'Quelle chaîne de montagnes sépare traditionnellement l\'Europe de l\'Asie ?', ['Les Alpes', 'L\'Oural', 'Les Carpates', 'Le Caucase'], 1, 'La chaîne de l\'Oural, en Russie, marque la frontière conventionnelle entre Europe et Asie.'),
  q('geographie', 'moyen', 'Quel est le plus grand désert chaud du monde ?', ['Le Kalahari', 'Le Gobi', 'Le Sahara', 'L\'Atacama'], 2, 'Le Sahara, en Afrique du Nord, est le plus grand désert chaud du monde.'),
  q('geographie', 'moyen', 'Quelle mer borde la Grèce à l\'est ?', ['La mer Noire', 'La mer Égée', 'La mer Adriatique', 'La mer Rouge'], 1, 'La mer Égée sépare la Grèce continentale de la Turquie.'),
  q('geographie', 'difficile', 'Quelle est la capitale de l\'Australie ?', ['Sydney', 'Melbourne', 'Canberra', 'Perth'], 2, 'Canberra, et non Sydney, est la capitale officielle de l\'Australie.'),
  q('geographie', 'difficile', 'Quel est le point culminant du continent africain ?', ['Le mont Kenya', 'Le Kilimandjaro', 'Le Toubkal', 'Le Ras Dashen'], 1, 'Le Kilimandjaro, en Tanzanie, culmine à environ 5895 mètres.'),
  q('geographie', 'difficile', 'Quel détroit sépare l\'Europe de l\'Afrique ?', ['Le détroit de Gibraltar', 'Le détroit de Béring', 'Le Bosphore', 'Le détroit de Malacca'], 0, 'Le détroit de Gibraltar relie la mer Méditerranée à l\'océan Atlantique.'),
  q('geographie', 'difficile', 'Quel pays compte le plus grand nombre de fuseaux horaires grâce à ses territoires d\'outre-mer ?', ['Les États-Unis', 'La Russie', 'La France', 'Le Royaume-Uni'], 2, 'Grâce à ses territoires ultramarins, la France couvre 12 fuseaux horaires, un record mondial.'),

  // ---------- SCIENCES ----------
  q('sciences', 'facile', 'Quelle planète est surnommée la planète rouge ?', ['Vénus', 'Mars', 'Jupiter', 'Saturne'], 1, 'Mars doit sa couleur rouge à l\'oxyde de fer présent sur son sol.'),
  q('sciences', 'facile', 'Quel gaz les plantes absorbent-elles principalement lors de la photosynthèse ?', ['L\'oxygène', 'L\'azote', 'Le dioxyde de carbone', 'L\'hydrogène'], 2, 'Les plantes captent le CO2 et le transforment en énergie grâce à la lumière du soleil.'),
  q('sciences', 'facile', 'Combien d\'os compte le corps humain adulte ?', ['186', '206', '226', '246'], 1, 'Le squelette humain adulte compte 206 os.'),
  q('sciences', 'facile', 'Quel organe pompe le sang dans tout le corps ?', ['Le foie', 'Le cœur', 'Le poumon', 'Le rein'], 1, 'Le cœur est un muscle qui pompe le sang à travers tout le système circulatoire.'),
  q('sciences', 'moyen', 'Quel scientifique a formulé la théorie de la relativité ?', ['Isaac Newton', 'Niels Bohr', 'Albert Einstein', 'Max Planck'], 2, 'Albert Einstein a publié la relativité restreinte en 1905 puis la relativité générale en 1915.'),
  q('sciences', 'moyen', 'Quel est le symbole chimique de l\'or ?', ['Or', 'Au', 'Ag', 'Fe'], 1, 'Le symbole Au vient du latin "aurum", qui signifie or.'),
  q('sciences', 'moyen', 'Quelle est la vitesse approximative de la lumière dans le vide ?', ['150 000 km/s', '300 000 km/s', '450 000 km/s', '600 000 km/s'], 1, 'La lumière se déplace dans le vide à environ 299 792 km par seconde.'),
  q('sciences', 'moyen', 'Quel physicien est associé à la loi de la gravitation universelle ?', ['Galilée', 'Isaac Newton', 'Kepler', 'Copernic'], 1, 'Isaac Newton a formulé la loi de la gravitation universelle au XVIIe siècle.'),
  q('sciences', 'difficile', 'Quelle particule porte la charge électrique négative dans un atome ?', ['Le proton', 'Le neutron', 'L\'électron', 'Le photon'], 2, 'L\'électron gravite autour du noyau et porte une charge négative.'),
  q('sciences', 'difficile', 'Comment nomme-t-on le processus de division cellulaire propre à la reproduction sexuée ?', ['La mitose', 'La méiose', 'La mutation', 'L\'osmose'], 1, 'La méiose produit des cellules reproductrices à moitié de matériel génétique.'),
  q('sciences', 'difficile', 'Quelle unité mesure la fréquence d\'une onde ?', ['Le watt', 'Le volt', 'Le hertz', 'L\'ampère'], 2, 'Le hertz (Hz) exprime le nombre de cycles par seconde d\'un phénomène périodique.'),
  q('sciences', 'difficile', 'Quel scientifique a découvert la radioactivité naturelle en 1896 ?', ['Marie Curie', 'Henri Becquerel', 'Ernest Rutherford', 'Niels Bohr'], 1, 'Henri Becquerel a découvert la radioactivité naturelle, avant que Marie et Pierre Curie n\'approfondissent le phénomène.'),

  // ---------- SPORT ----------
  q('sport', 'facile', 'Tous les combien d\'années ont lieu les Jeux olympiques d\'été ?', ['2 ans', '3 ans', '4 ans', '5 ans'], 2, 'Les Jeux olympiques d\'été se tiennent tous les 4 ans depuis 1896.'),
  q('sport', 'facile', 'Combien de joueurs une équipe de football aligne-t-elle sur le terrain ?', ['9', '10', '11', '12'], 2, 'Une équipe de football compte 11 joueurs sur le terrain, dont un gardien.'),
  q('sport', 'facile', 'Dans quel sport joue-t-on avec un club sur un green ?', ['Le tennis', 'Le golf', 'Le cricket', 'Le hockey'], 1, 'Le golf se joue avec des clubs pour envoyer une balle dans des trous successifs.'),
  q('sport', 'facile', 'Dans quel pays le tennis moderne est-il né ?', ['La France', 'L\'Angleterre', 'Les États-Unis', 'L\'Espagne'], 1, 'Le tennis moderne est né en Angleterre à la fin du XIXe siècle.'),
  q('sport', 'moyen', 'Combien de sets faut-il remporter pour gagner un match en Grand Chelem messieurs ?', ['2 sur 3', '3 sur 5', '4 sur 7', '1 set unique'], 1, 'Les tournois du Grand Chelem masculins se jouent au meilleur des 5 sets.'),
  q('sport', 'moyen', 'Quel pays a remporté la Coupe du monde de football 2018 ?', ['L\'Allemagne', 'Le Brésil', 'La France', 'La Croatie'], 2, 'La France a remporté sa deuxième étoile en battant la Croatie en finale en 2018.'),
  q('sport', 'moyen', 'Dans quelle discipline évolue Lewis Hamilton ?', ['Le MotoGP', 'La Formule 1', 'Le rallye', 'Le karting professionnel'], 1, 'Lewis Hamilton est un pilote britannique de Formule 1, multiple champion du monde.'),
  q('sport', 'moyen', 'Combien de temps dure un match de rugby à XV hors prolongations ?', ['70 minutes', '80 minutes', '90 minutes', '60 minutes'], 1, 'Un match de rugby à XV dure 80 minutes, en deux mi-temps de 40 minutes.'),
  q('sport', 'difficile', 'En quelle année la France a-t-elle remporté sa première Coupe du monde de football ?', ['1994', '1998', '2002', '2006'], 1, 'La France a remporté sa première Coupe du monde à domicile en 1998.'),
  q('sport', 'difficile', 'Quel athlète détient le record du monde du 100 mètres masculin ?', ['Carl Lewis', 'Usain Bolt', 'Justin Gatlin', 'Tyson Gay'], 1, 'Usain Bolt a établi le record du monde du 100m en 9,58 secondes en 2009.'),
  q('sport', 'difficile', 'Dans quel sport pratique-t-on un smash et un revers avec un volant ?', ['Le tennis de table', 'Le squash', 'Le badminton', 'Le padel'], 2, 'Le badminton se joue avec un volant et une raquette légère.'),
  q('sport', 'difficile', 'Quelle ville a accueilli les Jeux olympiques d\'été de 2016 ?', ['Tokyo', 'Londres', 'Rio de Janeiro', 'Pékin'], 2, 'Rio de Janeiro a accueilli les Jeux olympiques d\'été en 2016, une première en Amérique du Sud.'),

  // ---------- CINEMA ----------
  q('cinema', 'facile', 'Qui a réalisé la saga Star Wars originale ?', ['Steven Spielberg', 'George Lucas', 'James Cameron', 'Ridley Scott'], 1, 'George Lucas a créé et réalisé les premiers films de la saga Star Wars.'),
  q('cinema', 'facile', 'Quel film d\'animation met en scène un lion nommé Simba ?', ['Madagascar', 'Le Roi Lion', 'Kung Fu Panda', 'Zootopie'], 1, 'Le Roi Lion, sorti en 1994, raconte l\'histoire du jeune lion Simba.'),
  q('cinema', 'facile', 'Quel acteur incarne Iron Man dans l\'univers Marvel ?', ['Chris Evans', 'Chris Hemsworth', 'Robert Downey Jr.', 'Mark Ruffalo'], 2, 'Robert Downey Jr. a incarné Tony Stark / Iron Man de 2008 à 2019.'),
  q('cinema', 'facile', 'Quelle série met en scène les familles Stark et Lannister ?', ['Vikings', 'Game of Thrones', 'The Crown', 'The Witcher'], 1, 'Game of Thrones, adaptée des romans de George R. R. Martin, oppose plusieurs grandes familles.'),
  q('cinema', 'moyen', 'Qui a réalisé le film Titanic sorti en 1997 ?', ['Steven Spielberg', 'James Cameron', 'Peter Jackson', 'Ron Howard'], 1, 'James Cameron a réalisé Titanic, l\'un des plus grands succès du box-office mondial.'),
  q('cinema', 'moyen', 'Quel film a remporté l\'Oscar du meilleur film en 2020 ?', ['1917', 'Joker', 'Parasite', 'Once Upon a Time in Hollywood'], 2, 'Parasite, du réalisateur sud-coréen Bong Joon-ho, a marqué l\'histoire des Oscars.'),
  q('cinema', 'moyen', 'Dans quelle ville se déroule principalement la série Friends ?', ['Los Angeles', 'Chicago', 'New York', 'Boston'], 2, 'Friends se déroule principalement à New York, autour d\'un groupe d\'amis.'),
  q('cinema', 'moyen', 'Quel réalisateur est connu pour Pulp Fiction et Kill Bill ?', ['Martin Scorsese', 'Quentin Tarantino', 'David Fincher', 'Guy Ritchie'], 1, 'Quentin Tarantino est reconnu pour son style narratif non linéaire et ses dialogues percutants.'),
  q('cinema', 'difficile', 'Quel film de 1941, réalisé par Orson Welles, est souvent cité parmi les plus grands de l\'histoire ?', ['Casablanca', 'Citizen Kane', 'La Splendeur des Amberson', 'Rebecca'], 1, 'Citizen Kane, réalisé et interprété par Orson Welles, est un jalon majeur du cinéma.'),
  q('cinema', 'difficile', 'Quel acteur français a incarné le tueur solitaire dans le film Léon ?', ['Gérard Depardieu', 'Jean Reno', 'Vincent Cassel', 'Jean Dujardin'], 1, 'Jean Reno a incarné Léon dans le film de Luc Besson sorti en 1994.'),
  q('cinema', 'difficile', 'Quel studio d\'animation japonais a produit Le Voyage de Chihiro ?', ['Toei Animation', 'Studio Ghibli', 'Madhouse', 'Sunrise'], 1, 'Le Studio Ghibli, fondé par Hayao Miyazaki, a produit ce film sorti en 2001.'),
  q('cinema', 'difficile', 'Qui a composé la musique de la trilogie Le Seigneur des Anneaux ?', ['Hans Zimmer', 'John Williams', 'Howard Shore', 'James Horner'], 2, 'Howard Shore a composé la partition emblématique de la trilogie de Peter Jackson.'),

  // ---------- MUSIQUE ----------
  q('musique', 'facile', 'Quel groupe britannique a interprété "Bohemian Rhapsody" ?', ['The Rolling Stones', 'Queen', 'Led Zeppelin', 'Pink Floyd'], 1, '"Bohemian Rhapsody" est un titre emblématique du groupe Queen sorti en 1975.'),
  q('musique', 'facile', 'Combien de cordes compte une guitare standard ?', ['4', '5', '6', '7'], 2, 'Une guitare standard, acoustique ou électrique, compte 6 cordes.'),
  q('musique', 'facile', 'Quel chanteur est surnommé le "Roi de la Pop" ?', ['Prince', 'Michael Jackson', 'Elvis Presley', 'Stevie Wonder'], 1, 'Michael Jackson est surnommé le "Roi de la Pop" grâce à son immense succès mondial.'),
  q('musique', 'facile', 'Quel instrument à clavier utilise des touches noires et blanches ?', ['La harpe', 'Le piano', 'Le violon', 'La flûte'], 1, 'Le piano possède un clavier de touches blanches et noires.'),
  q('musique', 'moyen', 'Quel groupe de Liverpool a marqué les années 1960 avec des titres comme "Let It Be" ?', ['The Rolling Stones', 'The Beatles', 'The Who', 'The Kinks'], 1, 'The Beatles, originaires de Liverpool, ont révolutionné la musique populaire dans les années 1960.'),
  q('musique', 'moyen', 'Quelle chanteuse est connue pour l\'album "21" et le titre "Someone Like You" ?', ['Adele', 'Amy Winehouse', 'Sam Smith', 'Duffy'], 0, 'Adele a connu un immense succès mondial avec son album "21" sorti en 2011.'),
  q('musique', 'moyen', 'Dans quel pays est née la musique reggae ?', ['Le Brésil', 'La Jamaïque', 'Cuba', 'Le Nigeria'], 1, 'Le reggae est né en Jamaïque à la fin des années 1960.'),
  q('musique', 'moyen', 'Quel compositeur autrichien a écrit "La Flûte enchantée" ?', ['Beethoven', 'Mozart', 'Haydn', 'Schubert'], 1, 'Wolfgang Amadeus Mozart a composé cet opéra en 1791, l\'année de sa mort.'),
  q('musique', 'difficile', 'Quel compositeur allemand a continué de composer après être devenu sourd ?', ['Bach', 'Beethoven', 'Brahms', 'Wagner'], 1, 'Ludwig van Beethoven a composé certaines de ses œuvres majeures alors qu\'il perdait l\'ouïe.'),
  q('musique', 'difficile', 'Dans quel désert californien se tient chaque année le festival Coachella ?', ['La vallée de la Mort', 'La vallée de Coachella', 'Le désert Mojave', 'Le désert de Sonora'], 1, 'Le festival Coachella se tient dans la vallée de Coachella, en Californie.'),
  q('musique', 'difficile', 'Quel compositeur français a écrit l\'opéra Carmen ?', ['Claude Debussy', 'Georges Bizet', 'Hector Berlioz', 'Camille Saint-Saëns'], 1, 'Georges Bizet a composé Carmen, créé à Paris en 1875.'),
  q('musique', 'difficile', 'Quel style musical est né à la Nouvelle-Orléans au début du XXe siècle ?', ['Le blues', 'Le jazz', 'Le rock', 'Le funk'], 1, 'Le jazz est né à la Nouvelle-Orléans, mêlant influences africaines et européennes.'),

  // ---------- LITTERATURE ----------
  q('litterature', 'facile', 'Qui a écrit "Les Misérables" ?', ['Émile Zola', 'Victor Hugo', 'Gustave Flaubert', 'Alexandre Dumas'], 1, 'Victor Hugo a publié "Les Misérables" en 1862.'),
  q('litterature', 'facile', 'Qui a créé le personnage de Harry Potter ?', ['J.K. Rowling', 'J.R.R. Tolkien', 'Roald Dahl', 'C.S. Lewis'], 0, 'J.K. Rowling a écrit la saga Harry Potter, publiée à partir de 1997.'),
  q('litterature', 'facile', 'Quel auteur français a écrit "Le Petit Prince" ?', ['Marcel Pagnol', 'Antoine de Saint-Exupéry', 'Jules Verne', 'Albert Camus'], 1, 'Antoine de Saint-Exupéry a publié "Le Petit Prince" en 1943.'),
  q('litterature', 'facile', 'Qui a écrit les aventures de Sherlock Holmes ?', ['Agatha Christie', 'Arthur Conan Doyle', 'Edgar Allan Poe', 'Wilkie Collins'], 1, 'Arthur Conan Doyle a créé le détective Sherlock Holmes à la fin du XIXe siècle.'),
  q('litterature', 'moyen', 'Quel écrivain russe a écrit "Guerre et Paix" ?', ['Fiodor Dostoïevski', 'Léon Tolstoï', 'Anton Tchekhov', 'Nikolaï Gogol'], 1, 'Léon Tolstoï a publié "Guerre et Paix" entre 1865 et 1869.'),
  q('litterature', 'moyen', 'Quel poète français a écrit le recueil "Les Fleurs du Mal" ?', ['Arthur Rimbaud', 'Charles Baudelaire', 'Paul Verlaine', 'Stéphane Mallarmé'], 1, 'Charles Baudelaire a publié "Les Fleurs du Mal" en 1857.'),
  q('litterature', 'moyen', 'Qui a écrit "1984" et "La Ferme des animaux" ?', ['Aldous Huxley', 'George Orwell', 'Ray Bradbury', 'H.G. Wells'], 1, 'George Orwell a publié ces deux romans devenus des classiques de la dystopie.'),
  q('litterature', 'moyen', 'Quel auteur a créé le détective Hercule Poirot ?', ['Arthur Conan Doyle', 'Agatha Christie', 'Georges Simenon', 'Patricia Highsmith'], 1, 'Agatha Christie a créé Hercule Poirot, apparu dans de nombreux romans policiers.'),
  q('litterature', 'difficile', 'Quel philosophe français a écrit "Le Discours de la méthode" ?', ['Blaise Pascal', 'René Descartes', 'Voltaire', 'Jean-Jacques Rousseau'], 1, 'René Descartes a publié cet ouvrage fondateur de la philosophie moderne en 1637.'),
  q('litterature', 'difficile', 'Quel romancier britannique a écrit "Sa Majesté des Mouches" ?', ['George Orwell', 'William Golding', 'Graham Greene', 'Evelyn Waugh'], 1, 'William Golding a publié ce roman en 1954, récompensé plus tard par le prix Nobel.'),
  q('litterature', 'difficile', 'Quel auteur colombien a écrit "Cent ans de solitude" ?', ['Mario Vargas Llosa', 'Gabriel García Márquez', 'Jorge Luis Borges', 'Pablo Neruda'], 1, 'Gabriel García Márquez a publié ce roman emblématique du réalisme magique en 1967.'),
  q('litterature', 'difficile', 'Quel dramaturge anglais a écrit Hamlet et Macbeth ?', ['Christopher Marlowe', 'William Shakespeare', 'Oscar Wilde', 'George Bernard Shaw'], 1, 'William Shakespeare a écrit ces deux tragédies parmi les plus célèbres du répertoire anglais.'),

  // ---------- CULTURE GENERALE MIXTE ----------
  q('culture-generale', 'facile', 'Combien de jours compte une année bissextile ?', ['364', '365', '366', '367'], 2, 'Une année bissextile compte 366 jours, avec un 29 février ajouté.'),
  q('culture-generale', 'facile', 'Quelle est la monnaie utilisée au Japon ?', ['Le won', 'Le yen', 'Le yuan', 'Le ringgit'], 1, 'Le yen japonais est la monnaie officielle du Japon.'),
  q('culture-generale', 'facile', 'Quel est le plus grand mammifère du monde ?', ['L\'éléphant d\'Afrique', 'La baleine bleue', 'Le rhinocéros blanc', 'La girafe'], 1, 'La baleine bleue est le plus grand animal connu ayant jamais existé.'),
  q('culture-generale', 'facile', 'Quelle est la langue officielle du Brésil ?', ['L\'espagnol', 'Le portugais', 'Le français', 'L\'italien'], 1, 'Le Brésil est le seul grand pays d\'Amérique du Sud dont la langue officielle est le portugais.'),
  q('culture-generale', 'moyen', 'Quelle théorie explique l\'expansion de l\'univers depuis un état initial extrêmement dense ?', ['La théorie des cordes', 'Le Big Bang', 'La relativité générale', 'La théorie du multivers'], 1, 'Le Big Bang est le modèle cosmologique décrivant l\'expansion de l\'univers depuis 13,8 milliards d\'années.'),
  q('culture-generale', 'moyen', 'Combien de temps met environ la Terre à faire le tour du Soleil ?', ['30 jours', '180 jours', '365 jours', '500 jours'], 2, 'La Terre effectue une révolution complète autour du Soleil en environ 365,25 jours.'),
  q('culture-generale', 'moyen', 'Quel est le plus haut sommet du monde ?', ['Le K2', 'Le mont Blanc', 'L\'Everest', 'Le Kangchenjunga'], 2, 'L\'Everest culmine à 8849 mètres, dans la chaîne de l\'Himalaya.'),
  q('culture-generale', 'moyen', 'Quelle organisation basée à Genève œuvre pour la santé mondiale ?', ['L\'ONU', 'L\'OMS', 'L\'UNESCO', 'La Croix-Rouge'], 1, 'L\'Organisation mondiale de la santé (OMS) a son siège à Genève.'),
  q('culture-generale', 'difficile', 'En quelle année l\'Homme a-t-il marché sur la Lune pour la première fois ?', ['1965', '1969', '1972', '1975'], 1, 'Neil Armstrong a posé le pied sur la Lune le 21 juillet 1969.'),
  q('culture-generale', 'difficile', 'Quel traité a instauré l\'Union européenne en 1993 ?', ['Le traité de Rome', 'Le traité de Maastricht', 'Le traité de Lisbonne', 'Le traité d\'Amsterdam'], 1, 'Le traité de Maastricht, entré en vigueur en 1993, a créé l\'Union européenne.'),
  q('culture-generale', 'difficile', 'Quel philosophe grec fut le précepteur d\'Alexandre le Grand ?', ['Socrate', 'Platon', 'Aristote', 'Épicure'], 2, 'Aristote a enseigné au jeune Alexandre le Grand à la cour de Macédoine.'),
  q('culture-generale', 'difficile', 'Quelle est la capitale administrative de l\'Afrique du Sud ?', ['Le Cap', 'Johannesburg', 'Pretoria', 'Durban'], 2, 'L\'Afrique du Sud a trois capitales ; Pretoria est le siège du pouvoir exécutif.'),

  // ---------- ECONOMIE ----------
  q('economie', 'facile', 'Quelle monnaie est utilisée par la majorité des pays de l\'Union européenne ?', ['Le franc', 'L\'euro', 'Le dollar', 'La livre'], 1, 'L\'euro est la monnaie commune de la zone euro depuis 1999 (2002 pour les pièces et billets).'),
  q('economie', 'facile', 'Que signifie le sigle PIB ?', ['Produit Intérieur Brut', 'Prix Indexé au Baril', 'Programme d\'Investissement Bancaire', 'Produit Industriel Brut'], 0, 'Le PIB mesure la richesse produite par un pays sur une période donnée.'),
  q('economie', 'facile', 'Quel secteur regroupe l\'agriculture et la pêche ?', ['Le secteur secondaire', 'Le secteur primaire', 'Le secteur tertiaire', 'Le secteur quaternaire'], 1, 'Le secteur primaire couvre les activités d\'extraction et de production de matières premières.'),
  q('economie', 'facile', 'Quelle institution fixe les taux d\'intérêt de la zone euro ?', ['Le FMI', 'La Banque centrale européenne', 'La Banque mondiale', 'L\'OCDE'], 1, 'La Banque centrale européenne (BCE) définit la politique monétaire de la zone euro.'),
  q('economie', 'moyen', 'Comment appelle-t-on une hausse générale et durable des prix ?', ['La déflation', 'La récession', 'L\'inflation', 'La stagflation'], 2, 'L\'inflation correspond à une augmentation continue du niveau général des prix.'),
  q('economie', 'moyen', 'Quel économiste est l\'auteur de "La Richesse des nations" ?', ['David Ricardo', 'Adam Smith', 'Karl Marx', 'John Stuart Mill'], 1, 'Adam Smith a publié cet ouvrage fondateur du libéralisme économique en 1776.'),
  q('economie', 'moyen', 'Quel organisme international régule les échanges commerciaux mondiaux ?', ['Le FMI', 'La Banque mondiale', 'L\'OMC', 'Le G20'], 2, 'L\'Organisation mondiale du commerce (OMC) supervise les règles du commerce international.'),
  q('economie', 'moyen', 'Que mesure l\'indice des prix à la consommation ?', ['Le taux de chômage', 'L\'évolution du coût de la vie', 'La croissance démographique', 'Le taux de change'], 1, 'Cet indice suit l\'évolution des prix d\'un panier de biens et services représentatif.'),
  q('economie', 'difficile', 'Quelle crise financière majeure a débuté en 2008 avec l\'effondrement de Lehman Brothers ?', ['La crise asiatique', 'La crise des subprimes', 'La crise de la dette grecque', 'Le krach de 1929'], 1, 'La crise des subprimes a déclenché une récession mondiale à partir de 2008.'),
  q('economie', 'difficile', 'Quel économiste britannique a théorisé l\'intervention de l\'État pour relancer l\'économie en crise ?', ['Milton Friedman', 'John Maynard Keynes', 'Friedrich Hayek', 'Joseph Schumpeter'], 1, 'John Maynard Keynes a défendu l\'intervention publique pour soutenir la demande en période de crise.'),
  q('economie', 'difficile', 'Que désigne le PIB par habitant ?', ['La dette publique divisée par la population', 'La richesse produite divisée par le nombre d\'habitants', 'Le salaire moyen national', 'Le taux d\'épargne des ménages'], 1, 'Le PIB par habitant rapporte la richesse produite au nombre d\'habitants d\'un pays.'),
  q('economie', 'difficile', 'Quelle organisation regroupe les principaux pays exportateurs de pétrole ?', ['L\'AIE', 'L\'OPEP', 'Le G7', 'L\'ALENA'], 1, 'L\'OPEP coordonne les politiques pétrolières de ses pays membres depuis 1960.'),

  // ---------- TECHNOLOGIE ----------
  q('technologie', 'facile', 'Quelle entreprise a créé l\'iPhone ?', ['Samsung', 'Apple', 'Google', 'Sony'], 1, 'Apple a lancé le premier iPhone en 2007.'),
  q('technologie', 'facile', 'Que désigne le sigle "PC" en informatique ?', ['Programme Central', 'Ordinateur personnel', 'Processeur Central', 'Port de Connexion'], 1, 'PC signifie "Personal Computer", c\'est-à-dire ordinateur personnel.'),
  q('technologie', 'facile', 'Quel moteur de recherche est le plus utilisé au monde ?', ['Bing', 'Yahoo', 'Google', 'DuckDuckGo'], 2, 'Google domine largement le marché mondial des moteurs de recherche.'),
  q('technologie', 'facile', 'Quel réseau social utilisait à l\'origine des messages appelés "tweets" ?', ['Facebook', 'Twitter (X)', 'Instagram', 'LinkedIn'], 1, 'Twitter, rebaptisé X, permettait à l\'origine de publier des messages courts appelés tweets.'),
  q('technologie', 'moyen', 'Qui a cofondé Microsoft avec Paul Allen ?', ['Steve Jobs', 'Bill Gates', 'Larry Page', 'Jeff Bezos'], 1, 'Bill Gates et Paul Allen ont fondé Microsoft en 1975.'),
  q('technologie', 'moyen', 'Que signifie le sigle "IA" en technologie ?', ['Interface Autonome', 'Intelligence Artificielle', 'Internet Avancé', 'Ingénierie Automatisée'], 1, 'L\'intelligence artificielle désigne des systèmes capables de simuler certaines capacités cognitives humaines.'),
  q('technologie', 'moyen', 'Quel langage de programmation est symbolisé par un serpent ?', ['Java', 'Python', 'Ruby', 'C++'], 1, 'Python, très populaire en science des données, tire son logo d\'un serpent stylisé.'),
  q('technologie', 'moyen', 'Quelle entreprise a développé le système d\'exploitation Android ?', ['Apple', 'Microsoft', 'Google', 'Samsung'], 2, 'Google a racheté puis développé Android, aujourd\'hui le système mobile le plus répandu.'),
  q('technologie', 'difficile', 'Quel ingénieur est crédité de l\'invention du World Wide Web en 1989 ?', ['Vint Cerf', 'Tim Berners-Lee', 'Alan Turing', 'Steve Wozniak'], 1, 'Tim Berners-Lee a inventé le World Wide Web au CERN en 1989.'),
  q('technologie', 'difficile', 'Que signifie le sigle "HTTP" ?', ['HyperText Transfer Protocol', 'High Transfer Text Protocol', 'HyperText Technical Process', 'Home Transfer Text Program'], 0, 'HTTP est le protocole qui permet le transfert de pages web sur internet.'),
  q('technologie', 'difficile', 'Quelle entreprise a réussi le premier atterrissage vertical d\'une fusée réutilisable, Falcon 9 ?', ['Blue Origin', 'SpaceX', 'NASA', 'Roscosmos'], 1, 'SpaceX a réalisé cet exploit technologique en décembre 2015.'),
  q('technologie', 'difficile', 'Quel composant d\'un ordinateur est souvent surnommé son "cerveau" ?', ['La carte graphique', 'Le processeur (CPU)', 'La RAM', 'Le disque dur'], 1, 'Le processeur (CPU) exécute les instructions et coordonne le fonctionnement de l\'ordinateur.'),
]

export function getQuestionsByCategory(category: CategoryId): Question[] {
  return QUESTIONS.filter((question) => question.category === category)
}

export function getQuestionsByCategoryAndDifficulty(
  category: CategoryId,
  difficulty: Difficulty
): Question[] {
  return QUESTIONS.filter(
    (question) => question.category === category && question.difficulty === difficulty
  )
}
