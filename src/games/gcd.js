import { randomNumbs } from '../utils.js';

// calc gcd
const gcd = (x, y) => {
  let i = x;
  while (x % i !== 0 || y % i !== 0) {
    i -= 1;
  }
  return i;
};

// get rule
const getRule = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

// generate question and get result
const getQuestionAndCalc = () => {
  const x = randomNumbs(101);
  const y = randomNumbs(101);
  console.log(`Question: ${x} ${y}`);
  return gcd(x, y);
};

export { getRule, getQuestionAndCalc };
