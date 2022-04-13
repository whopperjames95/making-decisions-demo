/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Anakin Skywalker and
    Count Dooku.
*/ 

let anakinAttack = 25;
let dookuAttack = 35;

if(anakinAttack > dookuAttack){
    console.log("Anakin has the bettter attack");
}

    else if(anakinAttack < dookuAttack){
        console.log("Count Dooku has the better attack.");
    }
else if(anakinAttack === dookuAttack){
    console.log("Anakin and Count Dooku have the same attack");
}

let anakinHealth = 100;

if(anakinHealth<= 0){
    console.log("Anakin has been slain.");
}else{
    anakinHealth = anakinHealth - dookuAttack;
    // anakinHealth -= dookuAttack;
    console.log(`Anakin's health is down to ${anakinHealth}.`);
    // console.log("Anakins health is down to" + anakinHealth);
}


if((anakinHealth + 50)>= 100) {
    anakinHealth = 100;
} else{
    anakinHealth += 50;
}


console.log(anakinHealth);

let coinLandsHeads = false;

if(coinLandsHeads === true){
    ("The fight continues.");
} else if(coinLandsHeads !== true) {
    console.log("Anakin is allowed to run away.");
}

// for(let i = 0; i < 5; i++) {
//     if(anakinHealth > 0) {
//     anakinHealth -= dookuAttack;
// console.log(`Anakin's health is now ${anakinHealth}.`);
//     } else {
//         console.log("Anakin is dead.");
//     }
// }    

// i = 0, anakinHealth = 65
// i = 1, anakinHealth = 30
// i = 2, anakinHealth = -5
// i = 3, anakinHealth = -40
// i = 4, anakinHealth = -75


while(anakinHealth > 0){
    anakinHealth -= dookuAttack;
    console.log(`Anakin's health is now ${anakinHealth}.`);
}