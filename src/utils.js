const randomNumbs = (max) => {
  const number = Math.floor(Math.random() * max);
  return number;
};

const randomRange = (max, min) => {
  const number = Math.floor(Math.random() * (max - min) + min);
  return number;
};
export { randomNumbs, randomRange };
