/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/winnerModal.js":
/*!*****************************!*\
  !*** ./dist/winnerModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayModal": () => (/* binding */ displayModal)
/* harmony export */ });
/* harmony import */ var _src_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/gameBoard */ "./src/gameBoard.js");


function displayModal(gameWinner) {
  const myModal = document.querySelector(".myModal");
  myModal.style.display = "block";

  const winner = document.querySelector(".myWinner");
  winner.textContent = `${gameWinner}`;
}




/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameBoard": () => (/* binding */ gameBoard),
/* harmony export */   "placeRandomPlayer": () => (/* binding */ placeRandomPlayer),
/* harmony export */   "populateCubes": () => (/* binding */ populateCubes)
/* harmony export */ });
/* harmony import */ var _ship_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-factory */ "./src/ship-factory.js");
/* harmony import */ var _dist_winnerModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/winnerModal */ "./dist/winnerModal.js");



let coordinates1 = [];
let coordinates2 = [];

const gameBoard = () => {
  let isPlayer1Sunk = false;
  let isComputerSunk = false;

  function placeShip() {
    placeRandomComputer();
  }

  placeShip();

  let ship1 = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__.createShip)(5, [
    +coordinates1[0],
    +coordinates1[1],
    +coordinates1[2],
    +coordinates1[3],
    +coordinates1[4],
  ]);
  let ship2 = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__.createShip)(4, [
    +coordinates1[5],
    +coordinates1[6],
    +coordinates1[7],
    +coordinates1[8],
  ]);
  let ship3 = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__.createShip)(3, [
    +coordinates1[9],
    +coordinates1[10],
    +coordinates1[11],
  ]);
  let ship4 = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__.createShip)(3, [
    +coordinates1[12],
    +coordinates1[13],
    +coordinates1[14],
  ]);
  let ship5 = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__.createShip)(2, [+coordinates1[15], +coordinates1[16]]);

  let ship6 = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__.createShip)(5, [
    +coordinates2[0],
    +coordinates2[1],
    +coordinates2[2],
    +coordinates2[3],
    +coordinates2[4],
  ]);
  let ship7 = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__.createShip)(4, [
    +coordinates2[5],
    +coordinates2[6],
    +coordinates2[7],
    +coordinates2[8],
  ]);
  let ship8 = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__.createShip)(3, [
    +coordinates2[9],
    +coordinates2[10],
    +coordinates2[11],
  ]);
  let ship9 = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__.createShip)(3, [
    +coordinates2[12],
    +coordinates2[13],
    +coordinates2[14],
  ]);
  let ship10 = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__.createShip)(2, [+coordinates2[15], +coordinates2[16]]);

  const myShipsArray1 = [ship1, ship2, ship3, ship4, ship5];
  const myShipsArray2 = [ship6, ship7, ship8, ship9, ship10];

  function receiveAttack(player, shipArray) {
    let myCubes = document.querySelectorAll(`[data-${player}`);
    myCubes.forEach(function (e) {
      e.addEventListener("click", function () {
        let myOrder = +e.dataset.order;
        if (
          e.classList.contains("bg-primary") ||
          e.classList.contains("bg-successe")
        ) {
          for (let i = 0; i < 5; i++) {
            if (shipArray[i].coordinates.includes(myOrder)) {
              e.classList.add("bg-danger");
              e.classList.add("no-pointer");
              shipArray[i].hit();
              reportSinkStatus();
            }
          }
          switchPlayerTurns();
        } else {
          e.classList.add("no-pointer");
          e.classList.add("bg-warning");
          e.innerHTML = '<i class="fa-solid fa-bomb fa-lg"> </i>';
          switchPlayerTurns();
        }
      });
    });
  }

  function reportSinkStatus() {
    if (
      ship1.isSunkStatus == true &&
      ship2.isSunkStatus == true &&
      ship3.isSunkStatus == true &&
      ship4.isSunkStatus == true &&
      ship5.isSunkStatus == true
    ) {
      myInstance.isPlayer1Sunk = true;
      (0,_dist_winnerModal__WEBPACK_IMPORTED_MODULE_1__.displayModal)("The Computer");
    } else if (
      ship6.isSunkStatus == true &&
      ship7.isSunkStatus == true &&
      ship8.isSunkStatus == true &&
      ship9.isSunkStatus == true &&
      ship10.isSunkStatus == true
    ) {
      myInstance.isComputerSunk = true;
      (0,_dist_winnerModal__WEBPACK_IMPORTED_MODULE_1__.displayModal)("You");
    }
  }

  function switchPlayerTurns() {
    let myPlayerTurn = document.getElementById("playerHeader");

    if (myPlayerTurn.textContent.includes("Computer")) {
      myPlayerTurn.textContent = "Sink Them All !";
      let myPlayerCubes = document.querySelectorAll("[data-player");
      myPlayerCubes.forEach((e) => {
        e.classList.add("no-pointer-switch");
      });
      let myComputerCubes = document.querySelectorAll("[data-computer");
      myComputerCubes.forEach((e) => {
        e.classList.remove("no-pointer-switch");
      });
    } else if (myPlayerTurn.textContent.includes("Sink")) {
      myPlayerTurn.textContent = "This is the turn of the Computer";
      computerRandomPlay();
    }
  }

  const myInstance = {
    placeShip,
    receiveAttack,
    reportSinkStatus,
    isPlayer1Sunk,
    isComputerSunk,
    myShipsArray1,
    myShipsArray2,
    switchPlayerTurns,
  };

  return myInstance;
};

