import game from '..';
import generateNum from '../utils';

const lenOfProgression = 10;
const getProgressionQuestionAndAnswer = () => {
  const startProgression = generateNum(0, 100);
  const intervalProgression = generateNum(1, 10);
  const missingStep = generateNum(0, lenOfProgression - 1);

  const correctAnswer = startProgression + missingStep * intervalProgression;
  let question = '';
  for (let i = 0; i < lenOfProgression; i += 1) {
    if (i !== missingStep) {
      question = `${question}${startProgression + i * intervalProgression} `;
    } else {
      question = `${question} .. `;
    }
  }
  return [question.trimEnd(), String(correctAnswer)];
};

const greeting = 'What number is missing in the progression?';
export default () => game(greeting, getProgressionQuestionAndAnswer);
