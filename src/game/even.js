import readlineSync from 'readline-sync';
import { greeting, userName } from '../cli.js';

greeting();

let gameStatus = 0;

const game = () =>{         
  for (let i = 1; i <= 3; i++) {
    const number = Math.floor(Math.random() * 100);
    const numberCheck = number % 2;
    const userNumber = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${number} \nYour answer: `);
    const userGoodbye = `'${userNumber}' is wrong answer ;(. Correct answer was "no". \nLet's try again, ${userName}!`;

    if (numberCheck === 0 && userNumber === 'yes' || numberCheck !== 0 && userNumber === 'no') {
      console.log('Correct!');
      gameStatus++;
    }else{ 
              console.log(userGoodbye);
              break;
            }
    }

    if (gameStatus == 3) {
        console.log(`Congratulations, ${userName}!`);
    }
};

export default game;