function populateCubes() {
  let x = 1;
  let cubeLength = 5;
  let myCubeArray = [];
  let myColArray = [];
  let nullCounter = 0;
  let myCubeArrayCounter = 0;
  let lengthRepetition = false;

  let myCubes = document.querySelectorAll("[data-player]");
  let myRotateBtn = document.getElementById("rotate");

  function populate() {
    if (x == 1) {
      function enterCube() {
        let myOrder = +this.dataset.order;
        myCubeArray = [];
        myCubeArrayCounter = 0;
        for (let i = 1; i <= cubeLength; i++) {
          let myNextCube = document.querySelector(`[data-order="${myOrder}"]`);
          if (myOrder == 100) {
            myNextCube.classList.add("not-allowed");
            return;
          } else {
            myNextCube.classList.add("bg-warning");
            myOrder += x;
            myCubeArray.push(myNextCube);
          }
        }

        function checkSameRowHover() {
          let myCubeRow = myCubeArray[0].dataset.row;
          myCubeArray.forEach((e) => {
            if (e.dataset.row == myCubeRow) {
              myCubeArrayCounter += 1;
            } else {
              return;
            }
          });
          if (myCubeArrayCounter == cubeLength) {
            return;
          } else {
            myCubeArray.forEach((e) => {
              e.classList.remove("bg-warning");
              e.classList.add("not-allowed");
            });
          }
        }
        checkSameRowHover();
      }
      function leaveCube() {
        let myOrder = +this.dataset.order;
        for (let i = 1; i <= cubeLength + 1; i++) {
          let myNextCube = document.querySelector(`[data-order="${myOrder}"]`);
          if (myOrder == 100) {
            myNextCube.classList.remove("bg-warning");
            myNextCube.classList.remove("not-allowed");
            return;
          } else {
            myNextCube.classList.remove("bg-warning");
            myNextCube.classList.remove("not-allowed");
            myOrder += x;
          }
        }
      }
      function clickCube() {
        let myOrder = +this.dataset.order;
        myCubeArray = [];
        myCubeArrayCounter = 0;
        for (let i = 1; i <= cubeLength; i++) {
          let myNextCube = document.querySelector(`[data-order="${myOrder}"]`);
          if (myNextCube.classList.contains("not-allowed")) {
            return;
          } else {
            myNextCube.classList.remove("bg-warning");
            myNextCube.classList.add("bg-primary");
            myOrder += x;
            myCubeArray.push(myNextCube);
            coordinates1.push(myNextCube.dataset.order);
          }
        }
        if (cubeLength == 3 && lengthRepetition == true) {
          cubeLength -= 1;
        } else if (cubeLength == 3 && lengthRepetition == false) {
          lengthRepetition = true;
        } else if (cubeLength == 2) {
          cubeLength = 0;
          let startGame = document.getElementById("start");
          startGame.click();
        } else {
          cubeLength -= 1;
        }

        let startGame = document.getElementById("start");
        startGame.addEventListener("click", () => {
          let myCubes = document.querySelectorAll("[data-player]");
          myCubes.forEach((e) => {
            e.removeEventListener("click", clickCube);
          });
        });
      }
      myCubes.forEach(function (e) {
        e.addEventListener("mouseover", enterCube);

        e.addEventListener("mouseleave", leaveCube);

        e.addEventListener("click", clickCube);
      });
      function cubeRow() {
        myCubes.forEach((e) => {
          e.removeEventListener("mouseover", enterCube);

          e.removeEventListener("mouseleave", leaveCube);

          e.removeEventListener("click", clickCube);
        });
        x = 10;
        myRotateBtn.removeEventListener("click", cubeRow);
        populate();
      }

      myRotateBtn.addEventListener("click", cubeRow);
    } else {
      function enterCube2() {
        let myOrder = +this.dataset.order;
        nullCounter = 0;
        myColArray = [];
        for (let i = 1; i <= cubeLength; i++) {
          let myNextCube = document.querySelector(`[data-order="${myOrder}"]`);
          if (myNextCube == null) {
            nullCounter += 1;
            break;
          } else {
            myNextCube.classList.add("bg-warning");
            myOrder += x;
            myColArray.push(myNextCube);
          }
        }
        if (nullCounter > 0) {
          myColArray.forEach((e) => {
            e.classList.remove("bg-warning");
            e.classList.add("not-allowed");
          });
        }
      }

      function leaveCube2() {
        let myOrder = +this.dataset.order;
        for (let i = 1; i <= cubeLength + 1; i++) {
          let myNextCube = document.querySelector(`[data-order="${myOrder}"]`);
          if (myNextCube == null) {
            break;
          } else {
            myNextCube.classList.remove("bg-warning");
            myNextCube.classList.remove("not-allowed");
            myOrder += x;
          }
        }
      }
      function clickCube2() {
        let myOrder = +this.dataset.order;
        for (let i = 1; i <= cubeLength; i++) {
          let myNextCube = document.querySelector(`[data-order="${myOrder}"]`);
          if (myNextCube.classList.contains("not-allowed")) {
            return;
          } else {
            myNextCube.classList.remove("bg-warning");
            myNextCube.classList.add("bg-primary");
            coordinates1.push(myNextCube.dataset.order);
            myOrder += x;
          }
        }
        if (cubeLength == 3 && lengthRepetition == true) {
          cubeLength -= 1;
        } else if (cubeLength == 3 && lengthRepetition == false) {
          lengthRepetition = true;
        } else if (cubeLength == 2) {
          let startGame = document.getElementById("start");
          startGame.click();
          cubeLength = 0;
        } else {
          cubeLength -= 1;
        }
      }
      myCubes.forEach(function (e) {
        e.addEventListener("mouseover", enterCube2);
        e.addEventListener("mouseleave", leaveCube2);
        e.addEventListener("click", clickCube2);
      });

      function cubeCol() {
        myCubes.forEach((e) => {
          e.removeEventListener("mouseover", enterCube2);

          e.removeEventListener("mouseleave", leaveCube2);

          e.removeEventListener("click", clickCube2);
        });
        x = 1;
        myRotateBtn.removeEventListener("click", cubeCol);
        populate();
      }
      myRotateBtn.addEventListener("click", cubeCol);
    }
  }

  populate();
}

function placeRandomComputer() {
  function randomComputerShip(shipLength, direction = "col") {
    let multiplier = 0;
    let incrementor = 0;
    let myDefaultArray = [];
    let arrayCounter = 0;

    if (direction == "col") {
      switch (shipLength) {
        case 5:
          multiplier = 60;
          break;
        case 4:
          multiplier = 70;
          break;
        case 3:
          multiplier = 80;
          break;
        case 2:
          multiplier = 90;
          break;
      }
      incrementor = 10;
    } else if (direction == "row") {
      multiplier = 95;
      incrementor = 1;
    }

    function cubeLoop() {
      myDefaultArray = [];
      arrayCounter = 0;
      let randomNum = Math.floor(Math.random() * multiplier) + 1;

      for (let i = 1; i <= shipLength; i++) {
        let computerCube = document.querySelector(
          `[data-computer="${randomNum}"]`
        );
        myDefaultArray.push(computerCube);
        randomNum = randomNum + incrementor;
      }

      if (direction == "col") {
        myDefaultArray.forEach((e) => {
          if (e.classList.contains("bg-successe")) {
            return;
          } else {
            arrayCounter += 1;
          }
        });
      } else if (direction == "row") {
        let myRow = myDefaultArray[0].dataset.row;
        myDefaultArray.forEach((e) => {
          if (e.classList.contains("bg-successe") || e.dataset.row !== myRow) {
            return;
          } else {
            arrayCounter += 1;
          }
        });
      }
    }
    cubeLoop();

    function recursivePopulate() {
      if (arrayCounter == myDefaultArray.length) {
        myDefaultArray.forEach((e) => {
          e.classList.add("bg-successe");
          coordinates2.push(e.dataset.order);
        });
        return;
      } else {
        cubeLoop();
        recursivePopulate();
      }
    }

    recursivePopulate();
  }
  randomComputerShip(5, "row");
  randomComputerShip(4, "col");
  randomComputerShip(3, "row");
  randomComputerShip(3, "col");
  randomComputerShip(2, "row");
}

