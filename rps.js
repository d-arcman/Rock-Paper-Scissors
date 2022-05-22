
function computerPlay () {
    var answers = [
    'rock',
    'paper',
    'scissors'
    ]

    let myAnswer = answers[Math.floor(Math.random()* answers.length)]
    return(myAnswer);
}
console.log(computerPlay());