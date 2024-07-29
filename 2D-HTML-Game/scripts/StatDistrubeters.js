function lifeDistributer(hero, freeStats) {
  let extraLife = Math.floor(Math.random() * 10);
  hero.lifePoint = 200 + extraLife * 20;
  freeStats -= extraLife;
  return freeStats;
}

function strengthDistributer(hero, freeStats) {
  hero.strength = Math.floor(Math.random() * freeStats) + 4;
  let extraAttack = Math.floor(Math.random() * (hero.strength / 2 + 0.49));
  hero.attackStrength = hero.strength / 2 + extraAttack;
  hero.defenceStrength = hero.strength / 2 + (hero.strength / 2 - extraAttack);
  freeStats -= hero.strength - 4;
  return freeStats;
}

function speedDistributer(hero, freeStats) {
  hero.speed = freeStats + 4;
  let extraSpeed = Math.floor(Math.random() * (hero.speed / 2 + 0.49));
  hero.attackSpeed = hero.speed / 2 + extraSpeed;
  hero.evasionSpeed = hero.speed / 2 + (hero.speed / 2 - extraSpeed);
}

function heroStatDistributer(hero, freeStats) {
  freeStats = lifeDistributer(hero, freeStats);
  freeStats = strengthDistributer(hero, freeStats);
  speedDistributer(hero, freeStats);
}

function heroCaller(level) {
  let freeStats;
  if (level == 1) {
    freeStats = 10;
  } else if (level == 2) {
    freeStats = 15;
  } else if (level == 3) {
    freeStats = 20;
  }

  const hero = new Hero(freeStats);
  heroStatDistributer(hero, freeStats);

  if (level == 1) {
    hero.weapon = "";
    hero.amulet.red = 0;
    hero.amulet.green = 0;
    hero.amulet.blue = 0;
  } else if (level == 2) {
    hero.amulet.red = 0;
    hero.amulet.green = 0;
    hero.amulet.blue = 0;
  }

  return hero;
}
function amuletDistrubuter(hero) {
  const stats = document.getElementById("selectedColorValue").textContent;
  const formattedStats = hexToRgb(stats);
  hero.amulet.red = formattedStats.r;
  hero.amulet.green = formattedStats.g;
  hero.amulet.blue = formattedStats.b;
}

function hexToRgb(hex) {
  if (typeof hex !== "string") {
    throw new TypeError("Expected a string");
  }
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

function hexToRgbString(hex) {
  if (typeof hex !== "string") {
    throw new TypeError("Expected a string");
  }
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}
