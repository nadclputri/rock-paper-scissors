function computerMove() {
    let random = Math.floor((Math.random() * 3) + 1);
    let computer = random == 1 ? "rock" : (
                   random == 2 ? "paper" : "scissor"
    );

    return computer;
}

function userMove() {
    let move = "none;"
    document.getElementById("rock").onclick = function(event) {
        move = "rock";
    };
    document.getElementById("paper").onclick = function(event) {
        move = "paper";
    };
    document.getElementById("scissor").onclick = function(event) {
        move = "scissor";
    };

    return move;
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

window.onload = function() {
    game();
}