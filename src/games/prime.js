import game from '..';
import generateNum from '../utils';

const isPrime = (number) => {
  if (number < 2 || (number > 2 && number % 2 === 0)) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeQuestionAndAnswer = () => {
  const question = generateNum(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => game(greeting, getPrimeQuestionAndAnswer);
