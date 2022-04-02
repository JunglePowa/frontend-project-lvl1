const calc = () => {
  console.log('What is the result of the expression?');
  const arrChar = ['+', '-', '*'];
  const char = arrChar[Math.floor(Math.random() * 3)];
  const numbA = Math.floor(Math.random() * 101);
  const numbB = Math.floor(Math.random() * 101);
  let result = '';
  console.log(`Question ${numbA} ${char} ${numbB}`);
  switch (char) {
    case '-':
      result = numbA - numbB;
      break;
    case '+':
      result = numbA + numbB;
      break;
    case '*':
      result = numbA * numbB;
      break;
    default:
      break;
  }
  return result;
};
export default calc;
