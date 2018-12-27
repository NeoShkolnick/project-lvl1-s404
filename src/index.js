import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!\n`);

  let endingPhrase = 'Congratulations, ';
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 === 1 && answer === 'no')) {
      console.log('Correct!');
    } else {
      const correctAnsw = answer === 'yes' ? 'no' : 'yes';
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnsw}.`);
      endingPhrase = "Let's try again, ";
      break;
    }
  }
  console.log(`${endingPhrase}${name}!`);
};
