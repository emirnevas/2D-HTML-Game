class Hero {
  weaponList = ["sword", "battleAxe", "spear"];
  weaponChoser = Math.floor(Math.random() * 2.99);
  constructor() {
    this.type = "hero";
    this.name = "Emir";
    this.lifePoint = 200;
    this.strength = 0;
    this.attackStrength = 0;
    this.defenceStrength = 0;
    this.speed = 0;
    this.attackSpeed = 0;
    this.evasionSpeed = 0;
    this.weapon = this.weaponList[this.weaponChoser];
    this.amulet = {
      red: 0,
      green: 0,
      blue: 0,
    };
  }
}


