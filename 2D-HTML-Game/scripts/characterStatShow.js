function characterStatHtmlUpdater(character) {
    const character_strength = document.getElementById(`${character.type}-strength`);
    const character_strength_value = character.strength;
    character_strength.innerHTML = "Strength: " + character_strength_value;
  
    const character_attackStrength = document.getElementById(`${character.type}-attackStrength`);
    const character_attackStrength_value = character.attackStrength;
    character_attackStrength.innerHTML = "Attack Strength: " + character_attackStrength_value;
    
    const character_defenceStrength = document.getElementById(`${character.type}-defenceStrength`);
    const character_defenceStrength_value = character.defenceStrength;
    character_defenceStrength.innerHTML = "Defence Strength: " + character_defenceStrength_value;
  
    const character_speed = document.getElementById(`${character.type}-speed`);
    const character_speed_value = character.speed;
    character_speed.innerHTML = "Speed: " + character_speed_value;
  
    const character_attackSpeed = document.getElementById(`${character.type}-attackSpeed`);
    const character_attackSpeed_value = character.attackSpeed;
    character_attackSpeed.innerHTML = "Attack Speed: " + character_attackSpeed_value;
  
    const character_evasionSpeed = document.getElementById(`${character.type}-evasionSpeed`);
    const character_evasionSpeed_value = character.evasionSpeed;
    character_evasionSpeed.innerHTML = "Evasion Speed: " + character_evasionSpeed_value;
  }

  function enemySrcChanger(enemy){
    const enemySrc = document.getElementById("enemy")
    const enemyWeapon = enemy.weapon
    enemySrc.src = `../images/${enemyWeapon}.png`
    console.log(enemyWeapon)

  }
  
