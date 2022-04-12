import getRandomNum from '../utils.js';

// rule
const rule = 'Find the greatest common divisor of given numbers.';

// calc gcd
const gcd = (x, y) => {
  let i = x;
  while (x % i !== 0 || y % i !== 0) {
    i -= 1;
  }
  return i;
};

// get round data
const getRound = () => {
  const roundArr = [];
  const x = getRandomNum(1, 100);
  const y = getRandomNum(1, 100);
  const question = `${x} ${y}`;
  const answer = String(gcd(x, y));
  roundArr.push(question, answer);
  return roundArr;
};

export { rule, getRound };
