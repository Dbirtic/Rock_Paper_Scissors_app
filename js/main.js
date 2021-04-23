const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    com: 0
}

// Play game
function play(e){
    restart.style.display = 'inline-block'
    const playerChoice = e.target.id;
    const comChoice = getComChoice();
    const winner = getWinner(playerChoice, comChoice);
    
    showWinner(winner, comChoice);
}

// Get Computers Choice
function getComChoice(){
    const rand = Math.random();
    if(rand < 0.34) {
        return 'rock';
    }
    else if(rand <= 0.67 && rand >= 0.34){
        return 'paper';
    } else if(rand > 0.67 && rand < 1){
        return 'scissors';
    }
}

// Get game winner
function getWinner(p, c){
    if(p === c){
        return 'draw';
    } else if(p === 'scissors' && c === 'rock'){
        return 'computer';
    } else if(p === 'scissors' && c === 'paper'){
        return 'player';
    } else if(p === 'rock' && c === 'scissors'){
        return 'player';
    } else if(p === 'rock' && c === 'paper'){
        return 'computer';
    } else if(p === 'paper' && c === 'rock'){
        return 'player';
    } else if(p === 'paper' && c === 'scissors'){
        return 'computer';
    }
}

// Show winner of the duel
function showWinner(winner, comChoice){
    if(winner === 'player'){
        // increment player score
        scoreboard.player++;

        // show modal result
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${comChoice} fa-10x"></i>
        <p>Computer chose <strong>${comChoice}</strong>!</p>`;
    } else if(winner === 'computer'){
        // increment player score
        scoreboard.com++;

        // show modal result
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${comChoice} fa-10x"></i>
        <p>Computer chose <strong>${comChoice}</strong>!</p>`;
    } else{
        // show modal result
        result.innerHTML = `
        <h1>It's a draw.</h1>
        <i class="fas fa-hand-${comChoice} fa-10x"></i>
        <p>Computer chose <strong>${comChoice}</strong>!</p>`;
    }
    // Show score
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.com}</p>`;

    modal.style.display = 'block';
}

// Restart Game
function restartGame(){
    scoreboard.player = 0;
    scoreboard.com = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>`;
}

// Clear modal
function clearModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);