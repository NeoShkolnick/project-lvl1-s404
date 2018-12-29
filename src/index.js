import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};


export default (greeting, question) => {
  console.log('Welcome to the Brain Games!');
  console.log(greeting);
  const name = getName();

  let endingPhrase = 'Congratulations, ';
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const correctAnsw = question();
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
