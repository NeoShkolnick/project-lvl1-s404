import game from '../..';

const expressionQuestion = () => {
  const firstNumber = Math.floor(Math.random() * 50) + 1;
  const secondNumber = Math.floor(Math.random() * 50) + 1;
  let operand;
  let correctAnsw;
  switch (Math.round(Math.random() * 3)) {
    case 0:
      operand = '-';
      correctAnsw = firstNumber - secondNumber;
      break;
    case 1:
      operand = '+';
      correctAnsw = firstNumber + secondNumber;
      break;
    default:
      operand = '*';
      correctAnsw = firstNumber * secondNumber;
  }
  const question = `${firstNumber} ${operand} ${secondNumber}`;
  console.log(`Question: ${question}`);
  return String(correctAnsw);
};

export default () => game('What is the result of the expression?.\n', expressionQuestion);
