import game from '..';
import generateNum from '../utils';

const findGcd = (x, y) => (x !== 0 ? findGcd(y % x, x) : y);

const getGcdQuestionAndAnswer = () => {
  let gcd = 1;
  let firstNumber;
  let secondNumber;
  while (gcd === 1 || firstNumber === secondNumber) {
    firstNumber = generateNum(2, 150);
    secondNumber = generateNum(2, 150);
    gcd = findGcd(firstNumber, secondNumber);
  }
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(gcd);
  return [question, correctAnswer];
};

const greeting = 'Find the greatest common divisor of given numbers.';
export default () => game(greeting, getGcdQuestionAndAnswer);
