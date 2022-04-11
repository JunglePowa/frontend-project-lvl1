import randomNumbs from '../utils.js';

// rule
const rule = () => {
  const str = 'What number is missing in the progression?';
  return str;
};

// generate question and result
const questionAndCalc = () => {
  const arr = [];
  const progressionStep = randomNumbs(1, 10);
  let num = randomNumbs(5, 30);
  const hideCharPos = randomNumbs(1, 10);
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    arr[i] = num;
    num += progressionStep;
  }
  const result = arr[hideCharPos];
  // hide pos in arr
  arr[hideCharPos] = '..';
  const questionString = `${arr.join(' ')}`;
  const resultString = `${questionString} result${result}`;
  return String(resultString);
};

export { rule, questionAndCalc };
