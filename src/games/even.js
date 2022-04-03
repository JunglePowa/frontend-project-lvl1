const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = Math.floor(Math.random() * 101);
  console.log(`Question: ${number}`);
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};
export default even;
