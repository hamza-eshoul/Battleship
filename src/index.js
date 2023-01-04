import { gameLoop } from "./gameLoop";

let myGameLoop = gameLoop();
myGameLoop.createFirstPlayerBoard();
myGameLoop.startGameButton();
myGameLoop.restartGameButton();
myGameLoop.autoPlaceShips();
myGameLoop.selfPlaceShips();
myGameLoop.resetGame();
