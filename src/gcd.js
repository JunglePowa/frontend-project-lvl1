const gcd = () => {
  const x = Math.floor(Math.random() * 101);
  const y = Math.floor(Math.random() * 101);
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${x} ${y}`);
  let i = x;
  while (x % i !== 0 || y % i !== 0) {
    i -= 1;
  }
  return i;
};
export default gcd;
