import { randomNumbs } from '../utils.js';

// check number is prime?
const prime = (num) => {
  let result = '';
  for (let i = 3; i < num; i += 1) {
    if (num % i === 0) {
      result = 'no';
      break;
    } else result = 'yes';
  }
  return result;
};

// get rule
const getRule = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

// generate question and get result
const getQuestionAndCalc = () => {
  const num = randomNumbs(101);
  console.log(`Question: ${num}`);
  return prime(num);
};

export { getRule, getQuestionAndCalc };
