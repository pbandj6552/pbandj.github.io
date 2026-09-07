// GAME REGISTRY
// Add one entry per game. Each game lives in its own folder under /games.
//
// fields:
//   title       - shown on the cabinet card
//   tagline     - one short line describing it
//   path        - folder path to the game's own index.html
//   accent      - "gold" or "violet" (controls the card's glow color)

const GAMES = [
  {
    title: "mc",
    tagline: "minecraft",
    path: "games/MC/MC.html",
    accent: "red"
  },
  {
    title: "balatro",
    tagline: "a poker type game (NO GAMBLING)",
    path: "games/balatro/balatro.html",
    accent: "violet"
  },
  {
    title: "gust",
    tagline: "proxy",
    path: "games/gust/GUST.html",
    accent: "gold"
  },
  {
    title: "retro bowl",
    tagline: "US foot ball",
    path: "games/retro bowl/bowl.html",
    accent: "violet"
  },
  {
    title: "drive mad",
    tagline: "drive mad idc",
    path: "games/drive/drive mad.html",
    accent: "violet"
  },
  // Add your own games below, e.g.:
  // {
  //   title: "My New Game",
  //   tagline: "A short description of what it is.",
  //   path: "games/my-new-game/index.html",
  //   accent: "violet"
  // }
];
