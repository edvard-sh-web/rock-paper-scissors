const choices = ["rock", "paper", "scissors"]
let score = {
    player: 0,
    computer: 0
}

function game(){
    while((score.player + score.computer) < 5){
    console.log(playSingleRound(getPlayerChoice(), getComputerChoice()))
    }
    console.log(score)
    console.log(score.player > score.computer ? "You won!" : "You lost!")
    
}

function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)]
    return choice
}

function getPlayerChoice() {
    const choice = prompt("Write rock, paper or scissors").toLowerCase().trim()
    console.log(choice)
    return choice
}

function playSingleRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return (`It's a tie! ${capitalize(playerChoice)} ties with ${capitalize(computerChoice)}`)
    }
    if(playerChoice === "rock" && computerChoice === "paper"){
        score.computer += 1
        return (`You lose! Paper beats Rock.`)
    }
    if(playerChoice === "rock" && computerChoice === "scissors"){
        score.player += 1
        return (`You win! Rock beats Scissors.`)
    }
    if(playerChoice === "paper" && computerChoice === "rock"){
        score.player += 1
        return (`You win! Paper beats Rock.`)
    }
    if(playerChoice === "paper" && computerChoice === "scissors"){
        score.computer += 1
        return (`You lose! Scissors beat Paper.`)
    }
    if(playerChoice === "scissors" && computerChoice === "rock"){
        score.computer += 1
        return (`You lose! Rock beats Scissors.`)
    }
    if(playerChoice === "scissors" && computerChoice === "paper"){
        score.player += 1
        return (`You win! Scissors beat Paper.`)
    }
}

function capitalize(word) {
    const firstLetter = word.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = word.slice(1)

    return (firstLetterCap + remainingLetters)
}

game()