import { game, printDateToUser } from '../..';
import generateNum from './utils';

const findGcd = (x, y) => (x !== 0 ? findGcd(y % x, x) : y);

const gcdQuestion = () => {
  let gcd = 1;
  let firstNumber;
  let secondNumber;
  while (gcd === 1 || firstNumber === secondNumber) {
    firstNumber = generateNum(2, 150);
    secondNumber = generateNum(2, 150);
    gcd = findGcd(firstNumber, secondNumber);
  }
  printDateToUser(`Question: ${firstNumber} ${secondNumber}`);
  return String(gcd);
};

const greeting = 'Find the greatest common divisor of given numbers.';
export default () => game(greeting, gcdQuestion);
