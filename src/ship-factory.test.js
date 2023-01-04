import { createShip } from "./ship-factory";

test("test ship length", () => {
  expect(createShip().length).toBe(5);
});

test("test hitTimes after one hit", () => {
  const exampleShip = createShip();
  exampleShip.hit();

  expect(exampleShip.hitTimes).toBe(1);
});

test("test hitTimes after two hits", () => {
  const exampleShip = createShip();
  exampleShip.hit();
  exampleShip.hit();

  expect(exampleShip.hitTimes).toBe(2);
});

test("test sunkStatus after completion of the right number of hits", () => {
  const exampleShip = createShip();
  exampleShip.hit();
  exampleShip.hit();
  exampleShip.hit();
  exampleShip.hit();
  exampleShip.hit();

  expect(exampleShip.isSunkStatus).toBe(true);
});

test("test sunkStatus after completion of the wrong number of hits", () => {
  const exampleShip = createShip();
  exampleShip.hit();
  exampleShip.hit();

  expect(exampleShip.isSunkStatus).toBe(false);
});
