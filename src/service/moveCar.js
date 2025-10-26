const MOVE = 4;

export const moveCar = (car) => {
  if (car.random >= MOVE) {
    return moveForward(car);
  }
  return car;
};

export const moveCars = (cars) => {
  return cars.map(moveCar);
};

const moveForward = (car) => ({
  ...car,
  position: car.position + 1,
});
