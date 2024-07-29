function getWeaponAttacks(attacker) {
    if (attacker.weapon === "sword") {
      return swordAttacks;
    } else if (attacker.weapon === "battleAxe") {
      return battleAxeAttacks;
    } else if (attacker.weapon === "spear") {
      return spearAttacks;
    }
  }
  
  function attack(attacker, target) {
    const attacks = getWeaponAttacks(attacker);
    const randomAttackMap = chooseAttack(attacks);
    var strDiff = attacker.attackStrength / target.defenceStrength;
    var spdDiff = attacker.attackSpeed / target.evasionSpeed;
    var attackName = randomAttackMap.get(0);
    var attackDamage = randomAttackMap.get(1).baseDamage;
    var attackChance = randomAttackMap.get(1).baseSuccessChance;
    var modifiedAttackDamage = Math.floor(attackDamage * strDiff);
    var modifiedAttackChance = attackChance * spdDiff;
  
    if (modifiedAttackChance > 100) {
      modifiedAttackDamage = Math.floor((modifiedAttackChance/100)* modifiedAttackDamage);
      modifiedAttackChance = 100;
    }
  
    var dice = Math.floor(Math.random() * 100);
    if (dice >= modifiedAttackChance) {
      modifiedAttackDamage = 0;
    }
  
    return { damage: modifiedAttackDamage, attackName: attackName };
  }
  
  function chooseAttack(attacks) {
    var attackKeys = Object.keys(attacks);
    var randomIndex = Math.floor(Math.random() * attackKeys.length);
    var randomAttackKey = attackKeys[randomIndex];
    const myMap = new Map();
    myMap.set(0, randomAttackKey);
    myMap.set(1, attacks[randomAttackKey]);
    return myMap;
  }