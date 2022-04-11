import randomNumbs from '../utils.js';

// print rule
const rule = () => {
  const str = 'What is the result of the expression?';
  return str;
};
// generate question and calc result
const questionAndCalc = () => {
  const arr = ['+', '-', '*'];
  const index = randomNumbs(0, arr.length);
  const num1 = randomNumbs(1, 100);
  const num2 = randomNumbs(1, 100);
  const questionString = `${num1} ${arr[index]} ${num2}`;
  let result = '';
  switch (arr[index]) {
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  const resultString = `${questionString} result${result}`;
  return String(resultString);
};
export { rule, questionAndCalc };
