import readlineSync from 'readline-sync';
import greeting from './cli.js';


const even = () => {
    const name = greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 1; i < 4; i += 1) {
      const number = Math.floor(Math.random() * 101);
      const numberStatus = number % 2 === 0 ? 'yes' : 'no';
      console.log(`Question: ${number}`);
      const answer = readlineSync.question('Your answer: ');
      if (numberStatus === answer) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numberStatus}'.\nLet's try again, ${name}!`);
        break;
      }
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    }
};
export default even;
