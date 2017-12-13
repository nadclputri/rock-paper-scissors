function computerMove() {
    let random = Math.floor((Math.random() * 3) + 1);
    let computer = random == 1 ? "rock" : (
                   random == 2 ? "paper" : "scissor"
    );

    return computer;
}

function singleRound(user, computer) {
    let winner= "none";
    
    if (user == "rock") {
        switch (computer) {
            case "rock":
                alert("Draw! Both players used rock!")
                winner = "none";
                break;
            case "paper": 
                alert("You lose! Paper beats rock!")
                winner = "computer";
                break;
            case "scissor":
                alert("You win! Rock beats scissor!")
                winner = "user";
                break;
        }
    } else if (user == "paper") {
        switch (computer) {
            case "paper":
                alert("Draw! Both players used paper!")
                winner = "none";
                break;
            case "scissor": 
                alert("You lose! Scissor beats paper!")
                winner = "computer";
                break;
            case "rock":
                alert("You win! Paper beats rock!")
                winner = "user";
                break;
        }
    } else if (user == "scissor") {
        switch (computer) {
            case "scissor":
                alert("Draw! Both players used scissor!")
                winner = "none";
                break;
            case "rock": 
                alert("You lose! Rock beats scissor!")
                winner = "computer";
                break;
            case "paper":
                alert("You win! Scissor beats paper!")
                winner = "user";
                break;
        }
    }
    
    return winner;
}

function game(userMove) {
    let score = document.getElementById("score").textContent;
    score = parseInt(score);
    let round = document.getElementById("round").textContent;
    round = parseInt(round);

    if (round == 5) {
        if (score > 0) {
            alert("Winner is user!");
            score = 0;
            round = 1;
        } else {
            alert("Winner is computer!");
            score = 0;
            round = 1;
        }
    } else {
        let computer = computerMove();
        let winner = singleRound(userMove, computer);
        
        if (winner == "user") {
            score++;
        } else if (winner == "computer") {
            score--;
        }

        round++;
    }

    document.getElementById("round").innerHTML = round;
    document.getElementById("score").innerHTML = score;
}