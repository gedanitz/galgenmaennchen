"use strict";
const WORDBANK = ["Atlantis",
  "Bernstein",
  "Clojure",
  "Doctronic",
  "Elfenbeinküste",
  "Frankenstein",
  "Gamaschen",
  "Homoikonizität",
  "Interferometrie",
  "Jadezeit",
  "Kultstätte",
  "Lorbeerkranz",
  "Mineralwasser",
  "Nautik",
  "Orthographie",
  "Perseiden",
  "Quantencomputer",
  "Refugium",
  "Stratosphäre",
  "Tenside",
  "Ukulele",
  "Vulkanologie",
  "Wurmloch",
  "Xylophon",
  "Ypsilon",
  "Zahnzusatzversicherung"];

function getRandomWord() {
  return WORDBANK[Math.floor(Math.random() * WORDBANK.length)];
}

function maskWord(word) {
  return word.replace(/./g, "_ ").trim();
}

function unmask(chrVal) {
  // let strMaskedSolution;
  // let intIndex;
  // let strSearchIn;
  // let newMask;

  
  // strSearchIn = GAME.solution;
  // strMaskedSolution = GAME.maskedSolution;
  // intIndex = strSearchIn.indexOf(chrVal);
  // while ((intIndex >= 0) &&
  //        (intIndex <= strSearchIn.length)) {
  //   newMask = strMaskedSolution.substring(0, intIndex * 2) +
  //             chrVal +
  //             strMaskedSolution.substring((intIndex * 2) + 1);
  //   strMaskedSolution = newMask;
  //   intIndex = strSearchIn.indexOf(chrVal, intIndex + 1);
  // }
  // GAME.maskedSolution = strMaskedSolution;

  for(let index = GAME.solution.indexOf(chrVal);
      index != -1;
      index = GAME.solution.indexOf(chrVal, index + 1)) {
    GAME.maskedSolution = GAME.maskedSolution.substring(0, index * 2) +
                          chrVal +
                          GAME.maskedSolution.substring((index * 2) + 1);
  }

}