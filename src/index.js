import readlineSync from 'readline-sync';

const numberOfRounds = 3;
export default (greeting, getQuestionAndAnswer) => {
  console.log(`Welcome to the Brain Games!\n${greeting}\n`);
  const name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!\n`);

  let endingPhrase = 'Congratulations, ';
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      endingPhrase = "Let's try again, ";
      break;
    }
  }
  console.log(`${endingPhrase}${name}!`);
};
