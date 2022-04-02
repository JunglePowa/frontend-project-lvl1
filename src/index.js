import readlineSync from 'readline-sync';

const game = (rule) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let rounds = 0; rounds < 3; rounds += 1) {
    const result = String(rule());
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;
