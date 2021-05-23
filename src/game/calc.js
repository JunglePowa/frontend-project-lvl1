import readlineSync from 'readline-sync';
import { greeting, userName } from '../cli.js';


greeting();

let gameStatus = 0;

const calc = () => {

    for (let i = 1; i <= 3; i++) {
        let result;
        let aNum = Math.floor(Math.random() * 100);
        let bNum = Math.floor(Math.random() * 100);
        let operatorsArr = ['-', '+', '*'];
        let operator = operatorsArr[Math.floor(Math.random() * 3)];
        let expression = `${aNum} ${operator} ${bNum}`;
        let question = readlineSync.question(`What is the result of the expression? \nQuestion: ${expression}\n`, );
        switch (operator) {
            case '-':
                result = aNum - bNum;
                break;
            case '+':
                result = aNum + bNum;
                break;
            case '*':
                result = aNum * bNum;
                 break;
        }

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
        console.log(`Congratulations, ${userName}`);
    };
};

export default calc;
