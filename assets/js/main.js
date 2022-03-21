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

const setUserChoice = (choice) => {
  choice_p1.textContent = choice;
  choice_p1.style.display = "block";
};

const setComputerChoice = (choice) => {
  choice_p2.textContent = choice;
  choice_p2.style.display = "block";
};

const app = () => {
  //Tester event delegation.
  let userChoice = "";
  rock_button.addEventListener("click", (e) => {
    setUserChoice(e.target.innerText);
    setComputerChoice(e.target.innerText);
  });
  paper_button.addEventListener("click", (e) => {
    setUserChoice(e.target.innerText);
    setComputerChoice(e.target.innerText);
  });
  scissors_button.addEventListener("click", (e) => {
    setUserChoice(e.target.innerText);
    setComputerChoice(e.target.innerText);
  });
};

app();
