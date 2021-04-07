const ACTORS = [
  `Hal Skelly`,
  `Nancy Carroll`,
  `Dan Duryea`,
  `John Wayne`,
  `Lane Chandler`,
  `Yakima Canutt`,
  `Frank Sinatra`,
  `Eleanor Parker`,
  `Kim Novak`,
  `Kim Novak`,
  `Arnold Stang`,
  `John Call`,
  `Leonard Hicks`,
  `Vincent Beck`,
  `Bill McCutcheon`,
  `Jack Mercer`,
  `Erich von Stroheim`,
  `Mary Beth Hughes`,
  `Carole Lombard`,
  `James Stewart`,
  `Tim Robbins`,
  `Morgan Freeman`,
  `William Sadler`
]

const COUNTRIES = [
  `USA`,
  `UK`,
  `China`,
  `France`,
  `Japan`,
  `Germany`,
  `Republic of Korea`,
  `Australia`,
  `India`,
  `New Zealand`,
  `Canada`,
  `Hong Kong`,
  `Italy`,
  `Spain`,
  `Russia`,
]

const WRITERS = [
  `Benjamin Glazer`,
  `Julian Johnson`,
  `Lindsley Parsons`,
  `Glenville Mareth`,
  `W. Lee Wilder`,
  `Rose Franken`,
  `Jo Swerling`,
  `Frank Darabont`
]

const DIRECTORS = [
  `Anthony Mann`,
  `Armand Schaefer`,
  `Nicholas Webster`,
  `John Cromwell`,
  `Otto Preminger`,
  `Dave Fleischer`,
  `Frank Darabont`
]

const GENRES = [
  `Action`,
  `Animation`,
  `Cartoon`,
  `Comedy`,
  `Crime`,
  `Drama`,
  `Experimental`,
  `Fantasy`,
  `Historical`,
  `Horror`,
  `Musical`,
  `Romance`,
  `Sci-Fi`,
  `Thriller`,
  `Western`,
]

const USERS = [
  `Marsha Holmes`,
  `Arfield Haines`,
  `Nathalie Bell`,
  `Iris Klein`,
  `Salim Montes`,
  `Rhiannon Pena`,
  `Mikhail Zhuravlev`,
  `Donald Trump`,
  `John Bolton`,
  `Tye Hodgson`,
  `Christie Combs`
]

const EMOTIONS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
]

