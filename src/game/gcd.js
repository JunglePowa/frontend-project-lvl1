import readlineSync from 'readline-sync';
import { greeting, userName } from '../cli.js';

greeting();

let gameStatus = 0;

const gcd = () => {
    for (let i = 1; i <= 3; i++) {
        let x = Math.floor(Math.random() * 30);
        let y = Math.floor(Math.random() * 30);

        const gcdGen = () => {
            if (y > x) {let temp = x; x = y; y = temp;}
            while (true) {
                if (y == 0) return x;
                x %= y;
                if (x == 0) return y;
                y %= x;
            }
        };
        let result = gcdGen();
        let question = readlineSync.question(`Find the greatest common divisor of given numbers. \nQuestion: ${x} ${y}\n Your answer: `, );
        let userGoodbye = `'${question}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`;

        if (result == question) {
            console.log('Correct!');
            gameStatus++;
            } else { 
                console.log(userGoodbye);
                break;
            }
    };
    if (gameStatus == 3) {
        console.log(`Congratulations, ${userName}`);
    };
};

export default gcd;