(function () {
  const floor = document.getElementById('floor');

  function cardFor(game) {
    const a = document.createElement('a');
    a.className = `cabinet cabinet--${game.accent || 'gold'}`;
    a.href = game.path;

    a.innerHTML = `
      <div class="cabinet-screen">
        <span class="cabinet-glyph">▶</span>
      </div>
      <div class="cabinet-label">
        <h2>${game.title}</h2>
        <p>${game.tagline}</p>
      </div>
    `;
    return a;
  }

  function emptySlot() {
    const div = document.createElement('div');
    div.className = 'cabinet cabinet--empty';
    div.innerHTML = `
      <div class="cabinet-screen">
        <span class="cabinet-glyph">+</span>
      </div>
      <div class="cabinet-label">
        <h2>Open slot</h2>
        <p>Add a folder to /games and list it in games.js.</p>
      </div>
    `;
    return div;
  }

  GAMES.forEach((game) => floor.appendChild(cardFor(game)));

  // Keep a couple of open slots visible so the floor never looks finished
  const openSlots = Math.max(0, 3 - GAMES.length);
  for (let i = 0; i < Math.max(openSlots, 1); i++) {
    floor.appendChild(emptySlot());
  }
})();