function placeRandomPlayer() {
  function randomPlayerShip(shipLength, direction = "col") {
    let multiplier = 0;
    let incrementor = 0;
    let myDefaultArray = [];
    let arrayCounter = 0;

    if (direction == "col") {
      switch (shipLength) {
        case 5:
          multiplier = 60;
          break;
        case 4:
          multiplier = 70;
          break;
        case 3:
          multiplier = 80;
          break;
        case 2:
          multiplier = 90;
          break;
      }
      incrementor = 10;
    } else if (direction == "row") {
      multiplier = 95;
      incrementor = 1;
    }

    function cubeLoop() {
      myDefaultArray = [];
      arrayCounter = 0;
      let randomNum = Math.floor(Math.random() * multiplier) + 1;

      for (let i = 1; i <= shipLength; i++) {
        let playerCube = document.querySelector(`[data-player="${randomNum}"]`);
        myDefaultArray.push(playerCube);
        randomNum = randomNum + incrementor;
      }

      if (direction == "col") {
        myDefaultArray.forEach((e) => {
          if (e.classList.contains("bg-primary")) {
            return;
          } else {
            arrayCounter += 1;
          }
        });
      } else if (direction == "row") {
        let myRow = myDefaultArray[0].dataset.row;
        myDefaultArray.forEach((e) => {
          if (e.classList.contains("bg-primary") || e.dataset.row !== myRow) {
            return;
          } else {
            arrayCounter += 1;
          }
        });
      }
    }
    cubeLoop();

    function recursivePopulate() {
      if (arrayCounter == myDefaultArray.length) {
        myDefaultArray.forEach((e) => {
          e.classList.add("bg-primary");
          coordinates1.push(e.dataset.order);
        });
        return;
      } else {
        cubeLoop();
        recursivePopulate();
      }
    }

    recursivePopulate();
  }
  randomPlayerShip(5, "col");
  randomPlayerShip(4, "row");
  randomPlayerShip(3, "col");
  randomPlayerShip(3, "row");
  randomPlayerShip(2, "col");
}

function computerRandomPlay() {
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  let targetCube = document.querySelector(`[data-player="${randomNumber}"`);
  if (
    targetCube.classList.contains("bg-danger") ||
    targetCube.classList.contains("bg-warning")
  ) {
    function randomClickRecursive() {
      if (
        !targetCube.classList.contains("bg-danger") &&
        !targetCube.classList.contains("bg-warning")
      ) {
        targetCube.click();
        return;
      } else {
        let newRandomNumber = Math.floor(Math.random() * 100 + 1);
        targetCube = document.querySelector(
          `[data-player="${newRandomNumber}"`
        );
        randomClickRecursive();
      }
    }
    randomClickRecursive();
  } else {
    targetCube.click();
  }
}




/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


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

    const myNewGame = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.gameBoard)();
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
      (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.placeRandomPlayer)();
    });
  }

  function selfPlaceShips() {
    const selfPlaceBtn = document.getElementById("self-place");
    selfPlaceBtn.addEventListener("click", () => {
      (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.populateCubes)();
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




/***/ }),

/***/ "./src/ship-factory.js":
/*!*****************************!*\
  !*** ./src/ship-factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShip": () => (/* binding */ createShip)
