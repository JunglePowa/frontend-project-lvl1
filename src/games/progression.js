import getRandomNum from '../utils.js';

// rule
const rule = 'What number is missing in the progression?';

const getProgression = (index, len, step) => {
  const arr = [];
  let num = index;
  for (let i = 0; i < len; i += 1) {
    arr[i] = num;
    num += step;
  }
  return arr;
};

// get round data
const getRound = () => {
  const roundArr = [];
  const progressionStep = getRandomNum(1, 10);
  const index = getRandomNum(5, 30);
  const hideCharPos = getRandomNum(1, 10);
  const progressionLength = 10;
  const arr = getProgression(index, progressionLength, progressionStep);
  const answer = String(arr[hideCharPos]);
  // hide pos in arr
  arr[hideCharPos] = '..';
  const question = `${arr.join(' ')}`;
  roundArr.push(question, answer);
  return roundArr;
};

export { rule, getRound };
