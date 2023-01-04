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

export { createShip };
