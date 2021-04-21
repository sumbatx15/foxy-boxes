export const DIRECTIONS = {
  TOP: "top",
  LEFT: "left",
  RIGHT: "right",
  BOTTOM: "bottom",
};

export const DIRECTIONS_VALUES = Object.values(DIRECTIONS);

export const getRandomDirection = () => {
  return DIRECTIONS_VALUES[Math.floor(Math.random() * DIRECTIONS_VALUES.length)];
};
