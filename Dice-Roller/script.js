
function getRandomDie() {
    // Returns an integer between 1 and 6 inclusive
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    const die1 = getRandomDie();
    const die2 = getRandomDie();
    const total = die1 + die2;

    // Update the read-only result fields
    document.getElementById('die1').value = die1;
    document.getElementById('die2').value = die2;
    document.getElementById('total').value = total;
}
