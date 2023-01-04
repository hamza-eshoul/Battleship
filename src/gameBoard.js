import { createShip } from "./ship-factory";
import { displayModal } from "../dist/winnerModal";

let coordinates1 = [];
let coordinates2 = [];

const gameBoard = () => {
  let isPlayer1Sunk = false;
  let isComputerSunk = false;

  function placeShip() {
    placeRandomComputer();
  }

  placeShip();

  let ship1 = createShip(5, [
    +coordinates1[0],
    +coordinates1[1],
    +coordinates1[2],
    +coordinates1[3],
    +coordinates1[4],
  ]);
  let ship2 = createShip(4, [
    +coordinates1[5],
    +coordinates1[6],
    +coordinates1[7],
    +coordinates1[8],
  ]);
  let ship3 = createShip(3, [
    +coordinates1[9],
    +coordinates1[10],
    +coordinates1[11],
  ]);
  let ship4 = createShip(3, [
    +coordinates1[12],
    +coordinates1[13],
    +coordinates1[14],
  ]);
  let ship5 = createShip(2, [+coordinates1[15], +coordinates1[16]]);

  let ship6 = createShip(5, [
    +coordinates2[0],
    +coordinates2[1],
    +coordinates2[2],
    +coordinates2[3],
    +coordinates2[4],
  ]);
  let ship7 = createShip(4, [
    +coordinates2[5],
    +coordinates2[6],
    +coordinates2[7],
    +coordinates2[8],
  ]);
  let ship8 = createShip(3, [
    +coordinates2[9],
    +coordinates2[10],
    +coordinates2[11],
  ]);
  let ship9 = createShip(3, [
    +coordinates2[12],
    +coordinates2[13],
    +coordinates2[14],
  ]);
  let ship10 = createShip(2, [+coordinates2[15], +coordinates2[16]]);

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
      displayModal("The Computer");
    } else if (
      ship6.isSunkStatus == true &&
      ship7.isSunkStatus == true &&
      ship8.isSunkStatus == true &&
      ship9.isSunkStatus == true &&
      ship10.isSunkStatus == true
    ) {
      myInstance.isComputerSunk = true;
      displayModal("You");
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

export { gameBoard, placeRandomPlayer, populateCubes };
