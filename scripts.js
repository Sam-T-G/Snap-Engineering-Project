/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

//manually input pokemon in internal data here from pokemondb.net
const POKEMON = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "types": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "spAtk": 65,
      "spDef": 65,
      "speed": 45
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": true,
    "image": "./assets/pokemon/bulbasaur.jpg",
    "height": "0.7 m",
    "weight": "6.9 kg",
    "eggGroups": [
      "Grass",
      "Monster"
    ],
    "flavorText": "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
    "abilities": [
      "Overgrow",
      "Chlorophyll"
    ]
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "types": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "spAtk": 80,
      "spDef": 80,
      "speed": 60
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": true,
    "image": "./assets/pokemon/ivysaur.jpg",
    "height": "1.0 m",
    "weight": "13.0 kg",
    "eggGroups": [
      "Grass",
      "Monster"
    ],
    "flavorText": "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    "abilities": [
      "Overgrow",
      "Chlorophyll"
    ]
  },
  {
    "id": 3,
    "name": "Venusaur",
    "types": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "spAtk": 100,
      "spDef": 100,
      "speed": 80
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": true,
    "image": "./assets/pokemon/venusaur.jpg",
    "height": "2.0 m",
    "weight": "100.0 kg",
    "eggGroups": [
      "Grass",
      "Monster"
    ],
    "flavorText": "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    "abilities": [
      "Overgrow",
      "Chlorophyll",
      "Thick Fat"
    ]
  },
  {
    "id": 4,
    "name": "Charmander",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "spAtk": 60,
      "spDef": 50,
      "speed": 65
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": true,
    "image": "./assets/pokemon/charmander.jpg",
    "height": "0.6 m",
    "weight": "8.5 kg",
    "eggGroups": [
      "Dragon",
      "Monster"
    ],
    "flavorText": "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
    "abilities": [
      "Blaze",
      "Solar Power"
    ]
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "spAtk": 80,
      "spDef": 65,
      "speed": 80
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": true,
    "image": "./assets/pokemon/charmeleon.jpg",
    "height": "1.1 m",
    "weight": "19.0 kg",
    "eggGroups": [
      "Dragon",
      "Monster"
    ],
    "flavorText": "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
    "abilities": [
      "Blaze",
      "Solar Power"
    ]
  },
  {
    "id": 6,
    "name": "Charizard",
    "types": [
      "Fire",
      "Flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "spAtk": 109,
      "spDef": 85,
      "speed": 100
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": true,
    "image": "./assets/pokemon/charizard.jpg",
    "height": "1.7 m",
    "weight": "90.5 kg",
    "eggGroups": [
      "Dragon",
      "Monster"
    ],
    "flavorText": "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
    "abilities": [
      "Blaze",
      "Solar Power",
      "Tough Claws"
    ]
  },
  {
    "id": 7,
    "name": "Squirtle",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "spAtk": 50,
      "spDef": 64,
      "speed": 43
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": true,
    "image": "./assets/pokemon/squirtle.jpg",
    "height": "0.5 m",
    "weight": "9.0 kg",
    "eggGroups": [
      "Monster",
      "Water 1"
    ],
    "flavorText": "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
    "abilities": [
      "Torrent",
      "Rain Dish"
    ]
  },
  {
    "id": 8,
    "name": "Wartortle",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "spAtk": 65,
      "spDef": 80,
      "speed": 58
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": true,
    "image": "./assets/pokemon/wartortle.jpg",
    "height": "1.0 m",
    "weight": "22.5 kg",
    "eggGroups": [
      "Monster",
      "Water 1"
    ],
    "flavorText": "Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.",
    "abilities": [
      "Torrent",
      "Rain Dish"
    ]
  },
  {
    "id": 9,
    "name": "Blastoise",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "spAtk": 85,
      "spDef": 105,
      "speed": 78
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": true,
    "image": "./assets/pokemon/blastoise.jpg",
    "height": "1.6 m",
    "weight": "85.5 kg",
    "eggGroups": [
      "Monster",
      "Water 1"
    ],
    "flavorText": "A brutal POKéMON with pressurized water jets on its shell. They are used for high speed tackles.",
    "abilities": [
      "Torrent",
      "Rain Dish",
      "Mega Launcher"
    ]
  },
  {
    "id": 10,
    "name": "Caterpie",
    "types": [
      "Bug"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "spAtk": 20,
      "spDef": 20,
      "speed": 45
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/caterpie.jpg",
    "height": "0.3 m",
    "weight": "2.9 kg",
    "eggGroups": [
      "Bug"
    ],
    "flavorText": "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
    "abilities": [
      "Shield Dust",
      "Run Away"
    ]
  },
  {
    "id": 11,
    "name": "Metapod",
    "types": [
      "Bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "spAtk": 25,
      "spDef": 25,
      "speed": 30
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/metapod.jpg",
    "height": "0.7 m",
    "weight": "9.9 kg",
    "eggGroups": [
      "Bug"
    ],
    "flavorText": "This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body.",
    "abilities": [
      "Shed Skin"
    ]
  },
  {
    "id": 12,
    "name": "Butterfree",
    "types": [
      "Bug",
      "Flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "spAtk": 90,
      "spDef": 80,
      "speed": 70
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/butterfree.jpg",
    "height": "1.1 m",
    "weight": "32.0 kg",
    "eggGroups": [
      "Bug"
    ],
    "flavorText": "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    "abilities": [
      "Compound Eyes",
      "Tinted Lens"
    ]
  },
  {
    "id": 13,
    "name": "Weedle",
    "types": [
      "Bug",
      "Poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "spAtk": 20,
      "spDef": 20,
      "speed": 50
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/weedle.jpg",
    "height": "0.3 m",
    "weight": "3.2 kg",
    "eggGroups": [
      "Bug"
    ],
    "flavorText": "Often found in forests, eating leaves. It has a sharp venomous stinger on its head.",
    "abilities": [
      "Poison Point",
      "Run Away"
    ]
  },
  {
    "id": 14,
    "name": "Kakuna",
    "types": [
      "Bug",
      "Poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "spAtk": 25,
      "spDef": 25,
      "speed": 35
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/kakuna.jpg",
    "height": "0.6 m",
    "weight": "10.0 kg",
    "eggGroups": [
      "Bug"
    ],
    "flavorText": "Almost incapable of moving, this POKéMON can only harden its shell to protect itself from predators.",
    "abilities": [
      "Shed Skin"
    ]
  },
  {
    "id": 15,
    "name": "Beedrill",
    "types": [
      "Bug",
      "Poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "spAtk": 45,
      "spDef": 80,
      "speed": 75
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/beedrill.jpg",
    "height": "1.0 m",
    "weight": "29.5 kg",
    "eggGroups": [
      "Bug"
    ],
    "flavorText": "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.",
    "abilities": [
      "Swarm",
      "Sniper"
    ]
  },
  {
    "id": 16,
    "name": "Pidgey",
    "types": [
      "Normal",
      "Flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "spAtk": 35,
      "spDef": 35,
      "speed": 56
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/pidgey.jpg",
    "height": "0.3 m",
    "weight": "1.8 kg",
    "eggGroups": [
      "Flying"
    ],
    "flavorText": "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
    "abilities": [
      "Keen Eye",
      "Tangled Feet",
      "Big Pecks"
    ]
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "types": [
      "Normal",
      "Flying"
    ],
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "spAtk": 50,
      "spDef": 50,
      "speed": 71
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/pidgeotto.jpg",
    "height": "1.1 m",
    "weight": "30.0 kg",
    "eggGroups": [
      "Flying"
    ],
    "flavorText": "Very protective of its sprawling territorial area, this POKéMON will fiercely peck any intruder.",
    "abilities": [
      "Keen Eye",
      "Tangled Feet",
      "Big Pecks"
    ]
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "types": [
      "Normal",
      "Flying"
    ],
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "spAtk": 70,
      "spDef": 70,
      "speed": 101
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/pidgeot.jpg",
    "height": "1.5 m",
    "weight": "39.5 kg",
    "eggGroups": [
      "Flying"
    ],
    "flavorText": "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.",
    "abilities": [
      "Keen Eye",
      "Tangled Feet",
      "Big Pecks"
    ]
  },
  {
    "id": 19,
    "name": "Rattata",
    "types": [
      "Normal"
    ],
    "stats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "spAtk": 25,
      "spDef": 35,
      "speed": 72
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/rattata.jpg",
    "height": "0.3 m",
    "weight": "3.5 kg",
    "eggGroups": [
      "Field"
    ],
    "flavorText": "Will chew on anything with its fangs. If you see one, it is certain that 40 more live in the area.",
    "abilities": [
      "Run Away",
      "Guts",
      "Hustle"
    ]
  },
  {
    "id": 20,
    "name": "Raticate",
    "types": [
      "Normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "spAtk": 50,
      "spDef": 70,
      "speed": 97
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/raticate.jpg",
    "height": "0.7 m",
    "weight": "18.5 kg",
    "eggGroups": [
      "Field"
    ],
    "flavorText": "It uses its whiskers to maintain balance. It apparently slows down if they are cut off.",
    "abilities": [
      "Run Away",
      "Guts",
      "Hustle"
    ]
  },
  {
    "id": 21,
    "name": "Spearow",
    "types": [
      "Normal",
      "Flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "spAtk": 31,
      "spDef": 31,
      "speed": 70
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/spearow.jpg",
    "height": "0.3 m",
    "weight": "2.0 kg",
    "eggGroups": [
      "Flying"
    ],
    "flavorText": "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne.",
    "abilities": [
      "Keen Eye",
      "Sniper"
    ]
  },
  {
    "id": 22,
    "name": "Fearow",
    "types": [
      "Normal",
      "Flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "spAtk": 61,
      "spDef": 61,
      "speed": 100
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/fearow.jpg",
    "height": "1.2 m",
    "weight": "38.0 kg",
    "eggGroups": [
      "Flying"
    ],
    "flavorText": "With its huge and magnificent wings, it can keep aloft without ever having to land for rest.",
    "abilities": [
      "Keen Eye",
      "Sniper"
    ]
  },
  {
    "id": 23,
    "name": "Ekans",
    "types": [
      "Poison"
    ],
    "stats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "spAtk": 40,
      "spDef": 54,
      "speed": 55
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/ekans.jpg",
    "height": "2.0 m",
    "weight": "6.9 kg",
    "eggGroups": [
      "Field",
      "Dragon"
    ],
    "flavorText": "Moves silently and stealthily. Eats the eggs of birds, such as Spearow, whole.",
    "abilities": [
      "Intimidate",
      "Shed Skin",
      "Unnerve"
    ]
  },
  {
    "id": 24,
    "name": "Arbok",
    "types": [
      "Poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "spAtk": 65,
      "spDef": 79,
      "speed": 80
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/arbok.jpg",
    "height": "3.5 m",
    "weight": "65.0 kg",
    "eggGroups": [
      "Field",
      "Dragon"
    ],
    "flavorText": "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
    "abilities": [
      "Intimidate",
      "Shed Skin",
      "Unnerve"
    ]
  },
  {
    "id": 25,
    "name": "Pikachu",
    "types": [
      "Electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "spAtk": 50,
      "spDef": 50,
      "speed": 90
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/pikachu.jpg",
    "height": "0.4 m",
    "weight": "6.0 kg",
    "eggGroups": [
      "Field",
      "Fairy"
    ],
    "flavorText": "When several of these POKéMON gather, their electricity can build and cause lightning storms.",
    "abilities": [
      "Static",
      "Lightning Rod"
    ]
  },
  {
    "id": 26,
    "name": "Raichu",
    "types": [
      "Electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "spAtk": 90,
      "spDef": 80,
      "speed": 110
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/raichu.jpg",
    "height": "0.8 m",
    "weight": "30.0 kg",
    "eggGroups": [
      "Field",
      "Fairy"
    ],
    "flavorText": "Its long tail serves as a ground to protect itself from its own high-voltage power.",
    "abilities": [
      "Static",
      "Lightning Rod"
    ]
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "spAtk": 20,
      "spDef": 30,
      "speed": 40
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/sandshrew.jpg",
    "height": "0.6 m",
    "weight": "12.0 kg",
    "eggGroups": [
      "Field"
    ],
    "flavorText": "Burrows deep underground in arid locations far from water. It only emerges to hunt for food.",
    "abilities": [
      "Sand Veil",
      "Sand Rush"
    ]
  },
  {
    "id": 28,
    "name": "Sandslash",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "spAtk": 45,
      "spDef": 55,
      "speed": 65
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/sandslash.jpg",
    "height": "1.0 m",
    "weight": "29.5 kg",
    "eggGroups": [
      "Field"
    ],
    "flavorText": "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.",
    "abilities": [
      "Sand Veil",
      "Sand Rush"
    ]
  },
  {
    "id": 29,
    "name": "Nidoran-F",
    "types": [
      "Poison"
    ],
    "stats": {
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "spAtk": 40,
      "spDef": 40,
      "speed": 41
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/nidoran-f.jpg",
    "height": "0.4 m",
    "weight": "7.0 kg",
    "eggGroups": [
      "Monster",
      "Field"
    ],
    "flavorText": "Although small, its venomous barbs render this POKéMON dangerous. The female has smaller horns.",
    "abilities": [
      "Poison Point",
      "Rivalry",
      "Hustle"
    ]
  },
  {
    "id": 30,
    "name": "Nidorina",
    "types": [
      "Poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "spAtk": 55,
      "spDef": 55,
      "speed": 56
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/nidorina.jpg",
    "height": "0.8 m",
    "weight": "20.0 kg",
    "eggGroups": [
      "Undiscovered"
    ],
    "flavorText": "The female's horn develops slowly. Prefers physical attacks such as clawing and biting.",
    "abilities": [
      "Poison Point",
      "Rivalry",
      "Hustle"
    ]
  },
  {
    "id": 31,
    "name": "Nidoqueen",
    "types": [
      "Poison",
      "Ground"
    ],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 87,
      "spAtk": 75,
      "spDef": 85,
      "speed": 76
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/nidoqueen.jpg",
    "height": "1.3 m",
    "weight": "60.0 kg",
    "eggGroups": [
      "Undiscovered"
    ],
    "flavorText": "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
    "abilities": [
      "Poison Point",
      "Rivalry",
      "Sheer Force"
    ]
  },
  {
    "id": 32,
    "name": "Nidoran-M",
    "types": [
      "Poison"
    ],
    "stats": {
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "spAtk": 40,
      "spDef": 40,
      "speed": 50
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/nidoran-m.jpg",
    "height": "0.5 m",
    "weight": "9.0 kg",
    "eggGroups": [
      "Monster",
      "Field"
    ],
    "flavorText": "Stiffens its ears to sense danger. The larger the male, the more powerful its secreted venom.",
    "abilities": [
      "Poison Point",
      "Rivalry",
      "Hustle"
    ]
  },
  {
    "id": 33,
    "name": "Nidorino",
    "types": [
      "Poison"
    ],
    "stats": {
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "spAtk": 55,
      "spDef": 55,
      "speed": 65
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/nidorino.jpg",
    "height": "0.9 m",
    "weight": "19.5 kg",
    "eggGroups": [
      "Monster",
      "Field"
    ],
    "flavorText": "An aggressive POKéMON that is quick to attack. The horn on its head secretes a powerful venom.",
    "abilities": [
      "Poison Point",
      "Rivalry",
      "Hustle"
    ]
  },
  {
    "id": 34,
    "name": "Nidoking",
    "types": [
      "Poison",
      "Ground"
    ],
    "stats": {
      "hp": 81,
      "attack": 102,
      "defense": 77,
      "spAtk": 85,
      "spDef": 75,
      "speed": 85
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/nidoking.jpg",
    "height": "1.4 m",
    "weight": "62.0 kg",
    "eggGroups": [
      "Monster",
      "Field"
    ],
    "flavorText": "It uses its powerful tail in battle to smash, constrict, then break the prey's bones.",
    "abilities": [
      "Poison Point",
      "Rivalry",
      "Sheer Force"
    ]
  },
  {
    "id": 35,
    "name": "Clefairy",
    "types": [
      "Normal",
      "Fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "spAtk": 60,
      "spDef": 65,
      "speed": 35
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/clefairy.jpg",
    "height": "0.6 m",
    "weight": "7.5 kg",
    "eggGroups": [
      "Fairy"
    ],
    "flavorText": "Its magical and cute appeal has many admirers. It is rare and found only in certain areas.",
    "abilities": [
      "Cute Charm",
      "Magic Guard",
      "Friend Guard"
    ]
  },
  {
    "id": 36,
    "name": "Clefable",
    "types": [
      "Normal",
      "Fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "spAtk": 95,
      "spDef": 90,
      "speed": 60
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/clefable.jpg",
    "height": "1.3 m",
    "weight": "40.0 kg",
    "eggGroups": [
      "Fairy"
    ],
    "flavorText": "A timid fairy POKéMON that is rarely seen. It will run and hide the moment it senses people.",
    "abilities": [
      "Cute Charm",
      "Magic Guard",
      "Unaware"
    ]
  },
  {
    "id": 37,
    "name": "Vulpix",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "spAtk": 50,
      "spDef": 65,
      "speed": 65
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/vulpix.jpg",
    "height": "0.6 m",
    "weight": "9.9 kg",
    "eggGroups": [
      "Field"
    ],
    "flavorText": "At birth, it has just one tail. The tail splits from its tip as it grows older.",
    "abilities": [
      "Flash Fire",
      "Drought"
    ]
  },
  {
    "id": 38,
    "name": "Ninetales",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "spAtk": 81,
      "spDef": 100,
      "speed": 100
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/ninetales.jpg",
    "height": "1.1 m",
    "weight": "19.9 kg",
    "eggGroups": [
      "Field"
    ],
    "flavorText": "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
    "abilities": [
      "Flash Fire",
      "Drought"
    ]
  },
  {
    "id": 39,
    "name": "Jigglypuff",
    "types": [
      "Normal",
      "Fairy"
    ],
    "stats": {
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "spAtk": 45,
      "spDef": 25,
      "speed": 20
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/jigglypuff.jpg",
    "height": "0.5 m",
    "weight": "5.5 kg",
    "eggGroups": [
      "Fairy"
    ],
    "flavorText": "When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
    "abilities": [
      "Cute Charm",
      "Competitive",
      "Friend Guard"
    ]
  },
  {
    "id": 40,
    "name": "Wigglytuff",
    "types": [
      "Normal",
      "Fairy"
    ],
    "stats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "spAtk": 85,
      "spDef": 50,
      "speed": 45
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/wigglytuff.jpg",
    "height": "1.0 m",
    "weight": "12.0 kg",
    "eggGroups": [
      "Fairy"
    ],
    "flavorText": "The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.",
    "abilities": [
      "Cute Charm",
      "Competitive",
      "Frisk"
    ]
  },
  {
    "id": 41,
    "name": "Zubat",
    "types": [
      "Poison",
      "Flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "spAtk": 30,
      "spDef": 40,
      "speed": 55
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/zubat.jpg",
    "height": "0.8 m",
    "weight": "7.5 kg",
    "eggGroups": [
      "Flying"
    ],
    "flavorText": "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
    "abilities": [
      "Inner Focus",
      "Infiltrator"
    ]
  },
  {
    "id": 42,
    "name": "Golbat",
    "types": [
      "Poison",
      "Flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "spAtk": 65,
      "spDef": 75,
      "speed": 90
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/golbat.jpg",
    "height": "1.6 m",
    "weight": "55.0 kg",
    "eggGroups": [
      "Flying"
    ],
    "flavorText": "Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.",
    "abilities": [
      "Inner Focus",
      "Infiltrator"
    ]
  },
  {
    "id": 43,
    "name": "Oddish",
    "types": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "spAtk": 75,
      "spDef": 65,
      "speed": 30
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/oddish.jpg",
    "height": "0.5 m",
    "weight": "5.4 kg",
    "eggGroups": [
      "Grass"
    ],
    "flavorText": "During the daytime, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.",
    "abilities": [
      "Chlorophyll",
      "Run Away"
    ]
  },
  {
    "id": 44,
    "name": "Gloom",
    "types": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "spAtk": 85,
      "spDef": 75,
      "speed": 40
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/gloom.jpg",
    "height": "0.8 m",
    "weight": "8.6 kg",
    "eggGroups": [
      "Grass"
    ],
    "flavorText": "The fluid that oozes from its mouth isn't drool. It is a nectar that is used to attract prey.",
    "abilities": [
      "Chlorophyll",
      "Stench"
    ]
  },
  {
    "id": 45,
    "name": "Vileplume",
    "types": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "spAtk": 110,
      "spDef": 90,
      "speed": 50
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/vileplume.jpg",
    "height": "1.2 m",
    "weight": "18.6 kg",
    "eggGroups": [
      "Grass"
    ],
    "flavorText": "The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.",
    "abilities": [
      "Chlorophyll",
      "Effect Spore"
    ]
  },
  {
    "id": 46,
    "name": "Paras",
    "types": [
      "Bug",
      "Grass"
    ],
    "stats": {
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "spAtk": 45,
      "spDef": 55,
      "speed": 25
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/paras.jpg",
    "height": "0.3 m",
    "weight": "5.4 kg",
    "eggGroups": [
      "Bug",
      "Grass"
    ],
    "flavorText": "Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host.",
    "abilities": [
      "Effect Spore",
      "Dry Skin",
      "Damp"
    ]
  },
  {
    "id": 47,
    "name": "Parasect",
    "types": [
      "Bug",
      "Grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "spAtk": 60,
      "spDef": 80,
      "speed": 30
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/parasect.jpg",
    "height": "1.0 m",
    "weight": "29.5 kg",
    "eggGroups": [
      "Bug",
      "Grass"
    ],
    "flavorText": "A host-parasite pair in which the parasite mushroom has taken over the host bug. Susceptible to fire.",
    "abilities": [
      "Effect Spore",
      "Dry Skin",
      "Damp"
    ]
  },
  {
    "id": 48,
    "name": "Venonat",
    "types": [
      "Bug",
      "Poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "spAtk": 40,
      "spDef": 55,
      "speed": 45
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/venonat.jpg",
    "height": "1.0 m",
    "weight": "30.0 kg",
    "eggGroups": [
      "Bug"
    ],
    "flavorText": "Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.",
    "abilities": [
      "Compound Eyes",
      "Tinted Lens",
      "Run Away"
    ]
  },
  {
    "id": 49,
    "name": "Venomoth",
    "types": [
      "Bug",
      "Poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "spAtk": 90,
      "spDef": 75,
      "speed": 90
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/venomoth.jpg",
    "height": "1.5 m",
    "weight": "12.5 kg",
    "eggGroups": [
      "Bug"
    ],
    "flavorText": "The dust-like scales covering its wings are color-coded to indicate the kinds of poison it has.",
    "abilities": [
      "Shield Dust",
      "Tinted Lens",
      "Wonder Skin"
    ]
  },
  {
    "id": 50,
    "name": "Diglett",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "spAtk": 35,
      "spDef": 45,
      "speed": 95
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/diglett.jpg",
    "height": "0.2 m",
    "weight": "0.8 kg",
    "eggGroups": [
      "Field"
    ],
    "flavorText": "Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.",
    "abilities": [
      "Sand Veil",
      "Arena Trap",
      "Sand Force"
    ]
  },
  {
    "id": 51,
    "name": "Dugtrio",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "spAtk": 50,
      "spDef": 70,
      "speed": 120
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/dugtrio.jpg",
    "height": "0.7 m",
    "weight": "33.3 kg",
    "eggGroups": [
      "Field"
    ],
    "flavorText": "A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.",
    "abilities": [
      "Sand Veil",
      "Arena Trap",
      "Sand Force"
    ]
  },
  {
    "id": 52,
    "name": "Meowth",
    "types": [
      "Normal"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "spAtk": 40,
      "spDef": 40,
      "speed": 90
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/meowth.jpg",
    "height": "0.4 m",
    "weight": "4.2 kg",
    "eggGroups": [
      "Field"
    ],
    "flavorText": "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.",
    "abilities": [
      "Pickup",
      "Technician",
      "Unnerve"
    ]
  },
  {
    "id": 53,
    "name": "Persian",
    "types": [
      "Normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "spAtk": 65,
      "spDef": 65,
      "speed": 115
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/persian.jpg",
    "height": "1.0 m",
    "weight": "32.0 kg",
    "eggGroups": [
      "Field"
    ],
    "flavorText": "The gem in its forehead glows on its own. It walks with all the grace and elegance of a proud POKéMON.",
    "abilities": [
      "Limber",
      "Technician",
      "Unnerve"
    ]
  },
  {
    "id": 54,
    "name": "Psyduck",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "spAtk": 65,
      "spDef": 50,
      "speed": 55
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/psyduck.jpg",
    "height": "0.8 m",
    "weight": "19.6 kg",
    "eggGroups": [
      "Water 1",
      "Field"
    ],
    "flavorText": "While lulling its enemies with its vacant look, this wily POKéMON will use psychokinetic powers.",
    "abilities": [
      "Damp",
      "Cloud Nine",
      "Swift Swim"
    ]
  },
  {
    "id": 55,
    "name": "Golduck",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "spAtk": 95,
      "spDef": 80,
      "speed": 85
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/golduck.jpg",
    "height": "1.7 m",
    "weight": "76.6 kg",
    "eggGroups": [
      "Water 1",
      "Field"
    ],
    "flavorText": "Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.",
    "abilities": [
      "Damp",
      "Cloud Nine",
      "Swift Swim"
    ]
  },
  {
    "id": 56,
    "name": "Mankey",
    "types": [
      "Fighting"
    ],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "spAtk": 35,
      "spDef": 45,
      "speed": 70
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/mankey.jpg",
    "height": "0.5 m",
    "weight": "28.0 kg",
    "eggGroups": [
      "Field"
    ],
    "flavorText": "Extremely quick to anger. It could be docile one moment then thrashing away the next instant.",
    "abilities": [
      "Vital Spirit",
      "Anger Point",
      "Defiant"
    ]
  },
  {
    "id": 57,
    "name": "Primeape",
    "types": [
      "Fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "spAtk": 60,
      "spDef": 70,
      "speed": 95
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/primeape.jpg",
    "height": "1.0 m",
    "weight": "32.0 kg",
    "eggGroups": [
      "Field"
    ],
    "flavorText": "Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.",
    "abilities": [
      "Vital Spirit",
      "Anger Point",
      "Defiant"
    ]
  },
  {
    "id": 58,
    "name": "Growlithe",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "spAtk": 70,
      "spDef": 50,
      "speed": 60
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/growlithe.jpg",
    "height": "0.7 m",
    "weight": "19.0 kg",
    "eggGroups": [
      "Field"
    ],
    "flavorText": "Very protective of its territory. It will bark and bite to repel intruders from its space.",
    "abilities": [
      "Intimidate",
      "Flash Fire",
      "Justified"
    ]
  },
  {
    "id": 59,
    "name": "Arcanine",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "spAtk": 100,
      "spDef": 80,
      "speed": 95
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/arcanine.jpg",
    "height": "1.9 m",
    "weight": "155.0 kg",
    "eggGroups": [
      "Field"
    ],
    "flavorText": "A POKéMON that has been admired since the past for its beauty. It runs agilely as if on wings.",
    "abilities": [
      "Intimidate",
      "Flash Fire",
      "Justified"
    ]
  },
  {
    "id": 60,
    "name": "Poliwag",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "spAtk": 40,
      "spDef": 40,
      "speed": 90
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/poliwag.jpg",
    "height": "0.6 m",
    "weight": "12.4 kg",
    "eggGroups": [
      "Water 1"
    ],
    "flavorText": "Its newly grown legs prevent it from running. It appears to prefer swimming over everything else.",
    "abilities": [
      "Water Absorb",
      "Damp",
      "Swift Swim"
    ]
  },
  {
    "id": 61,
    "name": "Poliwhirl",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "spAtk": 50,
      "spDef": 50,
      "speed": 90
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/poliwhirl.jpg",
    "height": "1.0 m",
    "weight": "20.0 kg",
    "eggGroups": [
      "Water 1"
    ],
    "flavorText": "Capable of living in or out of water. When out of water, it sweats to keep its body slimy.",
    "abilities": [
      "Water Absorb",
      "Damp",
      "Swift Swim"
    ]
  },
  {
    "id": 62,
    "name": "Poliwrath",
    "types": [
      "Water",
      "Fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 95,
      "spAtk": 70,
      "spDef": 90,
      "speed": 70
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/poliwrath.jpg",
    "height": "1.3 m",
    "weight": "54.0 kg",
    "eggGroups": [
      "Water 1"
    ],
    "flavorText": "An adept swimmer at both the front crawl and breaststroke. Easily overtakes the best human swimmers.",
    "abilities": [
      "Water Absorb",
      "Damp",
      "Swift Swim"
    ]
  },
  {
    "id": 63,
    "name": "Abra",
    "types": [
      "Psychic"
    ],
    "stats": {
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "spAtk": 105,
      "spDef": 55,
      "speed": 90
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/abra.jpg",
    "height": "0.9 m",
    "weight": "19.5 kg",
    "eggGroups": [
      "Human-Like"
    ],
    "flavorText": "Sleeps 18 hours a day. If it senses danger, it teleports itself to safety even as it sleeps.",
    "abilities": [
      "Synchronize",
      "Inner Focus",
      "Magic Guard"
    ]
  },
  {
    "id": 64,
    "name": "Kadabra",
    "types": [
      "Psychic"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "spAtk": 120,
      "spDef": 70,
      "speed": 105
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/kadabra.jpg",
    "height": "1.3 m",
    "weight": "56.5 kg",
    "eggGroups": [
      "Human-Like"
    ],
    "flavorText": "It emits special alpha waves from its body that induce headaches just by being close to it.",
    "abilities": [
      "Synchronize",
      "Inner Focus",
      "Magic Guard"
    ]
  },
  {
    "id": 65,
    "name": "Alakazam",
    "types": [
      "Psychic"
    ],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "spAtk": 135,
      "spDef": 95,
      "speed": 120
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/alakazam.jpg",
    "height": "1.5 m",
    "weight": "48.0 kg",
    "eggGroups": [
      "Human-Like"
    ],
    "flavorText": "Its brain can outperform a supercomputer. Its IQ is said to be 5000.",
    "abilities": [
      "Synchronize",
      "Inner Focus",
      "Magic Guard"
    ]
  },
  {
    "id": 66,
    "name": "Machop",
    "types": [
      "Fighting"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "spAtk": 35,
      "spDef": 35,
      "speed": 35
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/machop.jpg",
    "height": "0.8 m",
    "weight": "19.5 kg",
    "eggGroups": [
      "Human-Like"
    ],
    "flavorText": "Loves to build its muscles. It trains in all styles of martial arts to become even stronger.",
    "abilities": [
      "Guts",
      "No Guard",
      "Steadfast"
    ]
  },
  {
    "id": 67,
    "name": "Machoke",
    "types": [
      "Fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "spAtk": 50,
      "spDef": 60,
      "speed": 45
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/machoke.jpg",
    "height": "1.5 m",
    "weight": "70.5 kg",
    "eggGroups": [
      "Human-Like"
    ],
    "flavorText": "Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions.",
    "abilities": [
      "Guts",
      "No Guard",
      "Steadfast"
    ]
  },
  {
    "id": 68,
    "name": "Machamp",
    "types": [
      "Fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "spAtk": 65,
      "spDef": 85,
      "speed": 55
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/machamp.jpg",
    "height": "1.6 m",
    "weight": "130.0 kg",
    "eggGroups": [
      "Human-Like"
    ],
    "flavorText": "Using its amazing muscles, it throws powerful punches that can knock the victim clear over the horizon.",
    "abilities": [
      "Guts",
      "No Guard",
      "Steadfast"
    ]
  },
  {
    "id": 69,
    "name": "Bellsprout",
    "types": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "spAtk": 70,
      "spDef": 30,
      "speed": 40
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/bellsprout.jpg",
    "height": "0.7 m",
    "weight": "4.0 kg",
    "eggGroups": [
      "Grass"
    ],
    "flavorText": "A carnivorous POKéMON that traps and eats bugs. It uses its root feet to soak up needed moisture.",
    "abilities": [
      "Chlorophyll",
      "Gluttony"
    ]
  },
  {
    "id": 70,
    "name": "Weepinbell",
    "types": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "spAtk": 85,
      "spDef": 45,
      "speed": 55
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/weepinbell.jpg",
    "height": "1.0 m",
    "weight": "6.4 kg",
    "eggGroups": [
      "Grass"
    ],
    "flavorText": "It spits out PoisonPowder to immobilize the enemy and then finishes it with a spray of Acid.",
    "abilities": [
      "Chlorophyll",
      "Gluttony"
    ]
  },
  {
    "id": 71,
    "name": "Victreebel",
    "types": [
      "Grass",
      "Poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "spAtk": 100,
      "spDef": 60,
      "speed": 70
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/victreebel.jpg",
    "height": "1.7 m",
    "weight": "15.5 kg",
    "eggGroups": [
      "Grass"
    ],
    "flavorText": "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
    "abilities": [
      "Chlorophyll",
      "Gluttony"
    ]
  },
  {
    "id": 72,
    "name": "Tentacool",
    "types": [
      "Water",
      "Poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "spAtk": 50,
      "spDef": 100,
      "speed": 70
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/tentacool.jpg",
    "height": "0.9 m",
    "weight": "45.5 kg",
    "eggGroups": [
      "Water 3"
    ],
    "flavorText": "Tentacool's body is largely composed of water. It magnifies and refracts sunlight using the red orbs on its head.",
    "abilities": [
      "Clear Body",
      "Liquid Ooze",
      "Rain Dish"
    ]
  },
  {
    "id": 73,
    "name": "Tentacruel",
    "types": [
      "Water",
      "Poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "spAtk": 80,
      "spDef": 120,
      "speed": 100
    },
    "isLegendary": false,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/tentacruel.jpg",
    "height": "1.6 m",
    "weight": "55.0 kg",
    "eggGroups": [
      "Water 3"
    ],
    "flavorText": "The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.",
    "abilities": [
      "Clear Body",
      "Liquid Ooze",
      "Rain Dish"
    ]
  },
  {
    "id": 144,
    "name": "Articuno",
    "types": [
      "Ice",
      "Flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 100,
      "spAtk": 95,
      "spDef": 125,
      "speed": 85
    },
    "isLegendary": true,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/articuno.jpg",
    "height": "1.7 m",
    "weight": "55.4 kg",
    "eggGroups": [
      "Undiscovered"
    ],
    "flavorText": "A legendary bird POKéMON that can control ice. The flapping of its wings chills the air. It is said that when this POKéMON flies, snow will fall.",
    "abilities": [
      "Pressure",
      "Snow Cloak"
    ]
  },
  {
    "id": 145,
    "name": "Zapdos",
    "types": [
      "Electric",
      "Flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "spAtk": 125,
      "spDef": 90,
      "speed": 100
    },
    "isLegendary": true,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/zapdos.jpg",
    "height": "1.6 m",
    "weight": "52.6 kg",
    "eggGroups": [
      "Undiscovered"
    ],
    "flavorText": "A legendary bird POKéMON that is said to appear from clouds while dropping enormous lightning bolts.",
    "abilities": [
      "Pressure",
      "Static"
    ]
  },
  {
    "id": 146,
    "name": "Moltres",
    "types": [
      "Fire",
      "Flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "spAtk": 125,
      "spDef": 85,
      "speed": 90
    },
    "isLegendary": true,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/moltres.jpg",
    "height": "2.0 m",
    "weight": "60.0 kg",
    "eggGroups": [
      "Undiscovered"
    ],
    "flavorText": "Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.",
    "abilities": [
      "Pressure",
      "Flame Body"
    ]
  },
  {
    "id": 150,
    "name": "Mewtwo",
    "types": [
      "Psychic"
    ],
    "stats": {
      "hp": 106,
      "attack": 110,
      "defense": 90,
      "spAtk": 154,
      "spDef": 90,
      "speed": 130
    },
    "isLegendary": true,
    "isMythical": false,
    "isStarter": false,
    "image": "./assets/pokemon/mewtwo.jpg",
    "height": "2.0 m",
    "weight": "122.0 kg",
    "eggGroups": [
      "Undiscovered"
    ],
    "flavorText": "It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.",
    "abilities": [
      "Pressure",
      "Unnerve"
    ]
  },
  {
    "id": 151,
    "name": "Mew",
    "types": [
      "Psychic"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "spAtk": 100,
      "spDef": 100,
      "speed": 100
    },
    "isLegendary": false,
    "isMythical": true,
    "isStarter": false,
    "image": "./assets/pokemon/mew.jpg",
    "height": "0.4 m",
    "weight": "4.0 kg",
    "eggGroups": [
      "Undiscovered"
    ],
    "flavorText": "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
    "abilities": [
      "Synchronize"
    ]
  }
]

// This is an array of strings (TV show titles)
// let titles = [
//   "Fresh Prince of Bel Air",
//   "Curb Your Enthusiasm",
//   "East Los High",
// ];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.


//single map instance for quick lookup
//should sort by ID, -> but user usually searches pkmn name?

// build empty map
const PokemonMap ={};
//fill map on load
for (let i = 0; i<POKEMON.length; i++){
  PokemonMap[POKEMON[i].id] = POKEMON[i]; //fill at given index
}


// This function adds cards the page to display the data in the array
// needs to loop over new pokemon data 
function showCards(pokemonList) { //pass in array as parameter so it can be full or filtered list
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.getElementById("card-template");

  //range based loop
  for (let pokemon of pokemonList) {
    
    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    // let imageURL = "";
    // if (i == 0) {
    //   imageURL = FRESH_PRINCE_URL;
    // } else if (i == 1) {
    //   imageURL = CURB_POSTER_URL;
    // } else if (i == 2) {
    //   imageURL = EAST_LOS_HIGH_POSTER_URL;
    // }

    
    // editCardContent(nextCard, title, imageURL); // Edit title and image
    const nextCard = templateCard.content.cloneNode(true); // Copy the template card
    nextCard.querySelector(".card-number").textContent = pokemon.id;
    nextCard.querySelector(".card-name").textContent = pokemon.name;
    nextCard.querySelector(".card-flavor").textContent = pokemon.flavorText;
    nextCard.querySelector(".card-image").src ="./assets/pokemon/" + pokemon.name.toLowerCase() + ".jpg" ; //slightly diff -> + is similar to << in cpp
    nextCard.querySelector(".card-height").textContent = pokemon.height;
    nextCard.querySelector(".card-weight").textContent = pokemon.weight;
    nextCard.querySelector(".btn-collect").setAttribute("data-id", pokemon.id)
    

    //show special badges feature!
    //if pokemon has special badge boolean = true, show special badge
    let badgeContainer = nextCard.querySelector(".card-badges");

    if (pokemon.isStarter){
      let badge = document.createElement("span");
      badge.textContent = "Starter";
      badge.className = "badge-starter";
      badgeContainer.appendChild(badge);
    } 
    if (pokemon.isLegendary){
      let badge = document.createElement("span");
      badge.textContent = "Legendary";
      badge.className = "badge-legendary";
      badgeContainer.appendChild(badge);
    } 
    if (pokemon.isMythical){
      let badge = document.createElement("span");
      badge.textContent = "Mythical";
      badge.className = "badge-mythical";
      badgeContainer.appendChild(badge);
    } 

    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}



function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => showCards(POKEMON)); //pass the full array on page load

//search feature!!
//need event listener on serach that searches on each keystroke
document.getElementById("search-input").addEventListener("input", function(){
  let query = document.getElementById("search-input").value; // filter and re render
  //need a filter on the array
  let results = [];
  for (let pokemon of POKEMON) {
    //if letter input is present, then display pokemon that have letter in name
    //pokemon name lowercased = given letters present lowercased
    if (pokemon.name.toLowerCase().includes(query.toLowerCase())){
      results.push(pokemon);
    }
  }
  showCards(results); //pass result into showcards
})

//sort by other things in data structure
//user selects dropdown
//read which option selected
//sort copy of POKEMON array by that specific object element
//re-render

//new event listener and sort
document.getElementById("sort-select").addEventListener("change", function() {
  let sortBy = document.getElementById("sort-select").value;

  let sorted = [...POKEMON]; //spreads full array into copy

  //triple equals in js is ABSOLUTE equals. must do becuase double equals assumes
  if (sortBy === "id") {                                                                                                                                                           
    sorted.sort(function(a, b) { return a.id - b.id; });                                                                                                                             
  } else if (sortBy === "name"){
    sorted.sort(function(a, b){
      return a.name.localeCompare(b.name); // like string compare! checks for string content
    });
  } else if (sortBy === "hp"){
      sorted.sort(function(a, b){
        return b.stats.hp - a.stats.hp; // b-a sorts from high to low - pkmn players usually want to optimize for best
      });
  } else if (sortBy === "attack"){
      sorted.sort(function(a, b){
        return b.stats.attack - a.stats.attack;
      });
  } else if (sortBy === "defense"){
      sorted.sort(function(a, b){
        return b.stats.defense - a.stats.defense;
      });
  } else if (sortBy === "spAtk"){
      sorted.sort(function(a, b){
        return b.stats.spAtk - a.stats.spAtk;
      });
  }else if (sortBy === "spDef"){
      sorted.sort(function(a, b){
        return b.stats.spDef - a.stats.spDef;
      });
  }else if (sortBy === "speed"){
      sorted.sort(function(a, b){
        return b.stats.speed - a.stats.speed;
      });
  }
  showCards(sorted)
});

//now for type filtering!
//we need to read data-type from clicked button on top
//need to filter POKEMON to the ones that types array includes the type
//re render 

//listener for type filter
document.querySelectorAll(".type-badge").forEach(function(button){
  button.addEventListener("click", function(){
    let selectedType = button.getAttribute("data-type");
 
    //edge case, no pokemon can have all types, if pressed all, show all cards and exit
    if  (selectedType === "all"){
      showCards(POKEMON);
      return;
    }
    
    let filtered = []; //filtered array creation
    //range based
    for (let pokemon of POKEMON) {
      if (pokemon.types.includes(selectedType)){ //if the desired filter is applicable
        filtered.push(pokemon); //push pokemon into filtered array
      }
    }
    showCards(filtered);
  });
});

//personal collection feature
//consider using seperate set for optimization when scaling?
let collection = [];
let collectionSet = new Set(); //set enables O(1) duplicate check!

//render the collection
function renderCollection() {
  const grid = document.getElementById("collection-grid");
  grid.innerHTML = "";
  document.getElementById("collection-count").textContent = collection.length;

  for (let pokemon of collection) {
    const item = document.createElement("div");
    item.className = "collection-item";
    item.innerHTML = `
      <button class="btn-remove-pokemon" data-id="${pokemon.id}" title="Remove">✕</button>
      <img src="./assets/pokemon/${pokemon.name.toLowerCase()}.jpg" />
      <span class="collection-item-name">${pokemon.name}</span>
    `;
    grid.appendChild(item);
  }
}

function removeFromCollection(id) {
  collection = collection.filter(p => p.id !== id);
  collectionSet.delete(id);
  renderCollection();
}

document.getElementById("collection-grid").addEventListener("click", function(event) {
  if (event.target.classList.contains("btn-remove-pokemon")) {
    event.stopPropagation();
    removeFromCollection(Number(event.target.getAttribute("data-id")));
  }
});

//add to collection
function addToCollection(pokemon) {
  if (collectionSet.has(pokemon.id)){
    return;
  }
  collection.push(pokemon);
  collectionSet.add(pokemon.id);
  renderCollection();
}

// collect button on cards
  document.getElementById("card-container").addEventListener("click", function(event) {                                                                                              
    if (event.target.classList.contains("btn-collect")) {
      let id = Number(event.target.getAttribute("data-id")); //define id as data id
      addToCollection(PokemonMap[id]);                                                                                                                                                      
    }                                                       
  });                                                                                                                                                                                
                                                            
  //slide panel toggle                                                                                                                                                              
  document.getElementById("collection-bar").addEventListener("click", function() {
    document.getElementById("collection-panel").classList.toggle("expanded");     
  });                                                                        
     
  //clear button
  document.getElementById("clear-collection-btn").addEventListener("click", function(event) {                                                                                        
    event.stopPropagation(); // prevent triggering the bar toggle - fixes open close bug                          
    collection = [];                                                                                                                                                                 
    collectionSet = new Set();                              
    renderCollection(); //rerender                                                                                                                                                             
  });   

  

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
