import getRandomNum from '../utils.js';

// rule
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

// check number is even?
const isEven = (number) => {
  const result = number % 2 === 0;
  return result;
};

// get round data
const getRound = () => {
  const roundArr = [];
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  roundArr.push(question, answer);
  return roundArr;
};
export { rule, getRound };
