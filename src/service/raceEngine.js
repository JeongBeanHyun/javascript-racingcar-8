import { moveCars } from "./moveCar.js";
import { randomToCar } from "./randomToCar.js";

export const runRound = (cars) => {
  const random = randomToCar(cars);
  const movedCars = moveCars(random);
  return movedCars;
};

export const runRounds = (cars, roundCount, afterEachRound) => {
  let current = cars;
  for (let i = 0; i < roundCount; i++) {
    current = runRound(current);

    if (afterEachRound) {
      afterEachRound(current);
    }
  }
  return current;
};
