import readlineSync from 'readline-sync';

// game main drive, receive game rule, question and result
const game = (getGamerule, getQuestionAndResult) => {
  const rounds = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  getGamerule();
  for (let i = 0; i < rounds; i += 1) {
    const result = String(getQuestionAndResult());
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log('Correct!');
    }
    if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;