/* harmony export */ });
const createShip = (myLength = 5, coordinates = []) => {
  let length = myLength;

  let hitTimes = 0;

  let isSunkStatus = false;

  function hit() {
    instance.hitTimes += 1;
    isSunk();
  }

  function isSunk() {
    if (length - instance.hitTimes == 0) {
      instance.isSunkStatus = true;
    } else {
      instance.isSunkStatus = false;
    }
  }

  const instance = { length, hitTimes, isSunkStatus, hit, isSunk, coordinates };

  return instance;
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");


let myGameLoop = (0,_gameLoop__WEBPACK_IMPORTED_MODULE_0__.gameLoop)();
myGameLoop.createFirstPlayerBoard();
myGameLoop.startGameButton();
myGameLoop.restartGameButton();
myGameLoop.autoPlaceShips();
myGameLoop.selfPlaceShips();
myGameLoop.resetGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEMsaUJBQWlCLG1EQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL2Rpc3Qvd2lubmVyTW9kYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3NoaXAtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4uL3NyYy9nYW1lQm9hcmRcIjtcblxuZnVuY3Rpb24gZGlzcGxheU1vZGFsKGdhbWVXaW5uZXIpIHtcbiAgY29uc3QgbXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXlNb2RhbFwiKTtcbiAgbXlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXlXaW5uZXJcIik7XG4gIHdpbm5lci50ZXh0Q29udGVudCA9IGAke2dhbWVXaW5uZXJ9YDtcbn1cblxuZXhwb3J0IHsgZGlzcGxheU1vZGFsIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vc2hpcC1mYWN0b3J5XCI7XG5pbXBvcnQgeyBkaXNwbGF5TW9kYWwgfSBmcm9tIFwiLi4vZGlzdC93aW5uZXJNb2RhbFwiO1xuXG5sZXQgY29vcmRpbmF0ZXMxID0gW107XG5sZXQgY29vcmRpbmF0ZXMyID0gW107XG5cbmNvbnN0IGdhbWVCb2FyZCA9ICgpID0+IHtcbiAgbGV0IGlzUGxheWVyMVN1bmsgPSBmYWxzZTtcbiAgbGV0IGlzQ29tcHV0ZXJTdW5rID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKCkge1xuICAgIHBsYWNlUmFuZG9tQ29tcHV0ZXIoKTtcbiAgfVxuXG4gIHBsYWNlU2hpcCgpO1xuXG4gIGxldCBzaGlwMSA9IGNyZWF0ZVNoaXAoNSwgW1xuICAgICtjb29yZGluYXRlczFbMF0sXG4gICAgK2Nvb3JkaW5hdGVzMVsxXSxcbiAgICArY29vcmRpbmF0ZXMxWzJdLFxuICAgICtjb29yZGluYXRlczFbM10sXG4gICAgK2Nvb3JkaW5hdGVzMVs0XSxcbiAgXSk7XG4gIGxldCBzaGlwMiA9IGNyZWF0ZVNoaXAoNCwgW1xuICAgICtjb29yZGluYXRlczFbNV0sXG4gICAgK2Nvb3JkaW5hdGVzMVs2XSxcbiAgICArY29vcmRpbmF0ZXMxWzddLFxuICAgICtjb29yZGluYXRlczFbOF0sXG4gIF0pO1xuICBsZXQgc2hpcDMgPSBjcmVhdGVTaGlwKDMsIFtcbiAgICArY29vcmRpbmF0ZXMxWzldLFxuICAgICtjb29yZGluYXRlczFbMTBdLFxuICAgICtjb29yZGluYXRlczFbMTFdLFxuICBdKTtcbiAgbGV0IHNoaXA0ID0gY3JlYXRlU2hpcCgzLCBbXG4gICAgK2Nvb3JkaW5hdGVzMVsxMl0sXG4gICAgK2Nvb3JkaW5hdGVzMVsxM10sXG4gICAgK2Nvb3JkaW5hdGVzMVsxNF0sXG4gIF0pO1xuICBsZXQgc2hpcDUgPSBjcmVhdGVTaGlwKDIsIFsrY29vcmRpbmF0ZXMxWzE1XSwgK2Nvb3JkaW5hdGVzMVsxNl1dKTtcblxuICBsZXQgc2hpcDYgPSBjcmVhdGVTaGlwKDUsIFtcbiAgICArY29vcmRpbmF0ZXMyWzBdLFxuICAgICtjb29yZGluYXRlczJbMV0sXG4gICAgK2Nvb3JkaW5hdGVzMlsyXSxcbiAgICArY29vcmRpbmF0ZXMyWzNdLFxuICAgICtjb29yZGluYXRlczJbNF0sXG4gIF0pO1xuICBsZXQgc2hpcDcgPSBjcmVhdGVTaGlwKDQsIFtcbiAgICArY29vcmRpbmF0ZXMyWzVdLFxuICAgICtjb29yZGluYXRlczJbNl0sXG4gICAgK2Nvb3JkaW5hdGVzMls3XSxcbiAgICArY29vcmRpbmF0ZXMyWzhdLFxuICBdKTtcbiAgbGV0IHNoaXA4ID0gY3JlYXRlU2hpcCgzLCBbXG4gICAgK2Nvb3JkaW5hdGVzMls5XSxcbiAgICArY29vcmRpbmF0ZXMyWzEwXSxcbiAgICArY29vcmRpbmF0ZXMyWzExXSxcbiAgXSk7XG4gIGxldCBzaGlwOSA9IGNyZWF0ZVNoaXAoMywgW1xuICAgICtjb29yZGluYXRlczJbMTJdLFxuICAgICtjb29yZGluYXRlczJbMTNdLFxuICAgICtjb29yZGluYXRlczJbMTRdLFxuICBdKTtcbiAgbGV0IHNoaXAxMCA9IGNyZWF0ZVNoaXAoMiwgWytjb29yZGluYXRlczJbMTVdLCArY29vcmRpbmF0ZXMyWzE2XV0pO1xuXG4gIGNvbnN0IG15U2hpcHNBcnJheTEgPSBbc2hpcDEsIHNoaXAyLCBzaGlwMywgc2hpcDQsIHNoaXA1XTtcbiAgY29uc3QgbXlTaGlwc0FycmF5MiA9IFtzaGlwNiwgc2hpcDcsIHNoaXA4LCBzaGlwOSwgc2hpcDEwXTtcblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHBsYXllciwgc2hpcEFycmF5KSB7XG4gICAgbGV0IG15Q3ViZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS0ke3BsYXllcn1gKTtcbiAgICBteUN1YmVzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IG15T3JkZXIgPSArZS5kYXRhc2V0Lm9yZGVyO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZS5jbGFzc0xpc3QuY29udGFpbnMoXCJiZy1wcmltYXJ5XCIpIHx8XG4gICAgICAgICAgZS5jbGFzc0xpc3QuY29udGFpbnMoXCJiZy1zdWNjZXNzZVwiKVxuICAgICAgICApIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNoaXBBcnJheVtpXS5jb29yZGluYXRlcy5pbmNsdWRlcyhteU9yZGVyKSkge1xuICAgICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJiZy1kYW5nZXJcIik7XG4gICAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZChcIm5vLXBvaW50ZXJcIik7XG4gICAgICAgICAgICAgIHNoaXBBcnJheVtpXS5oaXQoKTtcbiAgICAgICAgICAgICAgcmVwb3J0U2lua1N0YXR1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzd2l0Y2hQbGF5ZXJUdXJucygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZChcIm5vLXBvaW50ZXJcIik7XG4gICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiYmctd2FybmluZ1wiKTtcbiAgICAgICAgICBlLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWJvbWIgZmEtbGdcIj4gPC9pPic7XG4gICAgICAgICAgc3dpdGNoUGxheWVyVHVybnMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBvcnRTaW5rU3RhdHVzKCkge1xuICAgIGlmIChcbiAgICAgIHNoaXAxLmlzU3Vua1N0YXR1cyA9PSB0cnVlICYmXG4gICAgICBzaGlwMi5pc1N1bmtTdGF0dXMgPT0gdHJ1ZSAmJlxuICAgICAgc2hpcDMuaXNTdW5rU3RhdHVzID09IHRydWUgJiZcbiAgICAgIHNoaXA0LmlzU3Vua1N0YXR1cyA9PSB0cnVlICYmXG4gICAgICBzaGlwNS5pc1N1bmtTdGF0dXMgPT0gdHJ1ZVxuICAgICkge1xuICAgICAgbXlJbnN0YW5jZS5pc1BsYXllcjFTdW5rID0gdHJ1ZTtcbiAgICAgIGRpc3BsYXlNb2RhbChcIlRoZSBDb21wdXRlclwiKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgc2hpcDYuaXNTdW5rU3RhdHVzID09IHRydWUgJiZcbiAgICAgIHNoaXA3LmlzU3Vua1N0YXR1cyA9PSB0cnVlICYmXG4gICAgICBzaGlwOC5pc1N1bmtTdGF0dXMgPT0gdHJ1ZSAmJlxuICAgICAgc2hpcDkuaXNTdW5rU3RhdHVzID09IHRydWUgJiZcbiAgICAgIHNoaXAxMC5pc1N1bmtTdGF0dXMgPT0gdHJ1ZVxuICAgICkge1xuICAgICAgbXlJbnN0YW5jZS5pc0NvbXB1dGVyU3VuayA9IHRydWU7XG4gICAgICBkaXNwbGF5TW9kYWwoXCJZb3VcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoUGxheWVyVHVybnMoKSB7XG4gICAgbGV0IG15UGxheWVyVHVybiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVySGVhZGVyXCIpO1xuXG4gICAgaWYgKG15UGxheWVyVHVybi50ZXh0Q29udGVudC5pbmNsdWRlcyhcIkNvbXB1dGVyXCIpKSB7XG4gICAgICBteVBsYXllclR1cm4udGV4dENvbnRlbnQgPSBcIlNpbmsgVGhlbSBBbGwgIVwiO1xuICAgICAgbGV0IG15UGxheWVyQ3ViZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtcGxheWVyXCIpO1xuICAgICAgbXlQbGF5ZXJDdWJlcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUuY2xhc3NMaXN0LmFkZChcIm5vLXBvaW50ZXItc3dpdGNoXCIpO1xuICAgICAgfSk7XG4gICAgICBsZXQgbXlDb21wdXRlckN1YmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNvbXB1dGVyXCIpO1xuICAgICAgbXlDb21wdXRlckN1YmVzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tcG9pbnRlci1zd2l0Y2hcIik7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG15UGxheWVyVHVybi50ZXh0Q29udGVudC5pbmNsdWRlcyhcIlNpbmtcIikpIHtcbiAgICAgIG15UGxheWVyVHVybi50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyB0aGUgdHVybiBvZiB0aGUgQ29tcHV0ZXJcIjtcbiAgICAgIGNvbXB1dGVyUmFuZG9tUGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG15SW5zdGFuY2UgPSB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcmVwb3J0U2lua1N0YXR1cyxcbiAgICBpc1BsYXllcjFTdW5rLFxuICAgIGlzQ29tcHV0ZXJTdW5rLFxuICAgIG15U2hpcHNBcnJheTEsXG4gICAgbXlTaGlwc0FycmF5MixcbiAgICBzd2l0Y2hQbGF5ZXJUdXJucyxcbiAgfTtcblxuICByZXR1cm4gbXlJbnN0YW5jZTtcbn07XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQ3ViZXMoKSB7XG4gIGxldCB4ID0gMTtcbiAgbGV0IGN1YmVMZW5ndGggPSA1O1xuICBsZXQgbXlDdWJlQXJyYXkgPSBbXTtcbiAgbGV0IG15Q29sQXJyYXkgPSBbXTtcbiAgbGV0IG51bGxDb3VudGVyID0gMDtcbiAgbGV0IG15Q3ViZUFycmF5Q291bnRlciA9IDA7XG4gIGxldCBsZW5ndGhSZXBldGl0aW9uID0gZmFsc2U7XG5cbiAgbGV0IG15Q3ViZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtcGxheWVyXVwiKTtcbiAgbGV0IG15Um90YXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGVcIik7XG5cbiAgZnVuY3Rpb24gcG9wdWxhdGUoKSB7XG4gICAgaWYgKHggPT0gMSkge1xuICAgICAgZnVuY3Rpb24gZW50ZXJDdWJlKCkge1xuICAgICAgICBsZXQgbXlPcmRlciA9ICt0aGlzLmRhdGFzZXQub3JkZXI7XG4gICAgICAgIG15Q3ViZUFycmF5ID0gW107XG4gICAgICAgIG15Q3ViZUFycmF5Q291bnRlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGN1YmVMZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBteU5leHRDdWJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtb3JkZXI9XCIke215T3JkZXJ9XCJdYCk7XG4gICAgICAgICAgaWYgKG15T3JkZXIgPT0gMTAwKSB7XG4gICAgICAgICAgICBteU5leHRDdWJlLmNsYXNzTGlzdC5hZGQoXCJub3QtYWxsb3dlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbXlOZXh0Q3ViZS5jbGFzc0xpc3QuYWRkKFwiYmctd2FybmluZ1wiKTtcbiAgICAgICAgICAgIG15T3JkZXIgKz0geDtcbiAgICAgICAgICAgIG15Q3ViZUFycmF5LnB1c2gobXlOZXh0Q3ViZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tTYW1lUm93SG92ZXIoKSB7XG4gICAgICAgICAgbGV0IG15Q3ViZVJvdyA9IG15Q3ViZUFycmF5WzBdLmRhdGFzZXQucm93O1xuICAgICAgICAgIG15Q3ViZUFycmF5LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRhdGFzZXQucm93ID09IG15Q3ViZVJvdykge1xuICAgICAgICAgICAgICBteUN1YmVBcnJheUNvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobXlDdWJlQXJyYXlDb3VudGVyID09IGN1YmVMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbXlDdWJlQXJyYXkuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy13YXJuaW5nXCIpO1xuICAgICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJub3QtYWxsb3dlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGVja1NhbWVSb3dIb3ZlcigpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gbGVhdmVDdWJlKCkge1xuICAgICAgICBsZXQgbXlPcmRlciA9ICt0aGlzLmRhdGFzZXQub3JkZXI7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGN1YmVMZW5ndGggKyAxOyBpKyspIHtcbiAgICAgICAgICBsZXQgbXlOZXh0Q3ViZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW9yZGVyPVwiJHtteU9yZGVyfVwiXWApO1xuICAgICAgICAgIGlmIChteU9yZGVyID09IDEwMCkge1xuICAgICAgICAgICAgbXlOZXh0Q3ViZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctd2FybmluZ1wiKTtcbiAgICAgICAgICAgIG15TmV4dEN1YmUuY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1hbGxvd2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBteU5leHRDdWJlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy13YXJuaW5nXCIpO1xuICAgICAgICAgICAgbXlOZXh0Q3ViZS5jbGFzc0xpc3QucmVtb3ZlKFwibm90LWFsbG93ZWRcIik7XG4gICAgICAgICAgICBteU9yZGVyICs9IHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBjbGlja0N1YmUoKSB7XG4gICAgICAgIGxldCBteU9yZGVyID0gK3RoaXMuZGF0YXNldC5vcmRlcjtcbiAgICAgICAgbXlDdWJlQXJyYXkgPSBbXTtcbiAgICAgICAgbXlDdWJlQXJyYXlDb3VudGVyID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gY3ViZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG15TmV4dEN1YmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1vcmRlcj1cIiR7bXlPcmRlcn1cIl1gKTtcbiAgICAgICAgICBpZiAobXlOZXh0Q3ViZS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3QtYWxsb3dlZFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBteU5leHRDdWJlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy13YXJuaW5nXCIpO1xuICAgICAgICAgICAgbXlOZXh0Q3ViZS5jbGFzc0xpc3QuYWRkKFwiYmctcHJpbWFyeVwiKTtcbiAgICAgICAgICAgIG15T3JkZXIgKz0geDtcbiAgICAgICAgICAgIG15Q3ViZUFycmF5LnB1c2gobXlOZXh0Q3ViZSk7XG4gICAgICAgICAgICBjb29yZGluYXRlczEucHVzaChteU5leHRDdWJlLmRhdGFzZXQub3JkZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3ViZUxlbmd0aCA9PSAzICYmIGxlbmd0aFJlcGV0aXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgIGN1YmVMZW5ndGggLT0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChjdWJlTGVuZ3RoID09IDMgJiYgbGVuZ3RoUmVwZXRpdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICAgIGxlbmd0aFJlcGV0aXRpb24gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGN1YmVMZW5ndGggPT0gMikge1xuICAgICAgICAgIGN1YmVMZW5ndGggPSAwO1xuICAgICAgICAgIGxldCBzdGFydEdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpO1xuICAgICAgICAgIHN0YXJ0R2FtZS5jbGljaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1YmVMZW5ndGggLT0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdGFydEdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpO1xuICAgICAgICBzdGFydEdhbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBsZXQgbXlDdWJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1wbGF5ZXJdXCIpO1xuICAgICAgICAgIG15Q3ViZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tDdWJlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBteUN1YmVzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGVudGVyQ3ViZSk7XG5cbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBsZWF2ZUN1YmUpO1xuXG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrQ3ViZSk7XG4gICAgICB9KTtcbiAgICAgIGZ1bmN0aW9uIGN1YmVSb3coKSB7XG4gICAgICAgIG15Q3ViZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBlbnRlckN1YmUpO1xuXG4gICAgICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBsZWF2ZUN1YmUpO1xuXG4gICAgICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tDdWJlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHggPSAxMDtcbiAgICAgICAgbXlSb3RhdGVCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN1YmVSb3cpO1xuICAgICAgICBwb3B1bGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBteVJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ViZVJvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bmN0aW9uIGVudGVyQ3ViZTIoKSB7XG4gICAgICAgIGxldCBteU9yZGVyID0gK3RoaXMuZGF0YXNldC5vcmRlcjtcbiAgICAgICAgbnVsbENvdW50ZXIgPSAwO1xuICAgICAgICBteUNvbEFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGN1YmVMZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBteU5leHRDdWJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtb3JkZXI9XCIke215T3JkZXJ9XCJdYCk7XG4gICAgICAgICAgaWYgKG15TmV4dEN1YmUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbnVsbENvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBteU5leHRDdWJlLmNsYXNzTGlzdC5hZGQoXCJiZy13YXJuaW5nXCIpO1xuICAgICAgICAgICAgbXlPcmRlciArPSB4O1xuICAgICAgICAgICAgbXlDb2xBcnJheS5wdXNoKG15TmV4dEN1YmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobnVsbENvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgbXlDb2xBcnJheS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy13YXJuaW5nXCIpO1xuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwibm90LWFsbG93ZWRcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbGVhdmVDdWJlMigpIHtcbiAgICAgICAgbGV0IG15T3JkZXIgPSArdGhpcy5kYXRhc2V0Lm9yZGVyO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBjdWJlTGVuZ3RoICsgMTsgaSsrKSB7XG4gICAgICAgICAgbGV0IG15TmV4dEN1YmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1vcmRlcj1cIiR7bXlPcmRlcn1cIl1gKTtcbiAgICAgICAgICBpZiAobXlOZXh0Q3ViZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbXlOZXh0Q3ViZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctd2FybmluZ1wiKTtcbiAgICAgICAgICAgIG15TmV4dEN1YmUuY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1hbGxvd2VkXCIpO1xuICAgICAgICAgICAgbXlPcmRlciArPSB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY2xpY2tDdWJlMigpIHtcbiAgICAgICAgbGV0IG15T3JkZXIgPSArdGhpcy5kYXRhc2V0Lm9yZGVyO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBjdWJlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgbXlOZXh0Q3ViZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW9yZGVyPVwiJHtteU9yZGVyfVwiXWApO1xuICAgICAgICAgIGlmIChteU5leHRDdWJlLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdC1hbGxvd2VkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG15TmV4dEN1YmUuY2xhc3NMaXN0LnJlbW92ZShcImJnLXdhcm5pbmdcIik7XG4gICAgICAgICAgICBteU5leHRDdWJlLmNsYXNzTGlzdC5hZGQoXCJiZy1wcmltYXJ5XCIpO1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMxLnB1c2gobXlOZXh0Q3ViZS5kYXRhc2V0Lm9yZGVyKTtcbiAgICAgICAgICAgIG15T3JkZXIgKz0geDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1YmVMZW5ndGggPT0gMyAmJiBsZW5ndGhSZXBldGl0aW9uID09IHRydWUpIHtcbiAgICAgICAgICBjdWJlTGVuZ3RoIC09IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoY3ViZUxlbmd0aCA9PSAzICYmIGxlbmd0aFJlcGV0aXRpb24gPT0gZmFsc2UpIHtcbiAgICAgICAgICBsZW5ndGhSZXBldGl0aW9uID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjdWJlTGVuZ3RoID09IDIpIHtcbiAgICAgICAgICBsZXQgc3RhcnRHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKTtcbiAgICAgICAgICBzdGFydEdhbWUuY2xpY2soKTtcbiAgICAgICAgICBjdWJlTGVuZ3RoID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdWJlTGVuZ3RoIC09IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG15Q3ViZXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZW50ZXJDdWJlMik7XG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbGVhdmVDdWJlMik7XG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrQ3ViZTIpO1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIGN1YmVDb2woKSB7XG4gICAgICAgIG15Q3ViZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBlbnRlckN1YmUyKTtcblxuICAgICAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbGVhdmVDdWJlMik7XG5cbiAgICAgICAgICBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0N1YmUyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHggPSAxO1xuICAgICAgICBteVJvdGF0ZUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ViZUNvbCk7XG4gICAgICAgIHBvcHVsYXRlKCk7XG4gICAgICB9XG4gICAgICBteVJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ViZUNvbCk7XG4gICAgfVxuICB9XG5cbiAgcG9wdWxhdGUoKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VSYW5kb21Db21wdXRlcigpIHtcbiAgZnVuY3Rpb24gcmFuZG9tQ29tcHV0ZXJTaGlwKHNoaXBMZW5ndGgsIGRpcmVjdGlvbiA9IFwiY29sXCIpIHtcbiAgICBsZXQgbXVsdGlwbGllciA9IDA7XG4gICAgbGV0IGluY3JlbWVudG9yID0gMDtcbiAgICBsZXQgbXlEZWZhdWx0QXJyYXkgPSBbXTtcbiAgICBsZXQgYXJyYXlDb3VudGVyID0gMDtcblxuICAgIGlmIChkaXJlY3Rpb24gPT0gXCJjb2xcIikge1xuICAgICAgc3dpdGNoIChzaGlwTGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBtdWx0aXBsaWVyID0gNjA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtdWx0aXBsaWVyID0gNzA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtdWx0aXBsaWVyID0gODA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtdWx0aXBsaWVyID0gOTA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpbmNyZW1lbnRvciA9IDEwO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwicm93XCIpIHtcbiAgICAgIG11bHRpcGxpZXIgPSA5NTtcbiAgICAgIGluY3JlbWVudG9yID0gMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjdWJlTG9vcCgpIHtcbiAgICAgIG15RGVmYXVsdEFycmF5ID0gW107XG4gICAgICBhcnJheUNvdW50ZXIgPSAwO1xuICAgICAgbGV0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG11bHRpcGxpZXIpICsgMTtcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wdXRlckN1YmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS1jb21wdXRlcj1cIiR7cmFuZG9tTnVtfVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgbXlEZWZhdWx0QXJyYXkucHVzaChjb21wdXRlckN1YmUpO1xuICAgICAgICByYW5kb21OdW0gPSByYW5kb21OdW0gKyBpbmNyZW1lbnRvcjtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImNvbFwiKSB7XG4gICAgICAgIG15RGVmYXVsdEFycmF5LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoXCJiZy1zdWNjZXNzZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJheUNvdW50ZXIgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJyb3dcIikge1xuICAgICAgICBsZXQgbXlSb3cgPSBteURlZmF1bHRBcnJheVswXS5kYXRhc2V0LnJvdztcbiAgICAgICAgbXlEZWZhdWx0QXJyYXkuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNsYXNzTGlzdC5jb250YWlucyhcImJnLXN1Y2Nlc3NlXCIpIHx8IGUuZGF0YXNldC5yb3cgIT09IG15Um93KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycmF5Q291bnRlciArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGN1YmVMb29wKCk7XG5cbiAgICBmdW5jdGlvbiByZWN1cnNpdmVQb3B1bGF0ZSgpIHtcbiAgICAgIGlmIChhcnJheUNvdW50ZXIgPT0gbXlEZWZhdWx0QXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIG15RGVmYXVsdEFycmF5LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJiZy1zdWNjZXNzZVwiKTtcbiAgICAgICAgICBjb29yZGluYXRlczIucHVzaChlLmRhdGFzZXQub3JkZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3ViZUxvb3AoKTtcbiAgICAgICAgcmVjdXJzaXZlUG9wdWxhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZWN1cnNpdmVQb3B1bGF0ZSgpO1xuICB9XG4gIHJhbmRvbUNvbXB1dGVyU2hpcCg1LCBcInJvd1wiKTtcbiAgcmFuZG9tQ29tcHV0ZXJTaGlwKDQsIFwiY29sXCIpO1xuICByYW5kb21Db21wdXRlclNoaXAoMywgXCJyb3dcIik7XG4gIHJhbmRvbUNvbXB1dGVyU2hpcCgzLCBcImNvbFwiKTtcbiAgcmFuZG9tQ29tcHV0ZXJTaGlwKDIsIFwicm93XCIpO1xufVxuXG5mdW5jdGlvbiBwbGFjZVJhbmRvbVBsYXllcigpIHtcbiAgZnVuY3Rpb24gcmFuZG9tUGxheWVyU2hpcChzaGlwTGVuZ3RoLCBkaXJlY3Rpb24gPSBcImNvbFwiKSB7XG4gICAgbGV0IG11bHRpcGxpZXIgPSAwO1xuICAgIGxldCBpbmNyZW1lbnRvciA9IDA7XG4gICAgbGV0IG15RGVmYXVsdEFycmF5ID0gW107XG4gICAgbGV0IGFycmF5Q291bnRlciA9IDA7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09IFwiY29sXCIpIHtcbiAgICAgIHN3aXRjaCAoc2hpcExlbmd0aCkge1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbXVsdGlwbGllciA9IDYwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbXVsdGlwbGllciA9IDcwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbXVsdGlwbGllciA9IDgwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbXVsdGlwbGllciA9IDkwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaW5jcmVtZW50b3IgPSAxMDtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBcInJvd1wiKSB7XG4gICAgICBtdWx0aXBsaWVyID0gOTU7XG4gICAgICBpbmNyZW1lbnRvciA9IDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3ViZUxvb3AoKSB7XG4gICAgICBteURlZmF1bHRBcnJheSA9IFtdO1xuICAgICAgYXJyYXlDb3VudGVyID0gMDtcbiAgICAgIGxldCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtdWx0aXBsaWVyKSArIDE7XG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcGxheWVyQ3ViZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBsYXllcj1cIiR7cmFuZG9tTnVtfVwiXWApO1xuICAgICAgICBteURlZmF1bHRBcnJheS5wdXNoKHBsYXllckN1YmUpO1xuICAgICAgICByYW5kb21OdW0gPSByYW5kb21OdW0gKyBpbmNyZW1lbnRvcjtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImNvbFwiKSB7XG4gICAgICAgIG15RGVmYXVsdEFycmF5LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoXCJiZy1wcmltYXJ5XCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycmF5Q291bnRlciArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBcInJvd1wiKSB7XG4gICAgICAgIGxldCBteVJvdyA9IG15RGVmYXVsdEFycmF5WzBdLmRhdGFzZXQucm93O1xuICAgICAgICBteURlZmF1bHRBcnJheS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmctcHJpbWFyeVwiKSB8fCBlLmRhdGFzZXQucm93ICE9PSBteVJvdykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJheUNvdW50ZXIgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjdWJlTG9vcCgpO1xuXG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlUG9wdWxhdGUoKSB7XG4gICAgICBpZiAoYXJyYXlDb3VudGVyID09IG15RGVmYXVsdEFycmF5Lmxlbmd0aCkge1xuICAgICAgICBteURlZmF1bHRBcnJheS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiYmctcHJpbWFyeVwiKTtcbiAgICAgICAgICBjb29yZGluYXRlczEucHVzaChlLmRhdGFzZXQub3JkZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3ViZUxvb3AoKTtcbiAgICAgICAgcmVjdXJzaXZlUG9wdWxhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZWN1cnNpdmVQb3B1bGF0ZSgpO1xuICB9XG4gIHJhbmRvbVBsYXllclNoaXAoNSwgXCJjb2xcIik7XG4gIHJhbmRvbVBsYXllclNoaXAoNCwgXCJyb3dcIik7XG4gIHJhbmRvbVBsYXllclNoaXAoMywgXCJjb2xcIik7XG4gIHJhbmRvbVBsYXllclNoaXAoMywgXCJyb3dcIik7XG4gIHJhbmRvbVBsYXllclNoaXAoMiwgXCJjb2xcIik7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyUmFuZG9tUGxheSgpIHtcbiAgbGV0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCArIDEpO1xuICBsZXQgdGFyZ2V0Q3ViZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBsYXllcj1cIiR7cmFuZG9tTnVtYmVyfVwiYCk7XG4gIGlmIChcbiAgICB0YXJnZXRDdWJlLmNsYXNzTGlzdC5jb250YWlucyhcImJnLWRhbmdlclwiKSB8fFxuICAgIHRhcmdldEN1YmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmctd2FybmluZ1wiKVxuICApIHtcbiAgICBmdW5jdGlvbiByYW5kb21DbGlja1JlY3Vyc2l2ZSgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRhcmdldEN1YmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmctZGFuZ2VyXCIpICYmXG4gICAgICAgICF0YXJnZXRDdWJlLmNsYXNzTGlzdC5jb250YWlucyhcImJnLXdhcm5pbmdcIilcbiAgICAgICkge1xuICAgICAgICB0YXJnZXRDdWJlLmNsaWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdSYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAgKyAxKTtcbiAgICAgICAgdGFyZ2V0Q3ViZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXBsYXllcj1cIiR7bmV3UmFuZG9tTnVtYmVyfVwiYFxuICAgICAgICApO1xuICAgICAgICByYW5kb21DbGlja1JlY3Vyc2l2ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByYW5kb21DbGlja1JlY3Vyc2l2ZSgpO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldEN1YmUuY2xpY2soKTtcbiAgfVxufVxuXG5leHBvcnQgeyBnYW1lQm9hcmQsIHBsYWNlUmFuZG9tUGxheWVyLCBwb3B1bGF0ZUN1YmVzIH07XG4iLCJpbXBvcnQgeyBnYW1lQm9hcmQsIHBsYWNlUmFuZG9tUGxheWVyLCBwb3B1bGF0ZUN1YmVzIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xuICBmdW5jdGlvbiBjcmVhdGVGaXJzdFBsYXllckJvYXJkKCkge1xuICAgIGxldCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkMVwiKTtcbiAgICBsZXQgeCA9IDE7XG4gICAgbGV0IHkgPSAxO1xuICAgIGxldCB6ID0gMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGN1YmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjdWJlRGl2LmNsYXNzTGlzdC5hZGQoXCJjdWJlXCIpO1xuICAgICAgICBjdWJlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRhcmtcIik7XG4gICAgICAgIGN1YmVEaXYuZGF0YXNldC5wbGF5ZXIgPSB4O1xuICAgICAgICBjdWJlRGl2LmRhdGFzZXQub3JkZXIgPSB4O1xuICAgICAgICBjdWJlRGl2LmRhdGFzZXQucm93ID0geTtcbiAgICAgICAgY3ViZURpdi5kYXRhc2V0LmNvbCA9IHo7XG4gICAgICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChjdWJlRGl2KTtcbiAgICAgICAgeCArPSAxO1xuICAgICAgICB6ICs9IDE7XG4gICAgICB9XG5cbiAgICAgIHkgKz0gMTtcbiAgICAgIHogPSAxO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNlY29uZFBsYXllckJvYXJkKCkge1xuICAgIGxldCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkMlwiKTtcbiAgICBsZXQgeCA9IDE7XG4gICAgbGV0IHkgPSAxO1xuICAgIGxldCB6ID0gMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGN1YmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjdWJlRGl2LmNsYXNzTGlzdC5hZGQoXCJjdWJlXCIpO1xuICAgICAgICBjdWJlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRhcmtcIik7XG4gICAgICAgIGN1YmVEaXYuZGF0YXNldC5jb21wdXRlciA9IHg7XG4gICAgICAgIGN1YmVEaXYuZGF0YXNldC5vcmRlciA9IHg7XG4gICAgICAgIGN1YmVEaXYuZGF0YXNldC5yb3cgPSB5O1xuICAgICAgICBjdWJlRGl2LmRhdGFzZXQuY29sID0gejtcbiAgICAgICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1YmVEaXYpO1xuICAgICAgICB4ICs9IDE7XG4gICAgICAgIHogKz0gMTtcbiAgICAgIH1cblxuICAgICAgeSArPSAxO1xuICAgICAgeiA9IDE7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1NlY29uZEJvYXJkKCkge1xuICAgIGxldCBteUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWNvbmQtc2VsZWN0aW9uXCIpO1xuICAgIG15Qm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dQbGF5ZXJUdXJucygpIHtcbiAgICBsZXQgbXlQbGF5ZXJUdXJuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJUdXJuc1wiKTtcbiAgICBteVBsYXllclR1cm4uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBjcmVhdGVTZWNvbmRQbGF5ZXJCb2FyZCgpO1xuXG4gICAgY29uc3QgbXlOZXdHYW1lID0gZ2FtZUJvYXJkKCk7XG4gICAgbXlOZXdHYW1lLnJlY2VpdmVBdHRhY2soXCJwbGF5ZXJcIiwgbXlOZXdHYW1lLm15U2hpcHNBcnJheTEpO1xuICAgIG15TmV3R2FtZS5yZWNlaXZlQXR0YWNrKFwiY29tcHV0ZXJcIiwgbXlOZXdHYW1lLm15U2hpcHNBcnJheTIpO1xuXG4gICAgc2hvd1NlY29uZEJvYXJkKCk7XG4gICAgc2hvd1BsYXllclR1cm5zKCk7XG4gICAgbXlOZXdHYW1lLnN3aXRjaFBsYXllclR1cm5zKCk7XG5cbiAgICBsZXQgbXlCdXR0b25TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teUJ1dHRvbnNcIik7XG4gICAgbXlCdXR0b25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRHYW1lQnV0dG9uKCkge1xuICAgIGNvbnN0IG15U3RhcnRHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKTtcbiAgICBteVN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICBteVN0YXJ0R2FtZUJ0bi5jbGFzc0xpc3QuYWRkKFwibm8tcG9pbnRcIik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN0YXJ0R2FtZUJ1dHRvbigpIHtcbiAgICBjb25zdCBteVJlc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teUJ0blwiKTtcbiAgICBteVJlc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF1dG9QbGFjZVNoaXBzKCkge1xuICAgIGNvbnN0IGF1dG9QbGFjZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0by1wbGFjZVwiKTtcbiAgICBhdXRvUGxhY2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxldCBteVBsYXllckN1YmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXBsYXllcl1cIik7XG4gICAgICBteVBsYXllckN1YmVzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmctcHJpbWFyeVwiKSkge1xuICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLXByaW1hcnlcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcGxhY2VSYW5kb21QbGF5ZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGZQbGFjZVNoaXBzKCkge1xuICAgIGNvbnN0IHNlbGZQbGFjZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZi1wbGFjZVwiKTtcbiAgICBzZWxmUGxhY2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHBvcHVsYXRlQ3ViZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRcIik7XG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVGaXJzdFBsYXllckJvYXJkLFxuICAgIHN0YXJ0R2FtZSxcbiAgICBzdGFydEdhbWVCdXR0b24sXG4gICAgcmVzdGFydEdhbWVCdXR0b24sXG4gICAgYXV0b1BsYWNlU2hpcHMsXG4gICAgc2VsZlBsYWNlU2hpcHMsXG4gICAgcmVzZXRHYW1lLFxuICB9O1xufTtcblxuZXhwb3J0IHsgZ2FtZUxvb3AgfTtcbiIsImNvbnN0IGNyZWF0ZVNoaXAgPSAobXlMZW5ndGggPSA1LCBjb29yZGluYXRlcyA9IFtdKSA9PiB7XG4gIGxldCBsZW5ndGggPSBteUxlbmd0aDtcblxuICBsZXQgaGl0VGltZXMgPSAwO1xuXG4gIGxldCBpc1N1bmtTdGF0dXMgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgaW5zdGFuY2UuaGl0VGltZXMgKz0gMTtcbiAgICBpc1N1bmsoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICBpZiAobGVuZ3RoIC0gaW5zdGFuY2UuaGl0VGltZXMgPT0gMCkge1xuICAgICAgaW5zdGFuY2UuaXNTdW5rU3RhdHVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2UuaXNTdW5rU3RhdHVzID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5zdGFuY2UgPSB7IGxlbmd0aCwgaGl0VGltZXMsIGlzU3Vua1N0YXR1cywgaGl0LCBpc1N1bmssIGNvb3JkaW5hdGVzIH07XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlU2hpcCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnYW1lTG9vcCB9IGZyb20gXCIuL2dhbWVMb29wXCI7XG5cbmxldCBteUdhbWVMb29wID0gZ2FtZUxvb3AoKTtcbm15R2FtZUxvb3AuY3JlYXRlRmlyc3RQbGF5ZXJCb2FyZCgpO1xubXlHYW1lTG9vcC5zdGFydEdhbWVCdXR0b24oKTtcbm15R2FtZUxvb3AucmVzdGFydEdhbWVCdXR0b24oKTtcbm15R2FtZUxvb3AuYXV0b1BsYWNlU2hpcHMoKTtcbm15R2FtZUxvb3Auc2VsZlBsYWNlU2hpcHMoKTtcbm15R2FtZUxvb3AucmVzZXRHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=