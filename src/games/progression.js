const progression = () => {
  console.log('What number is missing in the progression?');
  const arr = [];
  const progressionStep = Math.floor(Math.random() * (10 - 2) + 2);
  let num = Math.floor(Math.random() * (30 - 5) + 5);
  const hidenPos = Math.floor(Math.random() * 10);
  for (let i = 0; i < 10; i += 1) {
    arr[i] = num;
    num += progressionStep;
  }
  const result = arr[hidenPos];
  arr[hidenPos] = '..';
  console.log(`Question: ${arr.join(' ')}`);
  return result;
};
export default progression;
