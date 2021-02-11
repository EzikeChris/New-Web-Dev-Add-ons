 // Create Secrete Number 
 var secretNumber = 50


// Guess a number 

var guess = Number(prompt('Guess a Number'));

if ((guess) === secretNumber) {
    alert('You guessed the right number');
}
 else if ((guess) > secretNumber) {
     alert("Number is To High");

 }
  else {
      alert("Number is To Low");
  } 