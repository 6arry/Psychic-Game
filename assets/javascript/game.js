// List all the answers
// List all types of results as variables
// How to make the user/player input a choice
// How to make the copmuter make a choice
// Store the choices
// Give conditions for each choice,
// With each choice let there be a win, loss, take away a guess
// Display the result to the user


var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0,
    losses = 0,
    guessesLeft = 9,
    used = [];

    document.onkeyup = function() {
        var myGuess = String.fromCharCode(event.keyCode).toLowerCase();
        // console.log("Your letter was --> " + myGuess)

    var computerGuess = choices[Math.floor(Math.random()*choices.length)];
        // console.log("Computer's letter was --> " + computerGuess)

    if (myGuess == computerGuess) {
        wins++;
        guessesLeft = 9;
        used = [];
    }
    else {
        guessesLeft--;
    }
        // console.log("Wins: " + wins)
        // console.log("Losses: " + losses)
        // console.log("Guesses Remaining: " + guessesLeft)

    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 9;
        used = [];
    }

        //the 'push' property pushes myGuess in the the 'used' array and stores it there until i reset the array back to nothing inside of it ("used = []")
    if (used.indexOf(myGuess) >= 0) {
    } else {
          used.push(myGuess);
        //   console.log(used);
    }

    var results = 
    "<p>Wins: " + wins + "</p>" + 
    "<p>Losses " + losses + "</p>" + 
    "<p>Guesses Remaining: " + guessesLeft + "</p>"  + 
    "<p>Your guess was: " + used + "</p>";

    document.querySelector("#results").innerHTML = results;
}