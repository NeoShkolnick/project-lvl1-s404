import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have you name?');
  console.log(`Hello, ${name}!`);
};
