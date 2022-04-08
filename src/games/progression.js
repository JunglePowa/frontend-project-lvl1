import { randomNumbs, randomRange } from '../utils.js';

// get hiden array
const hidePos = (arr, hideCharPos) => {
  const array = arr;
  array[hideCharPos] = '..';
  return array;
};

// get rule
const getRule = () => {
  console.log('What number is missing in the progression?');
};

// generate question and get result
const getQuestionAndCalc = () => {
  const arr = [];
  const progressionStep = randomRange(10, 2);
  let num = randomRange(30, 5);
  const hideCharPos = randomNumbs(10);
  for (let i = 0; i < 10; i += 1) {
    arr[i] = num;
    num += progressionStep;
  }
  const result = arr[hideCharPos];
  const hidenArray = hidePos(arr, hideCharPos);
  console.log(`Question: ${hidenArray.join(' ')}`);
  return result;
};

export { getRule, getQuestionAndCalc };
