# PokeBased — Project Plan

## Overview
A Gen 1 Pokémon catalog site built with vanilla HTML, CSS, and JavaScript.
Showcases 30 hand-picked Gen 1 Pokémon spanning all major types, the 3 starter lines, and all legendaries/mythicals.

---

## File Structure

```
Snap-Engineering-Project/
├── index.html          ← main page structure
├── style.css           ← all styling
├── scripts.js          ← all JavaScript logic
├── data/
│   └── pokemon.json    ← Pokémon data (loaded via fetch or inline variable)
└── assets/
    └── pokemon/        ← official artwork JPGs (bulbasaur.jpg, etc.)
```

---

## Data Structure

Each Pokémon is an object with the following shape:

```js
{
  id: 1,
  name: "Bulbasaur",
  types: ["Grass", "Poison"],         // array — 1 or 2 types
  stats: {                             // nested object
    hp: 45,
    attack: 49,
    defense: 49,
    spAtk: 65,
    spDef: 65,
    speed: 45
  },
  isLegendary: false,                  // boolean
  isMythical: false,                   // boolean
  isStarter: true,                     // boolean
  height: "0.7 m",
  weight: "6.9 kg",
  eggGroups: ["Grass", "Monster"],     // array
  abilities: ["Overgrow", "Chlorophyll"], // array
  flavorText: "A strange seed...",
  image: "./assets/pokemon/bulbasaur.jpg"
}
```

---

## Card Layout

Each card should display:
- Pokemon image (large, prominent)
- Name + Pokédex number (#001)
- Type badge(s) — color coded by type
- Flavor text (italic, subtle)
- Stats — either as a list or visual bars
- Height, weight
- Abilities

---

## Features (must have 2+)

### 1. Search by Name
- Text input that filters cards as you type
- Case insensitive match against `pokemon.name`
- Uses `array.filter()` and `string.toLowerCase()`

### 2. Filter by Type
- Dropdown or clickable type badges (Fire, Water, Grass, Poison, etc.)
- Filters the visible cards to only matching types
- Uses `array.filter()` and `types.includes()`

### 3. Add to My Team
- Button on each card adds the Pokémon to a 6-slot team panel
- Remove button takes them off the team
- Uses `array.push()`, `array.filter()`, and re-renders the team from state
- Directly hits the README's "adding/removing entries" requirement

---

## UI / Design Notes

- **Color theme:** Pokémon red (`#CC0000`) as primary, white cards, dark background
- **Type badge colors:** each type has a standard color (e.g. Fire = `#F08030`, Water = `#6890F0`, Grass = `#78C850`, Poison = `#A040A0`)
- **Card grid:** CSS flexbox or grid, wrap on smaller screens
- **Font:** clean sans-serif (system font or Google Font)
- **Header:** bold title "PokeBased", possibly with a subtle Pokéball graphic

---

## Constraints & Notes

- No frameworks (no React, Vue, Bootstrap, Tailwind)
- No external API calls — all data is local (`pokemon.json` + local images)
- AI may assist with HTML and CSS only — all JavaScript must be written by hand
- Site resets on refresh — no persistence required
- Loading `pokemon.json`: either inline the array in `scripts.js` as a `const`,
  or use `fetch()` (requires a local server — not just opening the HTML file directly)
- Recommended: inline the data in `scripts.js` to keep things simple for local preview

---

## Stretch Goals (optional)

- Toggle "Starters only" checkbox
- Click a card to expand it with full stat details
- Stat comparison bars using CSS width percentages
- Responsive mobile layout
