# Pokemon Database!

## Idea dump

- Pokemon database
- will have pokemon base info for lore
- pokemon types
- - Nested objects for base stats

- pokemon counters suggestion feature!
  - users will be able to input pokemon that they have
  - feature will suggest type counters, movesets, etc.
  - maybe complex known setups? might be future implementation.

- technical checklist
  - must utilize data structures and complex implementation of sorts, filters, searches, etc.

- database should be in json file
- structure
  "id":
  "name":
  "types" {}: //nested struct
  "stats": { "hp": , "attack": , "defense": , "spAtk": , "spDef": , "speed": }, // nested struct
  "isLegendary": ,
  "isMythical": ,
  "isStarter": ,
  "image": "" ,
  "height": " m",
  "weight": " kg",
  "eggGroups": [],
  "flavorText": "",
  "abilities": []

## Data

- since we cant use apis, i'll have to manually fetch from Poke API's github for assets and information.
  - https://github.com/PokeAPI/pokeapi
