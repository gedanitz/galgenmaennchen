"use strict";
class HangmanGame {
  constructor() {
    this.points = 0;
    this.mistakes = 0;
    this.solution = getRandomWord();
    this.maskedSolution = maskWord(this._solution);
  }

  get points() {
    return this._points;
  }
  set points(x) {
    this._points = x;
  }

  get mistakes() {
    return this._mistakes;
  }
  set mistakes(x) {
    this._mistakes = x;
  }

  get solution() {
    return this._solution;
  }
  set solution(x) {
    this._solution = x;
  }

  get maskedSolution() {
    return this._maskedSolution;
  }
  set maskedSolution(x) {
    this._maskedSolution = x;
  }

  //auf welche weise greife ich am besten auf eigene Variablen zu?
  //drei bsp. in folgenden funktionen
  get remainingMistakes() {
    return ((ALLOWED_MISTAKES - this.mistakes) <= 0 ?
      0 :
      ALLOWED_MISTAKES - this.mistakes);
  }

  //das hier is schlecht, weil ich bei mehreren objekten der klasse probleme bekomme
  isWordSolved() {
    return GAME.maskedSolution.replace(/\s/g, "") === GAME.solution;
  }

  outOfTrys() {
    return this._mistakes > ALLOWED_MISTAKES;
  }
}

// gameWon() {
//   return this.solution === this.maskedSolution.replace(/\s/g,"");
// }

// gameLost(allowedMistakes) {
//   return this.mistakes > intAllowedMistakes;
// }

// addMistake() {
//   this.mistakes++;
// }

// addPoints() {
//   this.points += this.intPointsPerCorrectChar;
// }