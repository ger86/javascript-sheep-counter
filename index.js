let count = 0;
let button = document.getElementById("incrementSheeps");
let counterText = document.getElementById("counterText");

button.addEventListener("click", function () {
  count = count + 1;
  counterText.textContent = `${count}`;
});
