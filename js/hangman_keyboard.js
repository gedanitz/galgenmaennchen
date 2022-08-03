"use strict";
const KEYBOARD = [
  "A", "B", "C", "D", "E", "F", "G",
  "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U",
  "V", "W", "X", "Y", "Z", "a", "b",
  "c", "d", "e", "f", "g", "h", "i",
  "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w",
  "x", "y", "z", "Ä", "Ö", "Ü", "ä",
  "ö", "ü", "ß"];

function charClick(btnObj) {
  if (tryChar(btnObj.value)) {
    handleCharPresent(btnObj);
  }
  else {
    addMistake();
  }
  checkGameState();
  showValues();
}

function tryChar(chrVal) {
  return GAME.solution.indexOf(chrVal) >= 0;
}

function handleCharPresent(btnObj) {
  unmask(btnObj.value);
  addPoints();
  btnObj.disabled = true;
}

function resetKeyboard() {
  hideEndDisplay();
  resetKeys();
}

function resetKeys() {
  let objKeyboard;
  let objKeys;

  objKeyboard = document.getElementById(DISPLAY_ID_KEYBOARD);
  objKeyboard.style.visibility = "visible";
  objKeys = Array.from(objKeyboard.children);
  objKeys.forEach(enableKey);
}

function enableKey(obj) {
  obj.disabled = false;
}

function buildKeyboard() {
  let keyboardDiv = document.getElementById(DISPLAY_ID_KEYBOARD);

  //beide Varianten behalten die Reihenfolge der Elemente bei

  // for (let i = 0; i < KEYBOARD.length; i++) {
  //   keyboardDiv.appendChild(buildKeyButton(KEYBOARD[i]));
  // }
  for (const elem of KEYBOARD) {
    keyboardDiv.appendChild(buildKeyButton(elem));
  }

  // KEYBOARD.forEach(buildKeyButton);
}

function buildKeyButton(chr) {
  let btnObj;

  btnObj = document.createElement("button");
  btnObj.type = "button";
  btnObj.value = chr;
  btnObj.innerText = chr;
  btnObj.onclick = function () { charClick(this); };

  return btnObj;
}