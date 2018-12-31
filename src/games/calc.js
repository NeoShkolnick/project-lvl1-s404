import game from '..';
import generateNum from '../utils';

const getExpressionQuestionAndAnswer = () => {
  const firstNumber = generateNum(1, 50);
  const secondNumber = generateNum(1, 50);
  let operand;
  let correctAnswer;
  switch (generateNum(0, 2)) {
    case 0:
      operand = '-';
      correctAnswer = firstNumber - secondNumber;
      break;
    case 1:
      operand = '+';
      correctAnswer = firstNumber + secondNumber;
      break;
    default:
      operand = '*';
      correctAnswer = firstNumber * secondNumber;
  }
  const question = `${firstNumber} ${operand} ${secondNumber}`;
  return [question, String(correctAnswer)];
};

const greeting = 'What is the result of the expression?.';
export default () => game(greeting, getExpressionQuestionAndAnswer);
