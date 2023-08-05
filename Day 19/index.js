const colorsArray = document.querySelectorAll(".color");
const guessColorText = document.querySelector("#guessColor");
const rgbColors = []; //insert generated colors
colorsArray.forEach((color) => {
  while (true) {
    const first = Math.floor(Math.random() * 256);
    const second = Math.floor(Math.random() * 256);
    const third = Math.floor(Math.random() * 256);
    const generatedColor = "rgb(" + first + ", " + second + ", " + third + ")";
    if (rgbColors.includes(generatedColor) === false) {
      rgbColors.push(generatedColor);
      color.style.backgroundColor = generatedColor;
      break;
    }
  }
});
const index = Math.floor(Math.random() * rgbColors.length);
const guessColor = rgbColors[index];
guessColorText.innerHTML = guessColor;

colorsArray.forEach((color) => {
  color.addEventListener("click", () => {
    const selectedcolor = color.style.backgroundColor;
    if (guessColor === selectedcolor) alert("You Won");
    else alert("Oops you fail");
  });
});
