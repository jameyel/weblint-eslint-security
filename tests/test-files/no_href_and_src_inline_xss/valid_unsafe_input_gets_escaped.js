// Example script input: javascript:alert('Hacked!');
let userInput = prompt("What input do you like?");

// Create text link
let a = document.createElement("a");
const btn = document.createTextNode("Click here");
a.appendChild(btn);

// Assign link destination to an escaped version of the unsafe user input
a.href = userInput.toLowerCase().replace('javascript:', '/javascript/:/');

document.body.appendChild(a);
