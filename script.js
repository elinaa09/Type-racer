const typingText = document.querySelector(".typing-text p");
const inpField = document.querySelector(".input-field");
const timeTag = document.querySelector(".time span b");
const mistakeTag = document.querySelector(".mistake span");
const wpmTag = document.querySelector(".wpm span");
const cpmTag = document.querySelector(".cpm span");
const tryAgainBtn = document.querySelector("button");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistakes = 0;
let isTyping = false;

function randomParagraph() {
  
  let randIndex = Math.floor(Math.random() * paragraphs.length);
  typingText.innerHTML = "";

  paragraphs[randIndex].split("").forEach(function (letter) {
    typingText.innerHTML += "<span>" + letter + "</span>";
  });

   typingText.querySelectorAll("span")[0].classList.add("active");

   document.addEventListener("keydown", function () {
     inpField.focus();
  });
  typingText.addEventListener("click", function () {
    inpField.focus();
  });
}

function initTyping() {
  const characters = typingText.querySelectorAll("span");
  const typedchar = inpField.value.split("")[charIndex];

  if (charIndex < characters.length - 1 && timeLeft > 0) {

    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }

     if (typedChar == null) {
      // user pressed Backspace
      if (charIndex > 0) {
        charIndex--;
        // if the letter was wrong, take one mistake away
        if (characters[charIndex].classList.contains("incorrect")) {
          mistakes--;
        }

function newSentence() {
  var number = Math.floor(Math.random() * sentences.length);
  currentSentence = sentences[number];
  sentenceBox.textContent = currentSentence;
}

characters[charIndex].classList.remove("correct", "incorrect");
      }
    } else {
      // check if the typed letter matches
      if (characters[charIndex].innerText == typedChar) {
        characters[charIndex].classList.add("correct");
      } else {
        mistakes++;
        characters[charIndex].classList.add("incorrect");
      }
      charIndex++;
    }

function getAccuracy() {
  var typed = inputBox.value;
  var correct = 0;
 
  for (var i = 0; i < typed.length; i++) {
    if (typed[i] === currentSentence[i]) {
      correct = correct + 1;
    }
  }

if (typed.length === 0) {
    return 100;
}

return Math.round((correct / typed.length) * 100);
}





