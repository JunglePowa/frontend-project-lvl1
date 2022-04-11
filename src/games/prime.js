import randomNumbs from '../utils.js';

// rule
const rule = () => {
  const str = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return str;
};

// check number is prime?
const isPrime = (num) => {
  let result = 'yes';
  if (num < 2) {
    result = 'no';
    return result;
  }
  const numSqrt = Math.sqrt(num);
  for (let i = 2; i <= numSqrt; i += 1) {
    if (num % i === 0) {
      result = 'no';
      break;
    }
  }
  return result;
};

// generate question and calc result
const questionAndCalc = () => {
  const questionString = randomNumbs(1, 100);
  const result = isPrime(questionString);
  const resultString = `${questionString} result${result}`;
  return String(resultString);
};

export { rule, questionAndCalc };
