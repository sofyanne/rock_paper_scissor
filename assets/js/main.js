"use strict";

const dataGame = ["ROCK", "PAPER", "SCISSORS"];

const qSElt = (nameElt) => document.querySelector(`${nameElt}`);
const choice_p1 = qSElt(".battle_child.player-1");
const choice_p2 = qSElt(".battle_child.player-2");
const sectionChoice = qSElt("section.choice");
const scores_player1 = qSElt(".player-1_scores");
const scores_player2 = qSElt(".player-2_scores");
const reset_button = qSElt(".manage_game-reset");

let userResult = 0;
let computerResult = 0;

const rotate = (elt) => {
  elt.classList.add("rotate");
  setTimeout(() => {
    elt.classList.remove("rotate");
  }, 500);
};
const setChoice = (choice, elt) => {
  rotate(elt);
  elt.textContent = choice;
  elt.style.display = "block";
};

const setRandomChoice = (elt) => {
  rotate(elt);
  elt.textContent = dataGame[Math.floor(Math.random() * 3)];
  elt.style.display = "block";
};

const setPoints = () => {
  let userChoice = choice_p1.textContent;
  let computerChoice = choice_p2.textContent;

  if (
    (userChoice == "ROCK" && computerChoice == "SCISSORS") ||
    (userChoice == "PAPER" && computerChoice == "ROCK") ||
    (userChoice == "SCISSORS" && computerChoice == "PAPER")
  ) {
    userResult += 1;
  }

  if (
    (computerChoice == "ROCK" && userChoice == "SCISSORS") ||
    (computerChoice == "PAPER" && userChoice == "ROCK") ||
    (computerChoice == "SCISSORS" && userChoice == "PAPER")
  ) {
    computerResult += 1;
  }

  scores_player1.textContent = userResult;
  scores_player2.textContent = computerResult;
};

const app = () => {
  sectionChoice.addEventListener("click", (e) => {
    let event = e.target.closest("div");
    if (event) {
      setChoice(event.innerText, choice_p1);
      setRandomChoice(choice_p2);
      setPoints();
    }
  });

  reset_button.addEventListener("click", (e) => {
    location.reload();
  });
};

app();
