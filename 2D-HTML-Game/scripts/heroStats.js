let freeStats = 10;
let strength = 0;
let speed = 0;
let lifepoint = 0;

let attackStrength = 0;
let defenceStrength = 0;
let attackSpeed = 0;
let evasionSpeed = 0;

let freeStrengthStats = 0;
let freeSpeedStats = 0;

function updateDisplay() {
    document.getElementById('freeStats').innerText = freeStats;
    document.getElementById('strength').innerText = strength;
    document.getElementById('speed').innerText = speed;
    document.getElementById('lifepoint').innerText = lifepoint;

    document.getElementById('attackStrength').innerText = attackStrength;
    document.getElementById('defenceStrength').innerText = defenceStrength;
    document.getElementById('attackSpeed').innerText = attackSpeed;
    document.getElementById('evasionSpeed').innerText = evasionSpeed;

    document.getElementById('freeStrengthStats').innerText = freeStrengthStats;
    document.getElementById('freeSpeedStats').innerText = freeSpeedStats;
}

function increaseStat(stat) {
    if (freeStats > 0) {
        if (stat === 'strength') {
            strength++;
            attackStrength += 0.5;
            defenceStrength += 0.5;
            freeStrengthStats += 0.5;
        } else if (stat === 'speed') {
            speed++;
            attackSpeed += 0.5;
            evasionSpeed += 0.5;
            freeSpeedStats += 0.5;
        } else if (stat === 'lifepoint') {
            lifepoint++;
        }
        freeStats--;
        updateDisplay();
    }
}

function decreaseStat(stat) {
    if (stat === 'strength' && strength > 0) {
        strength--;
        attackStrength -= 0.5;
        defenceStrength -= 0.5;
        freeStrengthStats -= 0.5;
        freeStats++;
    } else if (stat === 'speed' && speed > 0) {
        speed--;
        attackSpeed -= 0.5;
        evasionSpeed -= 0.5;
        freeSpeedStats -= 0.5;
        freeStats++;
    } else if (stat === 'lifepoint' && lifepoint > 0) {
        lifepoint--;
        freeStats++;
    }
    updateDisplay();
}

function increaseSubStat(stat) {
    if (stat === 'attackStrength' && freeStrengthStats > 0) {
        attackStrength++;
        freeStrengthStats--;
    } else if (stat === 'defenceStrength' && freeStrengthStats > 0) {
        defenceStrength++;
        freeStrengthStats--;
    } else if (stat === 'attackSpeed' && freeSpeedStats > 0) {
        attackSpeed++;
        freeSpeedStats--;
    } else if (stat === 'evasionSpeed' && freeSpeedStats > 0) {
        evasionSpeed++;
        freeSpeedStats--;
    }
    updateDisplay();
}

function decreaseSubStat(stat) {
    if (stat === 'attackStrength' && attackStrength > strength / 2) {
        attackStrength--;
        freeStrengthStats++;
    } else if (stat === 'defenceStrength' && defenceStrength > strength / 2) {
        defenceStrength--;
        freeStrengthStats++;
    } else if (stat === 'attackSpeed' && attackSpeed > speed / 2) {
        attackSpeed--;
        freeSpeedStats++;
    } else if (stat === 'evasionSpeed' && evasionSpeed > speed / 2) {
        evasionSpeed--;
        freeSpeedStats++;
    }
    updateDisplay();
}
