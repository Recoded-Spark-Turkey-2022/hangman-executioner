const gameOver = document.querySelector("p#gameOver");
gameOver.classList.add("hidden");

const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let newArray = [];

const letterDiv = document.getElementById("letters");
letters.map((letter) => {
  const letterButton = document.createElement("button");
  letterDiv.appendChild(letterButton);
  letterButton.textContent = letter;
});
// Fetching new word
fetch("https://random-word-api.herokuapp.com/word?number=1")
  .then((resp) => resp.json())
  .then((word) => {
    //console.log(word);
    let newWord = word[0];
    //console.log(newWord);
    newArray = newWord.split("");
    console.log(newArray);

    newArray.map((currentValue, index) => {
      const eachLetter = document.createElement("span");
      eachLetter.setAttribute("id", index)
      eachLetter.textContent = "_ ";
      const letterBlank = document.querySelector(".wordLetter");
      letterBlank.appendChild(eachLetter);
    });
  });

// Click event listener
letterDiv.addEventListener("click", ifFounded)

function ifFounded (e) {
  e.target.disabled = true;
  if (newArray.includes(e.target.textContent)) {
    for (i=0; i < newArray.length; i++) {
      if (newArray[i] === e.target.textContent) {
        const targetSpan = document.getElementById(`${i}`)
        targetSpan.textContent = e.target.textContent
      }
    }
  } else {
    drawOneStep ();
    console.log("Not found!")
  }
}

// Live counter
let counter = 9;
const liveCounter = document.querySelector("p#liveCounter");

let steps = 0;
// const button = document.getElementById("button")
function drawOneStep () {
  if (steps === 0) {
    iShape();
    counter = counter - 1;
    liveCounter.textContent = `Your lives: ${counter}`;
    return steps = steps + 1;
    debugger
  } else if (steps === 1) {
    bottom();
    counter = counter - 1;
    liveCounter.textContent = `Your lives: ${counter}`;
    return steps = steps + 1;
    debugger
  } else if (steps === 2) {
    topSide();
    counter = counter - 1;
    liveCounter.textContent = `Your lives: ${counter}`;
    return steps = steps + 1;
  } else if (steps ===3) {
    head ();
    counter = counter - 1;
    liveCounter.textContent = `Your lives: ${counter}`;
    return steps = steps + 1;
  } else if (steps ===4) {
    body ();
    counter = counter - 1;
    liveCounter.textContent = `Your lives: ${counter}`;
    return steps = steps + 1;
  } else if (steps ===5) {
    rightArm ();
    counter = counter - 1;
    liveCounter.textContent = `Your lives: ${counter}`;
    return steps = steps + 1;
  } else if (steps === 6) {
    leftArm ();
    counter = counter - 1;
    liveCounter.textContent = `Your lives: ${counter}`;
    return steps = steps + 1;
  } else if (steps ===7) {
    rightLeg ();
    counter = counter - 1;
    liveCounter.textContent = `Your lives: ${counter}`;
    return steps = steps + 1;
  } else if (steps ===8) {
    leftLeg ();
    disablingButtons();
    counter = counter - 1;
    liveCounter.textContent = `Your lives: ${counter}`;
    gameOver.classList.remove("hidden")
    return steps = steps + 1;
  }
}

// Reset button
const reset = document.getElementById("reset")
reset.addEventListener("click", function () {
  /* ctx.clearRect(0, 0, canvas.width, canvas.height);
  steps = 0; */
  location.reload();
})

// Hangman drawing
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 3;

// I-shape
function iShape () {
  ctx.beginPath();
  ctx.moveTo(20,20);
  ctx.lineTo(20,100);
  ctx.stroke();
}

// bottom
function bottom () {
  ctx.beginPath();
  ctx.moveTo(20,100);
  ctx.lineTo(10,100);
  ctx.lineTo(70,100);
  ctx.stroke();
}

// top
function topSide () {
  ctx.beginPath();
  ctx.moveTo(20,20);
  ctx.lineTo(50,20);
  ctx.lineTo(50, 30);
  ctx.stroke();
}

// head
function head () {
  ctx.beginPath();
  ctx.arc(50, 40, 10, 0,Math.PI * 2);
  ctx.stroke();
}

// body
function body () {
  ctx.beginPath();
  ctx.moveTo(50,50);
  ctx.lineTo(50,80);
  ctx.stroke();
}

// right arm
function rightArm () {
  ctx.beginPath();
  ctx.moveTo(50,60);
  ctx.lineTo(60,70);
  ctx.stroke();
}

// left arm
function leftArm () {
  ctx.beginPath();
  ctx.moveTo(50,60);
  ctx.lineTo(40,70);
  ctx.stroke();
}

// right leg
function rightLeg () {
  ctx.beginPath();
  ctx.moveTo(50,80);
  ctx.lineTo(60,90);
  ctx.stroke();
}

// left leg
function leftLeg () {
  ctx.beginPath();
  ctx.moveTo(50,80);
  ctx.lineTo(40,90);
  ctx.stroke();
}

// Disabling buttons when live counter equal to zero
function disablingButtons () {
  for (i=0; i < letterDiv.children.length; i++) {
    letterDiv.children[i].disabled = true;
  }
}

