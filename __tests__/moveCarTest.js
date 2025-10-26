import { moveCar, moveCars } from "../src/service/moveCar";

describe("move 함수 테스트", () => {
  test("random 값이 4 이상이면 자동차의 position이 1 증가", () => {
    const car = { name: "jb", position: 0, random: 4 };
    const moved = moveCar(car);

    expect(moved.position).toBe(1);
  });

  test("random 값이 3 이하이면 position이 증가하지 않아야 한다", () => {
    const car = { name: "jb", position: 2, random: 3 };
    const moved = moveCar(car);

    expect(moved.position).toBe(2);
  });

  test("moveCar는 새로운 객체를 반환해야 한다", () => {
    const car = { name: "jb", position: 0, random: 5 };
    const moved = moveCar(car);

    expect(moved).not.toBe(car);
  });
});

describe("moveCars 함수 테스트", () => {
  test("모든 자동차에 대해 moveCar가 적용되어야 한다", () => {
    const cars = [
      { name: "jb", position: 0, random: 4 },
      { name: "od", position: 1, random: 3 },
    ];

    const moved = moveCars(cars);

    expect(moved[0].position).toBe(1);
    expect(moved[1].position).toBe(1);
  });
});
