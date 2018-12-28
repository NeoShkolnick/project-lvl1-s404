import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const expressionQuestion = () => {
  const firstNumber = Math.floor(Math.random() * 50) + 1;
  const secondNumber = Math.floor(Math.random() * 50) + 1;
  let operand;
  let correctAnsw;
  switch (Math.round(Math.random() * 3)) {
    case 0:
      operand = '-';
      correctAnsw = firstNumber - secondNumber;
      break;
    case 1:
      operand = '+';
      correctAnsw = firstNumber + secondNumber;
      break;
    default:
      operand = '*';
      correctAnsw = firstNumber * secondNumber;
  }
  const question = `${firstNumber} ${operand} ${secondNumber}`;
  console.log(`Question: ${question}`);
  return String(correctAnsw);
};

const evenQuestion = () => {
  const questionNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${questionNumber}`);
  return questionNumber % 2 === 0 ? 'yes' : 'no';
};

const game = (greeting, question) => {
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

export const expressionGame = () => game('What is the result of the expression?.\n', expressionQuestion);

export const evenGame = () => game('Answer "yes" if number even otherwise answer "no".\n', evenQuestion);
