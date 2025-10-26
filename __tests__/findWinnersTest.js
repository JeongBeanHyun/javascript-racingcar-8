import { findWinners } from "../src/service/findWinners.js";

describe("findWinners 함수 테스트", () => {
  test("가장 멀리 간 자동차를 우승자로 반환한다", () => {
    const cars = [
      { name: "a", position: 2 },
      { name: "b", position: 4 },
      { name: "c", position: 1 },
    ];

    const winners = findWinners(cars);

    expect(winners).toEqual([{ name: "b", position: 4 }]);
  });

  test("우승자가 여러 명이면 모두 반환한다", () => {
    const cars = [
      { name: "a", position: 3 },
      { name: "b", position: 3 },
      { name: "c", position: 1 },
    ];

    const winners = findWinners(cars);

    expect(winners).toEqual([
      { name: "a", position: 3 },
      { name: "b", position: 3 },
    ]);
  });

  test("모든 자동차가 같은 위치면 전체가 우승자다", () => {
    const cars = [
      { name: "a", position: 1 },
      { name: "b", position: 1 },
      { name: "c", position: 1 },
    ];

    const winners = findWinners(cars);

    expect(winners).toEqual(cars);
  });
});
