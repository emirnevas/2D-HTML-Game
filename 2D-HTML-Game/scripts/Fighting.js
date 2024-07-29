async function battle(hero, enemy) {
    const log = document.getElementById("battleLog");
    if (!log) {
      console.error("Element with id 'battle-log' not found.");
      return;
    }
    log.innerHTML = "";
  
    let turn = 1;
    while (hero.lifePoint > 0 && enemy.lifePoint > 0) {
      let attacker, defender;
  
      if (turn % 2 === 1) {
        attacker = hero;
        defender = enemy;
      } else {
        attacker = enemy;
        defender = hero;
      }
  
      const result = attack(attacker, defender);
      const damage = result.damage;
      const attackName = result.attackName;
  
      defender.lifePoint -= damage;
  
      log.innerHTML += `<p>Turn ${turn}: ${attacker.name} uses ${attackName} and attacks ${defender.name} for ${damage} damage. ${defender.name} has ${defender.lifePoint > 0 ? defender.lifePoint : 0} health left.</p>`;
      log.scrollTop = log.scrollHeight;
  
      if (defender.lifePoint <= 0) {
        log.innerHTML += `<p>${defender.name} is defeated. ${attacker.name} wins!</p>`;
        log.scrollTop = log.scrollHeight;
        break;
      }
  
      turn++;
      await new Promise(resolve => setTimeout(resolve, 10));
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("fight-button").onclick = function() {
      const hero = heroCaller(3);
      const enemy = enemyCaller(3);
      console.log(hero)
      console.log(enemy)
  
      battle(hero, enemy);
    };
  });