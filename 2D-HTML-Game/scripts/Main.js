document.addEventListener("DOMContentLoaded", function () {
  const hero = heroCaller(3);
  const enemy = enemyCaller(3);

  enemyRGBDistrubuter(enemy);

  const enemyBackground = document.querySelector(".item-3");
  const enemyColor = `rgb(${enemy.amulet.red}, ${enemy.amulet.green}, ${enemy.amulet.blue})`;
  enemyBackground.style.backgroundColor = enemyColor;



  
  function enemyRGBDistrubuter(enemy) {
    enemy.amulet.red = Math.floor(Math.random() * 225.99 + 30);
    enemy.amulet.green = Math.floor(Math.random() * 225.99 + 30);
    enemy.amulet.blue = Math.floor(Math.random() * 225.99 + 30);
  }

  function removeSelectedWeaponClass() {
    const weaponImages = document.querySelectorAll('.weapon-image');
    weaponImages.forEach(img => {
      img.classList.remove('selected-weapon');
    });
  }

  characterStatHtmlUpdater(hero);
  characterStatHtmlUpdater(enemy);

  const swordBtn = document.getElementById("katana");
  const axeBtn = document.getElementById("axe");
  const spearBtn = document.getElementById("spearForModal");

  swordBtn.onclick = function () {
    hero.weapon = "sword";
    removeSelectedWeaponClass();
    swordBtn.classList.add('selected-weapon');
    console.log("sword selected");
  };

  axeBtn.onclick = function () {
    hero.weapon = "axe";
    removeSelectedWeaponClass();
    axeBtn.classList.add('selected-weapon');
    console.log("axe selected");
  };

  spearBtn.onclick = function () {
    hero.weapon = "spear";
    removeSelectedWeaponClass();
    spearBtn.classList.add('selected-weapon');
    console.log("spear selected");
  };

  const rgbModal = document.getElementById("rgbModal");
  const rgbBtn = document.getElementById("amulet");

  const weaponModal = document.getElementById("weaponModal");
  const weaponBtn = document.getElementById("weapon");

  const statsModal = document.getElementById("statModal");
  const ringBtn = document.getElementById("ring");

  const rgbSpan = document.querySelectorAll(".close")[0];
  const weaponSpan = document.querySelectorAll(".close")[1];
  const statsSpan = document.querySelectorAll(".close")[2];
  const colorPicker = document.getElementById("colorPicker");
  const selectedColorValue = document.getElementById("selectedColorValue");

  weaponBtn.onclick = function () {
    weaponModal.style.display = "block";
  };

  rgbBtn.onclick = function () {
    rgbModal.style.display = "block";
  };

  ringBtn.onclick = function () {
    statsModal.style.display = "block";
  };

  rgbSpan.onclick = function () {
    rgbModal.style.display = "none";
  };

  weaponSpan.onclick = function () {
    weaponModal.style.display = "none";
  };

  statsSpan.onclick = function () {
    statsModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == rgbModal) {
      rgbModal.style.display = "none";
    }
    if (event.target == weaponModal) {
      weaponModal.style.display = "none";
    }
    if (event.target == statsModal) {
      statsModal.style.display = "none";
    }
  };

  colorPicker.oninput = function () {
    const formattedStats = hexToRgbString(colorPicker.value);
    selectedColorValue.textContent = formattedStats;
    document.getElementById("selectedColorValue").style.color =
      selectedColorValue.textContent;
    document.getElementById("character-grid").style.backgroundColor =
      selectedColorValue.textContent;
  };

  document.getElementById("fight-button").onclick = function () {
    amuletDistrubuter(hero);
    console.log(hero);
    console.log(enemy);
    

    battle(hero, enemy);
  };

  enemySrcChanger(enemy);
});