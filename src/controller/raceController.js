import { Console } from "@woowacourse/mission-utils";
import { inputCarNames } from "../input/inputCarNames.js";
import { inputRaceCount } from "../input/inputRaceCount.js";
import { createCars } from "../model/car.js";
import { parseCarNames } from "../utils/parseCarNames.js";
import { runRounds } from "../service/raceEngine.js";
import { formatPositions, formatWinners } from "../output/output.js";
import { findWinners } from "../service/findWinners.js";
import {
  validateCarCount,
  validateCarNameLength,
  validateCarNameNotEmpty,
  validateSeparator,
} from "../utils/validateCarName.js";
import {
  validateIsNumber,
  validateNotZero,
  validatePositiveInteger,
} from "../utils/validateRaceCount.js";

export const race = async () => {
  const inputNames = await inputCarNames();

  validateSeparator(inputNames);

  const carNames = parseCarNames(inputNames);
  validateCarCount(carNames);
  carNames.forEach((name) => {
    validateCarNameNotEmpty(name);
    validateCarNameLength(name);
  });

  const roundCount = await inputRaceCount();
  validateNotZero(roundCount);
  validateIsNumber(roundCount);
  validatePositiveInteger(roundCount);

  const cars = createCars(carNames);

  Console.print("\n실행 결과");
  const result = runRounds(cars, roundCount, afterEachRound);

  const winners = findWinners(result);
  Console.print(formatWinners(winners));
};

const afterEachRound = (cars) => {
  Console.print(formatPositions(cars));
  Console.print("");
};
