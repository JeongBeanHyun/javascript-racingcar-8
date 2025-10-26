const createCar = (name) => ({
  name,
  position: 0,
});

export const createCars = (names) => {
  return names.map((name) => createCar(name));
};
