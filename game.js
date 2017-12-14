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
        let playerUser = document.getElementById("player-user");
        let playerComputer = document.getElementById("player-computer");
        
        playerUser.classList.replace("fa-hand-scissors", "fa-hand-rock");
        playerUser.classList.replace("fa-hand-paper", "fa-hand-rock");
        switch (computer) {
            case "rock":
                playerComputer.classList.replace("fa-hand-scissors", "fa-hand-rock");
                playerComputer.classList.replace("fa-hand-paper", "fa-hand-rock");
                alert("Draw! Both players used rock!")
                winner = "none";
                break;
            case "paper": 
                playerComputer.classList.replace("fa-hand-scissors", "fa-hand-paper");
                playerComputer.classList.replace("fa-hand-rock", "fa-hand-paper");
                alert("You lose! Paper beats rock!")
                winner = "computer";
                break;
            case "scissor":
                playerComputer.classList.replace("fa-hand-rock", "fa-hand-scissors");
                playerComputer.classList.replace("fa-hand-paper", "fa-hand-scissors");
                alert("You win! Rock beats scissor!")
                winner = "user";
                break;
        }
    } else if (user == "paper") {
        let playerUser = document.getElementById("player-user");
        let playerComputer = document.getElementById("player-computer");
        
        playerUser.classList.replace("fa-hand-scissors", "fa-hand-paper");
        playerUser.classList.replace("fa-hand-rock", "fa-hand-paper");
        switch (computer) {
            case "paper":
                playerComputer.classList.replace("fa-hand-scissors", "fa-hand-paper");
                playerComputer.classList.replace("fa-hand-rock", "fa-hand-paper");
                alert("Draw! Both players used paper!")
                winner = "none";
                break;
            case "scissor": 
                playerComputer.classList.replace("fa-hand-rock", "fa-hand-scissors");
                playerComputer.classList.replace("fa-hand-paper", "fa-hand-scissors");
                alert("You lose! Scissor beats paper!")
                winner = "computer";
                break;
            case "rock":
                playerComputer.classList.replace("fa-hand-scissors", "fa-hand-rock");
                playerComputer.classList.replace("fa-hand-paper", "fa-hand-rock");
                alert("You win! Paper beats rock!")
                winner = "user";
                break;
        }
    } else if (user == "scissor") {
        let playerUser = document.getElementById("player-user");
        let playerComputer = document.getElementById("player-computer");

        playerUser.classList.replace("fa-hand-paper", "fa-hand-scissors");
        playerUser.classList.replace("fa-hand-rock", "fa-hand-scissors");
        switch (computer) {
            case "scissor":
                playerComputer.classList.replace("fa-hand-rock", "fa-hand-scissors");
                playerComputer.classList.replace("fa-hand-paper", "fa-hand-scissors");
                alert("Draw! Both players used scissor!")
                winner = "none";
                break;
            case "rock": 
                playerComputer.classList.replace("fa-hand-scissors", "fa-hand-rock");
                playerComputer.classList.replace("fa-hand-paper", "fa-hand-rock");
                alert("You lose! Rock beats scissor!")
                winner = "computer";
                break;
            case "paper":
                playerComputer.classList.replace("fa-hand-scissors", "fa-hand-paper");
                playerComputer.classList.replace("fa-hand-rock", "fa-hand-paper");
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
        let computer = computerMove();
        let winner = singleRound(userMove, computer);
        
        if (winner == "user") {
            score++;
        } else if (winner == "computer") {
            score--;
        }

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