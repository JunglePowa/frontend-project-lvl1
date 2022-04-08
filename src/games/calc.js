import { randomNumbs } from '../utils.js';

// calc result
const calc = (char, numbA, numbB, chars) => {
  let result = '';
  switch (chars[char]) {
    case '-':
      result = numbA - numbB;
      break;
    case '+':
      result = numbA + numbB;
      break;
    case '*':
      result = numbA * numbB;
      break;
    default:
      break;
  }
  return result;
};
// print rule
const getRule = () => {
  console.log('What is the result of the expression?');
};
// generate question and get result
const getQuestionAndCalc = () => {
  const char = randomNumbs(3);
  const numbA = randomNumbs(101);
  const numbB = randomNumbs(101);
  const chars = ['+', '-', '*'];
  console.log(`Question: ${numbA} ${chars[char]} ${numbB}`);
  return calc(char, numbA, numbB, chars);
};
export { getRule, getQuestionAndCalc };
