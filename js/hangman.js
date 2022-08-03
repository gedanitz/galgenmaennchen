"use strict";
const POINTS_PER_CHAR = 8;
const ALLOWED_MISTAKES = 5;
const DISPLAY_ID_POINTS = "noOfPoints";
const DISPLAY_ID_MISTAKES = "noOfAllowedMistakes";
const DISPLAY_ID_MASKED_SOLUTION = "maskedSolution";
const DISPLAY_ID_KEYBOARD = "keyboard";
const DISPLAY_ID_WON = "won";
const DISPLAY_ID_LOST = "lost";
const DISPLAY_ID_CANVAS = "screen";

let GAME;
let SCREEN;

window.addEventListener("load", gameLoaded)

function gameLoaded() {
  GAME = new HangmanGame();
  SCREEN = new Canvas(DISPLAY_ID_CANVAS);
  buildKeyboard();
  showValues();
}

function newGame() {
  GAME.points = 0;
  GAME.mistakes = 0;
  GAME.solution = getRandomWord();
  GAME.maskedSolution = maskWord(GAME.solution);
  SCREEN.clearCanvas();
  SCREEN.drawGallows();
  resetKeyboard();
  showValues();
}


function checkGameState() {
  if (GAME.outOfTrys()) {
    stateGameLost();
    revealSolution();
  }
  else if (GAME.isWordSolved()) {
    stateGameWon();
  }
}

function revealSolution() {
  for (const chr of GAME.solution) {
    unmask(chr);
  }
}

function addPoints() {
  GAME.points += POINTS_PER_CHAR;
}

function addMistake() {
  GAME.mistakes += 1;
  
  switch (GAME.mistakes) {
    case 1:
      SCREEN.drawHead();
      break;
    case 2:
      SCREEN.drawBody();
      break;
    case 3:
      SCREEN.drawLeftArm();
      break;
    case 4:
      SCREEN.drawRightArm();
      break;
    case 5:
      SCREEN.drawLeftLeg();
      break;
    case 6:
      SCREEN.drawRightLeg();
      break;
    default:
  }
}

  function showValues() {
    document.getElementById(DISPLAY_ID_POINTS).innerText = GAME.points;
    document.getElementById(DISPLAY_ID_MASKED_SOLUTION).innerText = GAME.maskedSolution;
    document.getElementById(DISPLAY_ID_MISTAKES).innerText = GAME.remainingMistakes;
  }
  
  function stateGameLost() {
    document.getElementById(DISPLAY_ID_KEYBOARD).style.visibility = "hidden";
    document.getElementById(DISPLAY_ID_LOST).style.visibility = "visible";
  }
  
  function stateGameWon() {
    document.getElementById(DISPLAY_ID_KEYBOARD).style.visibility = "hidden";
    document.getElementById(DISPLAY_ID_WON).style.visibility = "visible";
  }
  
  function hideEndDisplay() {
    document.getElementById(DISPLAY_ID_WON).style.visibility = "hidden";
    document.getElementById(DISPLAY_ID_LOST).style.visibility = "hidden";
  }