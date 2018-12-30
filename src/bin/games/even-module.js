import { game, printDateToUser } from '../..';
import generateNum from './utils';

const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

const evenQuestion = () => {
  const question = generateNum(0, 100);
  printDateToUser(`Question: ${question}`);
  return isEven(question);
};

const greeting = 'Answer "yes" if number even otherwise answer "no".';
export default () => game(greeting, evenQuestion);
