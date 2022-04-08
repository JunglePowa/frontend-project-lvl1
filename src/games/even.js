import { randomNumbs } from '../utils.js';
// check number is even?
const even = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

// get rule
const getRule = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

// generate question and get result
const getQuestionAndCalc = () => {
  const number = randomNumbs(101);
  console.log(`Question: ${number}`);
  return even(number);
};
export { getRule, getQuestionAndCalc };
