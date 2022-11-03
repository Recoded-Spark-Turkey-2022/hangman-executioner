function lettersButton() {
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
    letterButton.textContent = letter;
  });
}
document.addEventListener("DOMContentLoaded", lettersButton);

fetch("https://random-word-api.herokuapp.com/word?number=1")
  .then((resp) => resp.json())
  .then((word) => {
    console.log(word);
    let newWord = word[0];
    console.log(newWord);
    const newArray = newWord.split("");
    console.log(newArray);

    newArray.map(() => {
      const eachLetter = document.createElement("span");
      eachLetter.textContent = "_ ";
      const letterBlank = document.querySelector(".wordLetter");
      letterBlank.appendChild(eachLetter);
    });
  });
