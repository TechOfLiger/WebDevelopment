// nested if else statement

// winning number 19

// 19 your guss is right
// 17 too low
// 20 too high

let winningNumber = 19;
let userGuess = prompt("guess a number");

if(userGuess == winningNumber) {
    console.log("your guess is right");
} else if(userGuess < winningNumber) {
    console.log("your guess is too low");
} else {
    console.log("your guess is too high");
}