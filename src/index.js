import readlineSync from 'readline-sync';

// game main engine, receive round rule, question and right answer
const game = (rule, getRound) => {
  const rounds = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  for (let i = 0; i < rounds; i += 1) {
    // получаем вопрос и правильный ответ
    const questionAndAnswer = getRound();
    // получаем подстроку 2 подстроки вопрос и результат
    const question = questionAndAnswer[0];
    const answer = questionAndAnswer[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;
