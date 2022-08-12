// truthy and falsy values

// falsy values

// false
// ""
// null
// undefined
// 0

// if else in js

// let age = 19;
// if (age > 18) {
//     console.log("he is eligible");
    
// }
// else{
//     console.log("he is not eligible");
// }

// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

let winningNumber= 19;
let userGuess = +prompt("Guess a number");

// prompt will create a pop up small window in the browser
// prompt will only take a string for getting a number we have to write +prompt
if (userGuess === winningNumber){
    console.log("Your guess is right !!! ");
}
else{
    if(userGuess < winningNumber)
    {
        console.log("Too Loww !!! ");
    }
    else{
        console.log("Too high !!!");
    }
}




