import randomNumbs from '../utils.js';

// rule
const rule = () => {
  const str = 'Find the greatest common divisor of given numbers.';
  return str;
};

// calc gcd
const gcd = (x, y) => {
  let i = x;
  while (x % i !== 0 || y % i !== 0) {
    i -= 1;
  }
  return i;
};

// generate question and calc result
const questionAndCalc = () => {
  const x = randomNumbs(1, 100);
  const y = randomNumbs(1, 100);
  const questionString = `${x} ${y}`;
  const result = gcd(x, y);
  const resultString = `${questionString} result${result}`;
  return String(resultString);
};

export { rule, questionAndCalc };
