// Put your code here/**


/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 0; i < 10; i++) {
    let die1 = getRandomInt();
    let die2 = getRandomInt();

    if (die1 === die2) {
        console.log(`${die1} + ${die2} DOUBLES!`)
    } else {
        console.log(`${die1} + ${die2}`)
    }
}
// console.log(rollDice())