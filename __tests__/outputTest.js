import { formatPositions, formatWinners } from "../src/output/outputRace";

describe("formatPositions 함수 테스트", () => {
  test("자동차 이름과 위치를 '-'로 표시한다", () => {
    const cars = [
      { name: "a", position: 3 },
      { name: "b", position: 1 },
      { name: "c", position: 0 },
    ];

    const result = formatPositions(cars);

    expect(result).toBe("a : ---\nb : -\nc : ");
  });
});

describe("formatWinners 함수 테스트", () => {
  test("단일 우승자를 올바르게 출력한다", () => {
    const winners = [{ name: "jb" }];
    const result = formatWinners(winners);

    expect(result).toBe("최종 우승자 : jb");
  });

  test("복수의 우승자를 쉼표로 구분하여 출력한다", () => {
    const winners = [{ name: "jb" }, { name: "od" }, { name: "km" }];
    const result = formatWinners(winners);

    expect(result).toBe("최종 우승자 : jb, od, km");
  });
});
