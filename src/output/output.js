export const formatPositions = (cars) => {
  return cars.map((c) => `${c.name} : ${"-".repeat(c.position)}`).join("\n");
};

export const formatWinners = (winners) => {
  return `최종 우승자 : ${winners.map((w) => w.name).join(", ")}`;
};
