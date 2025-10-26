export const parseCarNames = (cars) => {
  const carNames = cars.split(",").map((name) => name.trim());
  return carNames;
};
