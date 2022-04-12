const getRandomNum = (min, max) => {
  const number = Math.floor(Math.random() * (max - min) + min);
  return number;
};
export default getRandomNum;
