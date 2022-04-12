import getRandomNum from '../utils.js';

// round rule
const rule = 'What is the result of the expression?';

// calc right answer
const calc = (arr, index, num1, num2) => {
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
  return result;
};

// get round data
const getRound = () => {
  const roundArr = [];
  const arr = ['+', '-', '*'];
  const index = getRandomNum(0, arr.length);
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const question = `${num1} ${arr[index]} ${num2}`;
  const answer = String(calc(arr, index, num1, num2));
  roundArr.push(question, answer);
  return roundArr;
};

export { rule, getRound };