const DESCRIPTIONS = [
  `Burlesque comic Ralph "Skid" Johnson, and specialty dancer Bonny Lee King, end up together on a cold, rainy night at a train station, after she 
   fails an audition and he complains about her treatment by the impresario of the show and quits. They decide to team up and apply for work with a 
   much better show on "the big wheel".`,

  `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escape from 
   lawmen is witnessed by Joseph Conlon who goes by the name of "Jones". Giving Brant the name of "Smith" Conlon, Jones gets him into his outlaw gang 
   hiding out in an abandoned mine. Brant attempts to disrupt the outlaw gang's robberies and comes closer to finding his man.`,

  `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky, with a set of drums and a new outlook on life, 
   and returns to his run-down neighborhood on the North Side of Chicago. A drug addict (the drug is never named, but heroin is strongly implied), 
   Frankie became clean in prison. On the outside, he greets friends and acquaintances. Sparrow (Arnold Stang), who runs a con selling homeless dogs, 
   clings to him like a young brother, but Schwiefka (Robert Strauss), whom Frankie used to deal for in his illegal card game, has more sinister reasons 
   for welcoming him back, as does Louie (Darren McGavin), Machine's former drug dealer.`,

  `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Martian") are watching 
   too much Earth television, most notably station KID-TV's interview with Santa Claus in his workshop at Earth's North Pole.
   Consulting the ancient 800-year-old Martian sage Chochem (a Yiddish/Hebrew word meaning "sage", though pronounced differently from the film's version), 
   they are advised that the children of Mars are growing distracted due to the society's overly rigid structure. From infancy, all their education is fed into 
   their brains through machines and they are not allowed individuality or freedom of thought.
   Chochem notes that he had seen this coming "for centuries", and says that the only way to help the children is to allow them their freedom and be allowed to 
   have fun. To do this, Mars needs a Santa Claus figure, like on Earth. Leaving Chochem's cave, the Martian leaders decide to abduct Santa Claus from Earth 
   and bring him to Mars.`,

  `In this short, Sindbad the Sailor (who is intended to be an alternate version of Popeye's old nemesis Bluto) proclaims himself, in song, to be the greatest sailor, 
   adventurer, and lover in the world and "the most remarkable, extraordinary fellow," a claim that is inadvertently challenged by Popeye as he innocently sings his usual 
   song while sailing by within earshot of Sindbad's island with Olive Oyl and J. Wellington Wimpy on board.
   Sindbad orders his huge roc to kidnap Popeye's girlfriend, Olive Oyl, and wreck Popeye's ship, forcing him and Wimpy to swim to shore."`,

  `The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion 
   (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a 
   beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with Connie, 
   the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.`,

  `John Mason (James Stewart) is a young, somewhat timid attorney in New York City. He has been doing his job well, and he has a chance of being made a partner 
   in his law firm, especially if he marries Eunice (Ruth Weston), the daughter of his employer, Judge Doolittle. However, John meets Jane (Carole Lombard) during a 
   business trip, and they fall in love and marry immediately. Eunice eventually marries another lawyer in the firm, Carter (Donald Briggs). John's mother (Lucile Watson) 
   is disappointed with his choice, and an important court trial forces him to cancel the honeymoon. He wins the case, but by that time Judge Doolittle has chosen John's 
   kowtowing coworker Carter as the new partner.
   Jane encourages John to demand a raise and a promotion, but with finances tightened by the Depression, Doolittle requires that all employees accept pay cuts. 
   After Jane has a baby, John becomes discouraged by his unpaid bills and by tension between Jane and his mother, who lives with them in their small apartment.`,

  `In 1949, Andy overhears the captain of the guards, Byron Hadley, complaining about being taxed on an inheritance and offers to help him shelter 
   the money legally. After an assault by the Sisters nearly kills Andy, Hadley beats and cripples Bogs, who is subsequently transferred to another prison. 
   Andy is not attacked again. Warden Samuel Norton meets Andy and reassigns him to the prison library to assist elderly inmate Brooks Hatlen, a front to allow 
   Andy to manage financial matters for other prison staff, guards from other prisons, and the warden himself. Andy begins writing weekly letters to the state 
   legislature requesting funds to improve the prison's decaying library.
   Brooks is paroled in 1954 after serving 50 years, but he cannot adjust to the outside world and eventually hangs himself. The legislature sends a library 
   donation that includes a recording of The Marriage of Figaro; Andy plays an excerpt over the public address system and is punished with solitary confinement. 
   After his release from solitary, Andy explains that hope is what gets him through his time, a concept that Red dismisses. In 1963, Norton begins exploiting prison 
   labor for public works, profiting by undercutting skilled labor costs and receiving bribes. Andy launders the money using the alias "Randall Stephens".`
]

const TITLES = [
  `The Dance Of Life`,
  `Sagebrush Trail`,
  `The Man With The Golden Arm`,
  `Santa Claus Conquers The Martians`,
  `Popeye The Sailor Meets Sinbad`,
  `The Great Flamarion`,
  `Made For Each Other`,
  `The Shawshank Redemption`
]

const MAX_LENGTH_DESCRIPTION = 140

const HUNDRED_YEARS = 100

const THREE_DAY_IN_MS = 1000 * 60 * 60 * 24 * 3

const POSTERS_PATH = `/src/img`

export default {ACTORS, COUNTRIES, WRITERS, DIRECTORS, GENRES, USERS, EMOTIONS, DESCRIPTIONS, MAX_LENGTH_DESCRIPTION, TITLES, POSTERS_PATH, HUNDRED_YEARS, THREE_DAY_IN_MS}