function lifeDistributer(enemy, freeStats) {
    let extraLife = Math.floor(Math.random() * 10);
    enemy.lifePoint = 200 + extraLife * 20;
    freeStats -= extraLife;
    return freeStats;
  }
  
  function strengthDistributer(enemy, freeStats) {
    enemy.strength = Math.floor(Math.random() * freeStats) + 4;
    let extraAttack = Math.floor(Math.random() * (enemy.strength / 2 + 0.49));
    enemy.attackStrength = enemy.strength / 2 + extraAttack;
    enemy.defenceStrength =
      enemy.strength / 2 + (enemy.strength / 2 - extraAttack);
    freeStats -= enemy.strength - 4;
    return freeStats;
  }
  
  function speedDistributer(enemy, freeStats) {
    enemy.speed = freeStats + 4;
    let extraSpeed = Math.floor(Math.random() * (enemy.speed / 2 + 0.49));
    enemy.attackSpeed = enemy.speed / 2 + extraSpeed;
    enemy.evasionSpeed = enemy.speed / 2 + (enemy.speed / 2 - extraSpeed);
  }
  
  function enemyStatDistributer(enemy, freeStats) {
    freeStats = lifeDistributer(enemy, freeStats);
    freeStats = strengthDistributer(enemy, freeStats);
    speedDistributer(enemy, freeStats);
  }
  
  function enemyCaller(level) {
    let freeStats;
    if (level == 1) {
      freeStats = 10;
    } else if (level == 2) {
      freeStats = 15;
    } else if (level == 3) {
      freeStats = 20;
    }
  
    const enemy = new Enemy(freeStats);
    enemyStatDistributer(enemy, freeStats);
  
    if (level == 1) {
      enemy.weapon = "";
      enemy.amulet.red = 0;
      enemy.amulet.green = 0;
      enemy.amulet.blue = 0;
    } else if (level == 2) {
      enemy.amulet.red = 0;
      enemy.amulet.green = 0;
      enemy.amulet.blue = 0;
    }
  
    return enemy;
  }
  
  