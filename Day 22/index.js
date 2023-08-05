let y;
let guess;
function reset() {
  y = Math.floor(Math.random() * 10 + 1);
  guess = 1;
}
reset();
document.getElementById("submitguess").onclick = function () {
  let x = document.getElementById("guessField").value;

  if (x == y) {
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
    reset();
  } else if (x > y) {
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
  } else {
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
  }
};