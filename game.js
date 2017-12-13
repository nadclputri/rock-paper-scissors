function computerMove() {
    let random = Math.floor((Math.random() * 3) + 1);
    let computer = random == 1 ? "rock" : (
                   random == 2 ? "paper" : "scissor"
    );

    return computer;
}

function game() {
    let currentRound = 1;
    let score = 0;

    while (currentRound < 6) {
        document.getElementById("round").innerHTML = "Round: " + currentRound + " / 5";
        let winner = round();

        if (winner == "user") {
            score++;
        } else if (winner == "computer") {
            score--;
        }

        document.getElementById("score").innerHTML = "Score: " + score;
    }
}