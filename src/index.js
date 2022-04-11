import readlineSync from 'readline-sync';

// game main engine, receive game rule, question and result
const game = (getGamerule, getQuestionAndCalc) => {
  const rounds = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(getGamerule());
  for (let i = 0; i < rounds; i += 1) {
    // получаем вопрос и результат
    const questionAndresult = getQuestionAndCalc();
    // получаем подстроку 2 подстроки вопрос и результат
    const question = questionAndresult.split('result').shift();
    const result = questionAndresult.split('result').pop();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;
