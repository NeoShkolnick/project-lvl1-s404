import readlineSync from 'readline-sync';

export const printDateToUser = str => console.log(str);

export const getDateFromUser = answer => readlineSync.question(answer);

const numberOfRounds = 3;
export const game = (greeting, question) => {
  printDateToUser(`Welcome to the Brain Games!\n${greeting}\n`);
  const name = getDateFromUser('May I have you name? ');
  printDateToUser(`Hello, ${name}!\n`);

  let endingPhrase = 'Congratulations, ';
  for (let i = 0; i < numberOfRounds; i += 1) {
    const correctAnswer = question();
    const answer = getDateFromUser('Your answer: ');
    if (correctAnswer === answer) {
      printDateToUser('Correct!');
    } else {
      printDateToUser(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      endingPhrase = "Let's try again, ";
      break;
    }
  }
  printDateToUser(`${endingPhrase}${name}!`);
};
