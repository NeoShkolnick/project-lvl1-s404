import { game, printDateToUser } from '../..';
import generateNum from './utils';

const progressionQuestion = () => {
  const lenOfProgression = 10;
  let currentPointProgression = generateNum(0, 100);
  const intervalProgression = generateNum(1, 10);
  const missingStep = generateNum(0, lenOfProgression - 1);
  let correctAnswer;
  let outStr = '';
  for (let i = 0; i < lenOfProgression; i += 1) {
    if (i !== missingStep) {
      outStr = `${outStr}${currentPointProgression} `;
    } else {
      correctAnswer = currentPointProgression;
      outStr = `${outStr} .. `;
    }
    currentPointProgression += intervalProgression;
  }
  printDateToUser(outStr);
  return String(correctAnswer);
};

const greeting = 'What number is missing in the progression?';
export default () => game(greeting, progressionQuestion);
