
function lettersButton () {  
const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const letterDiv = document.getElementById("letters");
  letters.map((letter) => {
    const letterButton = document.createElement("button");
    letterDiv.appendChild(letterButton);
    letterButton.textContent=letter;
  });

}
document.addEventListener("DOMContentLoaded", lettersButton);