import { gameBoard } from "../src/gameBoard";

function displayModal(gameWinner) {
  const myModal = document.querySelector(".myModal");
  myModal.style.display = "block";

  const winner = document.querySelector(".myWinner");
  winner.textContent = `${gameWinner}`;
}

export { displayModal };
