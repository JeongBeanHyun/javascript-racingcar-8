import { Random } from "@woowacourse/mission-utils";

const pickRandomNumber = () => {
  return Random.pickNumberInRange(0, 9);
};

export const randomToCar = (cars) => {
  return cars.map((car) => ({
    ...car,
    random: pickRandomNumber(),
  }));
};
