import game from '..';
import generateNum from './utils';

const getProgressionQuestionAndAnswer = () => {
  const lenOfProgression = 10;
  let currentPointProgression = generateNum(0, 100);
  const intervalProgression = generateNum(1, 10);
  const missingStep = generateNum(0, lenOfProgression - 1);
  let correctAnswer;
  let question = '';
  for (let i = 0; i < lenOfProgression; i += 1) {
    if (i !== missingStep) {
      question = `${question}${currentPointProgression} `;
    } else {
      correctAnswer = currentPointProgression;
      question = `${question} .. `;
    }
    currentPointProgression += intervalProgression;
  }
  return [question, String(correctAnswer)];
};

const greeting = 'What number is missing in the progression?';
export default () => game(greeting, getProgressionQuestionAndAnswer);
