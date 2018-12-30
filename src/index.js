import readlineSync from 'readline-sync';

export const printDataToUser = str => console.log(str);

export const getDataFromUser = answer => readlineSync.question(answer);

const numberOfRounds = 3;
export default (greeting, getQuestionAndAnswer) => {
  printDataToUser(`Welcome to the Brain Games!\n${greeting}\n`);
  const name = getDataFromUser('May I have you name? ');
  printDataToUser(`Hello, ${name}!\n`);

  let endingPhrase = 'Congratulations, ';
  for (let i = 0; i < numberOfRounds; i += 1) {
    const tmp = getQuestionAndAnswer();
    printDataToUser(`Question: ${tmp[0]}`);
    const correctAnswer = tmp[1];
    const answer = getDataFromUser('Your answer: ');
    if (correctAnswer === answer) {
      printDataToUser('Correct!');
    } else {
      printDataToUser(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      endingPhrase = "Let's try again, ";
      break;
    }
  }
  printDataToUser(`${endingPhrase}${name}!`);
};
