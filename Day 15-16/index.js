const cycleText = document.querySelector(".cycle");
const img = document.querySelector(".img");
const submitButton = document.querySelector(".submit");
const input = document.querySelector(".input");

const showImage = () => {
  img.style.display = "block";
};

const hideImage = () => {
  img.style.display = "none";
};

const showPopup = () => {
  if (input.value.length > 0)
    alert("Your email has been submitted: " + input.value);
  else alert("Please enter the Email");
};

cycleText.addEventListener("mouseover", showImage);
cycleText.addEventListener("mouseout", hideImage);

submitButton.addEventListener("click", showPopup);
