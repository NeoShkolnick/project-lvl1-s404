import game from '../..';

const evenQuestion = () => {
  const questionNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${questionNumber}`);
  return questionNumber % 2 === 0 ? 'yes' : 'no';
};

export default () => game('Answer "yes" if number even otherwise answer "no".\n', evenQuestion);
