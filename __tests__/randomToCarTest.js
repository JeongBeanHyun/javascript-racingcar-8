import { Random } from "@woowacourse/mission-utils";
import { randomToCar } from "../src/service/randomToCar";

jest.mock("@woowacourse/mission-utils", () => ({
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("random 함수 테스트", () => {
  test("자동차마다 random 값이 추가되어야 한다", () => {
    const cars = [
      { name: "car1", position: 0 },
      { name: "car2", position: 1 },
    ];

    // 랜덤 값 미리 정해두기
    Random.pickNumberInRange.mockReturnValueOnce(7).mockReturnValueOnce(3);

    const result = randomToCar(cars);

    expect(result).toEqual([
      { name: "car1", position: 0, random: 7 },
      { name: "car2", position: 1, random: 3 },
    ]);
  });

  test("랜덤 함수가 자동차 개수만큼 호출되어야 한다", () => {
    const cars = [
      { name: "car1", position: 0 },
      { name: "car2", position: 1 },
      { name: "car3", position: 2 },
    ];

    Random.pickNumberInRange.mockReturnValue(5);

    randomToCar(cars);

    expect(Random.pickNumberInRange).toHaveBeenCalledTimes(3);
  });
});
