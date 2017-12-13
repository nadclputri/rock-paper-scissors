function game() {
    let currentRound = 1;
    let score = 0;

    while (currentRound < 6) {
        document.getElementById("round").innerHTML = "Round: " + currentRound + " / 5";
    }
}