const prime = () => {
  const num = Math.floor(Math.random() * 100);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(`Question: ${num}`);
  let result = '';
  for (let i = 3; i < num; i += 1) {
    if (num % i === 0) {
      result = 'no';
      break;
    } else result = 'yes';
  }
  return result;
};
export default prime;
