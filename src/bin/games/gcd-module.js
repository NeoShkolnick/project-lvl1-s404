import game from '../..';

const findGcd = (x, y) => (x !== 0 ? findGcd(y % x, x) : y);

const gcdQuestion = () => {
  let gcd = 1;
  let firstNumber;
  let secondNumber;
  while (gcd === 1 || firstNumber === secondNumber) {
    firstNumber = Math.floor(Math.random() * 150) + 2;
    secondNumber = Math.floor(Math.random() * 150) + 2;
    gcd = findGcd(firstNumber, secondNumber);
  }
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  return String(gcd);
};

export default () => game('Find the greatest common divisor of given numbers.\n', gcdQuestion);
