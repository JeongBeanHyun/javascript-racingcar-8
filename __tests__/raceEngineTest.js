import { randomToCar } from "../src/service/randomToCar.js";
import { moveCars } from "../src/service/moveCar.js";
import { runRound, runRounds } from "../src/service/raceEngine.js";

jest.mock("../src/service/randomToCar.js", () => ({
  randomToCar: jest.fn(),
}));
jest.mock("../src/service/moveCar.js", () => ({
  moveCars: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("raceEngine 함수 테스트", () => {
  test("runRound 함수가 randomToCar와 moveCars를 호출한다", () => {
    const cars = [{ name: "a", position: 0 }];
    const moved = [{ name: "a", position: 1 }];

    randomToCar.mockReturnValue(cars);
    moveCars.mockReturnValue(moved);

    const result = runRound(cars);

    expect(randomToCar).toHaveBeenCalled();
    expect(moveCars).toHaveBeenCalled();
    expect(result).toBe(moved);
  });

  test("runRounds가 라운드를 여러 번 실행한다", () => {
    const cars = [{ name: "a", position: 0 }];
    const moved = [{ name: "a", position: 1 }];
    randomToCar.mockReturnValue(cars);
    moveCars.mockReturnValue(moved);

    const result = runRounds(cars, 2);

    expect(randomToCar).toHaveBeenCalledTimes(2);
    expect(moveCars).toHaveBeenCalledTimes(2);
    expect(result).toBe(moved);
  });
});
