export const findWinners = (cars) => {
  const maxPosition = Math.max(...cars.map((c) => c.position));
  const winners = cars.filter((car) => car.position === maxPosition);
  return winners;
};
