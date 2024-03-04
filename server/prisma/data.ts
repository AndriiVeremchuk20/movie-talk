import { Hero } from '@prisma/client';

type HeroBase = Omit<Hero, 'id' | 'createdAt'>;

export const Heros: HeroBase[] = [
  {
    name: 'Mickey Mouse',
    movie: 'Fantasia',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Mickey_Mouse.png',
    genre: 'cartoon',
  },
  {
    name: 'Indiana Jones',
    movie: 'Indiana Jones and the Last Crusade',
    imageUrl:
      'https://ik.imagekit.io/dk6sqsizn/MovieTalk/SpongeBob_SquarePants.png',
    genre: 'cartoon',
  },
  {
    name: 'James Bond',
    movie: 'Agent 007 No time to die',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Daniel_Craig.png',
    genre: 'movie',
  },
  {
    name: 'Bugs Bunny',
    movie: 'Space Jam',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Bugs_Bunny.png',
    genre: 'cartoon',
  },
  {
    name: 'Harry Potter',
    movie: "Harry Potter and the Sorcerer's Stone",
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Harry_Potter.png',
    genre: 'movie',
  },
  {
    name: 'Pikachu',
    movie: 'Pokémon: The First Movie',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Pikachu.png',
    genre: 'cartoon',
  },
  {
    name: 'Maverick Mitchell',
    movie: 'Top gun Maverick',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/TopGun.png',
    genre: 'movie',
  },
  {
    name: 'Superman',
    movie: 'Superman',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Sumerman.png',
    genre: 'movie',
  },
  {
    name: 'Wonder Woman',
    movie: 'Wonder Woman',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/MsMarvel.png',
    genre: 'movie',
  },
  {
    name: 'Spider-Man',
    movie: 'Spider-Man: Into the Spider-Verse',
    imageUrl:
      'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Spider-Man_Marvel.png',
    genre: 'movie',
  },
  {
    name: 'Woody',
    movie: 'Toy Story',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Woody.png',
    genre: 'cartoon',
  },
  {
    name: 'Elsa',
    movie: 'Frozen',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Elsa.png',
    genre: 'cartoon',
  },
  {
    name: 'Batman',
    movie: 'The Dark Knight',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Batman.png',
    genre: 'movie',
  },
  {
    name: 'Shrek',
    movie: 'Shrek',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Shrek.png',
    genre: 'cartoon',
  },
  {
    name: 'Optimus Prime',
    movie: 'Transformers',
    imageUrl:
      'https://ik.imagekit.io/dk6sqsizn/MovieTalk/images__1_-removebg-preview.png',
    genre: 'movie',
  },
  {
    name: 'Thomas Shelby',
    movie: 'Stand by Me Doraemon',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/TommyShelby.png',
    genre: 'movie',
  },
  {
    name: 'Iron Man',
    movie: 'Iron Man',
    imageUrl:
      'https://ik.imagekit.io/dk6sqsizn/MovieTalk/images__2_-removebg-preview.png',
    genre: 'movie',
  },
  {
    name: 'Harley Quinn',
    movie: 'Suicide Squad',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Harleey_Queen.png',
    genre: 'movie',
  },
  {
    name: 'Deadpool',
    movie: 'Deadpool',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/DeatPool.png',
    genre: 'movie',
  },
  {
    name: 'Achilles',
    movie: 'Troy',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Achilles_Troy.png',
    genre: 'movie',
  },
  {
    name: 'Homer Simpson',
    movie: 'The Simpsons Movie',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Homer_Simpson.png',
    genre: 'cartoon',
  },
  {
    name: 'Mathayus',
    movie: 'The King of scorpions',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Matayas.png',
    genre: 'movie',
  },
  {
    name: 'Ramil',
    movie: 'Ratatuy',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Remy.png',
    genre: 'cartoon',
  },
  {
    name: 'Peter Griffin',
    movie: "Family Guy: The Freakin' Sweet Collection",
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/FamilyGuy_Peter.png',
    genre: 'cartoon',
  },
  {
    name: 'Stan Smith',
    movie: 'american dad',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Stan_Smith.png',
    genre: 'cartoon',
  },
  {
    name: 'Stewie Griffin',
    movie: "Family Guy: The Freakin' Sweet Collection",
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Stewie_Griffin.png',
    genre: 'cartoon',
  },

  {
    name: 'Olaf',
    movie: 'Frozen',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Olaf.png',
    genre: 'cartoon',
  },
  {
    name: 'Darth Vader',
    movie: 'Star Wars: Episode IV - A New Hope',
    imageUrl:
      'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Star_Wars_-_Darth_Vader.png',
    genre: 'movie',
  },
  {
    name: 'Rick Sanchez',
    movie: 'Rick and Morty',
    imageUrl:
      'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Rick_Sanchez-removebg-preview.png',
    genre: 'cartoon',
  },
  {
    name: 'Art',
    movie: 'Art clown',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Art_the_Clown.png',
    genre: 'movie',
  },
  {
    name: 'Scream',
    movie: 'scream',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Screem.png',
    genre: 'movie',
  },
  {
    name: 'Pennywise',
    movie: 'It',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/it.png',
    genre: 'movie',
  },

  {
    name: 'Gandalf',
    movie: 'The Lord of the Rings: The Fellowship of the Ring',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Gandalf.png',
    genre: 'movie',
  },
  {
    name: 'Jack Sparrow',
    movie: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Jack_Sparrow.png',
    genre: 'movie',
  },
  {
    name: 'Twilight Sparkle',
    movie: 'My Little Pony: The Movie',
    imageUrl:
      'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Princess_Twilight_Sparkle.png',
    genre: 'cartoon',
  },
  {
    name: 'Pinkie Pie',
    movie: 'My Little Pony: The Movie',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Pinkie_Pie.png',
    genre: 'cartoon',
  },
  {
    name: 'Po',
    movie: 'Panda kung fu',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Po.png',
    genre: 'cartoon',
  },
  {
    name: 'Oogway',
    movie: 'Panda kung fu',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Oogway.png',
    genre: 'cartoon',
  },
  {
    name: 'Elliot Alderson',
    movie: 'Mr. Robot',
    imageUrl:
      'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Mr-Robot-removebg-preview.png',
    genre: 'movie',
  },
  {
    name: 'Ryan Gosling',
    movie: 'La La Land',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Gosling.png',
    genre: 'movie',
  },
  {
    name: 'Joker',
    movie: 'Movie Joker',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Joker.png',
    genre: 'movie',
  },
  {
    name: 'Lebowski',
    movie: 'The Big Lebowski',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Lebovki.png',
    genre: 'movie',
  },
  {
    name: 'Borat',
    movie: 'The Borat',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Borat.png',
    genre: 'movie',
  },
  {
    name: 'Forest Gump',
    movie: 'The Forest Gump',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Forest_Gamp.png',
    genre: 'movie',
  },
  {
    name: 'Billy',
    movie: 'Saw',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/saw.png',
    genre: 'movie',
  },
  {
    name: 'Derek Zoolander',
    movie: 'Zoolander',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Zoolander.png',
    genre: 'movie',
  },
  {
    name: 'Paddington',
    movie: 'The Paddington Bear',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Paddington.png',
    genre: 'movie',
  },
  {
    name: 'John Wick',
    movie: 'John Wick',
    imageUrl:
      'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Jon_Uik.png?updatedAt=1708424301154',
    genre: 'movie',
  },
  {
    name: 'Willi Wonka',
    movie: 'charlie and the chocolate factory',
    imageUrl: 'https://ik.imagekit.io/dk6sqsizn/MovieTalk/Willy_Wonka.png',
    genre: 'movie',
  },
];
