import getRandomNum from '../utils.js';

// rule
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// check number is prime?
const isPrime = (num) => {
  let result = true;
  if (num < 2) {
    result = false;
    return result;
  }
  const numSqrt = Math.sqrt(num);
  for (let i = 2; i <= numSqrt; i += 1) {
    if (num % i === 0) {
      result = false;
      break;
    }
  }
  return result;
};
console.log(isPrime(97));
// get round data
const getRound = () => {
  const roundArr = [];
  const question = getRandomNum(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  roundArr.push(question, answer);
  return roundArr;
};

export { rule, getRound };
