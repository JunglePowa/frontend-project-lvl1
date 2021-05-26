import readlineSync from 'readline-sync';
import { greeting, userName } from '../cli.js';

greeting();

let gameStatus = 0;

const progression = () => {
    for (let i = 1; i <= 3; i++) {
        let arr = [];
        let arrLen = Math.floor(Math.random() * 5) + 6;
        let progressionI = Math.floor(Math.random() * 5) + 5;
        let arrStartI = Math.floor(Math.random() * 30);

        arr.push(arrStartI);
        let x = arrStartI + progressionI;

        for (let i = 1; i <= arrLen; i++) {
            arr.push(x);
            x = x + progressionI;
        }
        
        let dots = Math.floor(Math.random() * arrLen);
        let result = arr[dots];
        arr[dots] = '..';
        let question = readlineSync.question(`What number is missing in the progression? \nQuestion: ${arr.join(' ')}\nYour answer: `, );
        let userGoodbye = `'${question}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`;

        if (result == question) {
            console.log('Correct!');
            gameStatus++;
            } else { 
                console.log(userGoodbye);
                break;
            }
        }
    if (gameStatus == 3) {
        console.log(`Congratulations, ${userName}!`);
        };
    };
    
export default progression;

