let enemyHealth = document.getElementById('enemy-health');
let enemyMana = document.getElementById('enemy-mana');

let playerHealth = document.getElementById('player-health');
let playerMana = document.getElementById('player-mana');

let enHealth = 150;
let enMana = 100;

let plHealth = 150;
let plMana = 100;

let attack = 15;
let critdamage = 2;
let heal = 10;
let cost = 20;

// player attack
function plAttack() {
    c = Math.floor(Math.random() * 10);
    if (c % 2 == 0) {
        enHealth -= attack;
        console.log("Baby nightmare unicorn deals 15 damage");
    } else {
        enHealth -= critdamage * attack;
        console.log("Baby nightmare unicorn deals 30 damage");
    }
}
// enemy attack
function enAttack() {
    c = Math.floor(Math.random() * 10);
    if (c % 2 == 0) {
        plHealth -= attack;
        console.log("Baby unicorn deals 15 damage");
    } else {
        plHealth -= critdamage * attack;
        console.log("Baby unicorn deals 30 damage");
    }
}

// enemy maakt een keuze
function enemyChoice() {
    i = Math.floor(Math.random() * 2);
    if (i == 1) {
       enemyAttack();
    } else {
       enemyHeal();
    }
   }
// enemy valt aan
   function enemyAttack() {
    enAttack();
    playerRefreshUI();
}
// enemy healt zichzelf
function enemyHeal() {
    if (enMana >= 20) {
        enMana -= cost;
        enHealth += heal;
        console.log("Baby unicorn heals himself for 10 health");
        enemyRefreshUI();
    }
    
}
// aanvallen van de speler
console.log("players turn");
function clickAttack() {
    plAttack();
    enemyRefreshUI();

    setTimeout(function(){
        console.log("enemy's turn");
        setTimeout(function(){
            console.log("waiting...");
            setTimeout(function(){
                enemyChoice();
                setTimeout(function(){
                    console.log("players turn");
                }, 3000)
            }, 3000); 
        }, 0)
    }, 100); 

    if (plHealth <= 0) {
        console.log("Your unicorn died");
        console.log("Defeat");
    } else if (enHealth <= 0) {
        console.log("Enemies unicorn died");
        console.log("Victory");
    }
}
// healen van de speler
function clickHeal() {
    if (plHealth < 150) {
        if (plMana >= 20) {
            plMana -= cost;
            plHealth += heal;
            console.log("Baby nightmare unicorn heals himself for 10 health");
            playerRefreshUI();

            setTimeout(function(){
                console.log("enemy's turn");
                setTimeout(function(){
                    console.log("waiting...");
                    setTimeout(function(){
                        enemyChoice();
                        setTimeout(function(){
                            console.log("players turn");
                        }, 3000);
                    }, 3000);
                }, 0);
            }, 100);
        }
    } else {
        console.log("Baby nightmare unicorn's health is already full");
    }

    if (plHealth <= 0) {
        console.log("Your unicorn died");
        console.log("Defeat");
    } else if (enHealth <= 0) {
        console.log("Enemies unicorn died");
        console.log("Victory");
    }
}
// alles wat er onder staat gaat gelijk refreshen
function enemyRefreshUI() {
    enemyHealth.innerHTML = enHealth;
    enemyMana.innerHTML = enMana;
}

function playerRefreshUI() {
    playerHealth.innerHTML = plHealth;
    playerMana.innerHTML = plMana;
}