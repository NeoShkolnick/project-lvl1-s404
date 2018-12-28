import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!\n`);

  const numberOfRounds = 3;
  let endingPhrase = 'Congratulations, ';
  for (let i = 0; i < numberOfRounds; i += 1) {
    const questionNumber = Math.round(Math.random() * 100);
    const correctAnsw = questionNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${questionNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnsw === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnsw}.`);
      endingPhrase = "Let's try again, ";
      break;
    }
  }
  console.log(`${endingPhrase}${name}!`);
};
