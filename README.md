# The Arcade

A simple portal that lists your games as cards. Click a card, it opens the game.

## How to add a game

1. Make a folder for it inside `games/`, e.g. `games/my-game/`.
2. Put your game's files in there. It needs at least an `index.html` that runs the game on its own (like `games/snake/index.html` does).
3. Open `games.js` and add an entry to the `GAMES` list:

```js
{
  title: "My Game",
  tagline: "One short line about it.",
  path: "games/my-game/index.html",
  accent: "gold"   // or "violet"
}
```

4. Refresh `index.html` — your game now shows up as a cabinet on the floor.

## Structure

```
index.html      <- the portal page
style.css       <- arcade styling
games.js        <- the list of games (edit this)
app.js          <- renders the cards, no need to touch this
games/
  snake/
    index.html  <- a working example game
```

## Running it

Since this is all static files, you can just open `index.html` in a browser. If a game needs to load its own assets (images, sounds) and your browser blocks that when opening files directly, run a tiny local server from the `arcade` folder instead:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
