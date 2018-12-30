import game from '..';
import generateNum from './utils';

const isEven = number => (number % 2 === 0);

const getEvenQuestionAndAnswer = () => {
  const question = generateNum(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const greeting = 'Answer "yes" if number even otherwise answer "no".';
export default () => game(greeting, getEvenQuestionAndAnswer);
