import randomNumbs from '../utils.js';

// rule
const rule = () => {
  const str = 'Answer "yes" if the number is even, otherwise answer "no".';
  return str;
};

// check number is even?
const isEven = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

// generate question and get result
const questionAndCalc = () => {
  const questionString = randomNumbs(1, 100);
  const result = isEven(questionString);
  const resultString = `${questionString} result${result}`;
  return String(resultString);
};
export { rule, questionAndCalc };
