"use strict";

const qSElt = (nameElt) => document.querySelector(`${nameElt}`);
const choice_p1 = qSElt(".battle_child.player-1");
const choice_p2 = qSElt(".battle_child.player-2");
const rock_button = qSElt(".choice_child.rock");
const paper_button = qSElt(".choice_child.paper");
const scissors_button = qSElt(".choice_child.scissors");
const scores_player1 = qSElt(".player-1_scores");
const scores_player2 = qSElt(".player-2_scores");
const reset_button = qSElt(".manage_game-reset");

const setChoice = (choice, elt) => {
  elt.textContent = choice;
  elt.style.display = "block";
};

const app = () => {
  //Tester event delegation.
  let userChoice = "";
  rock_button.addEventListener("click", (e) => {
    setChoice(e.target.innerText, choice_p1);
    setChoice(e.target.innerText, choice_p2);
  });
  paper_button.addEventListener("click", (e) => {
    setChoice(e.target.innerText, choice_p1);
    setChoice(e.target.innerText, choice_p2);
  });
  scissors_button.addEventListener("click", (e) => {
    setChoice(e.target.innerText, choice_p1);
    setChoice(e.target.innerText, choice_p2);
  });
};

app();
