import readlineSync from 'readline-sync';
import { greeting, userName } from '../cli.js';

greeting();

let gameStatus = 0;


const game = () => {
    for (let i = 1; i <= 3; i++) {
        let number = Math.floor(Math.random() * 50);
        let temp = isPrime(number);
        let result;

        if (temp) {
            result = 'yes';
        } else result = 'no';

        let question = readlineSync.question(`Answer "yes" if given number is prime. Otherwise answer "no". \nQuestion: ${number}\nYour answer: `, );
        let userGoodbye = `'${question}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`;

        if (result === question) {
            console.log('Correct!');
            gameStatus++;
            } else { 
                console.log(userGoodbye);
                break;
            }
        }

        if (gameStatus === 3) {
            console.log(`Congratulations, ${userName}`);
            }
};

const isPrime = (num) => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  export default game;