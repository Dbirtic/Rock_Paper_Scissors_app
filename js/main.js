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

}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));