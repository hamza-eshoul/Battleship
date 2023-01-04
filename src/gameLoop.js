import { gameBoard, placeRandomPlayer, populateCubes } from "./gameBoard";

const gameLoop = () => {
  function createFirstPlayerBoard() {
    let playerContainer = document.getElementById("board1");
    let x = 1;
    let y = 1;
    let z = 1;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cubeDiv = document.createElement("div");
        cubeDiv.classList.add("cube");
        cubeDiv.classList.add("text-dark");
        cubeDiv.dataset.player = x;
        cubeDiv.dataset.order = x;
        cubeDiv.dataset.row = y;
        cubeDiv.dataset.col = z;
        playerContainer.appendChild(cubeDiv);
        x += 1;
        z += 1;
      }

      y += 1;
      z = 1;
    }
  }

  function createSecondPlayerBoard() {
    let playerContainer = document.getElementById("board2");
    let x = 1;
    let y = 1;
    let z = 1;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cubeDiv = document.createElement("div");
        cubeDiv.classList.add("cube");
        cubeDiv.classList.add("text-dark");
        cubeDiv.dataset.computer = x;
        cubeDiv.dataset.order = x;
        cubeDiv.dataset.row = y;
        cubeDiv.dataset.col = z;
        playerContainer.appendChild(cubeDiv);
        x += 1;
        z += 1;
      }

      y += 1;
      z = 1;
    }
  }

  function showSecondBoard() {
    let myBoard = document.querySelector(".second-selection");
    myBoard.classList.remove("d-none");
  }

  function showPlayerTurns() {
    let myPlayerTurn = document.getElementById("playerTurns");
    myPlayerTurn.classList.remove("d-none");
  }

  function startGame() {
    createSecondPlayerBoard();

    const myNewGame = gameBoard();
    myNewGame.receiveAttack("player", myNewGame.myShipsArray1);
    myNewGame.receiveAttack("computer", myNewGame.myShipsArray2);

    showSecondBoard();
    showPlayerTurns();
    myNewGame.switchPlayerTurns();

    let myButtonSection = document.querySelector(".myButtons");
    myButtonSection.classList.add("none");
  }

  function startGameButton() {
    const myStartGameBtn = document.getElementById("start");
    myStartGameBtn.addEventListener("click", () => {
      startGame();
      myStartGameBtn.classList.add("no-point");
    });
  }

  function restartGameButton() {
    const myRestartGameBtn = document.querySelector(".myBtn");
    myRestartGameBtn.addEventListener("click", () => {
      location.reload();
    });
  }

  function autoPlaceShips() {
    const autoPlaceBtn = document.getElementById("auto-place");
    autoPlaceBtn.addEventListener("click", () => {
      let myPlayerCubes = document.querySelectorAll("[data-player]");
      myPlayerCubes.forEach((e) => {
        if (e.classList.contains("bg-primary")) {
          e.classList.remove("bg-primary");
        }
      });
      placeRandomPlayer();
    });
  }

  function selfPlaceShips() {
    const selfPlaceBtn = document.getElementById("self-place");
    selfPlaceBtn.addEventListener("click", () => {
      populateCubes();
    });
  }

  function resetGame() {
    const resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", () => {
      location.reload();
    });
  }

  return {
    createFirstPlayerBoard,
    startGame,
    startGameButton,
    restartGameButton,
    autoPlaceShips,
    selfPlaceShips,
    resetGame,
  };
};

export { gameLoop };
