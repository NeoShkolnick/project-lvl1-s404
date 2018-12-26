import readlineSync from 'readline-sync';

export const sayHello = () => {
    const name = readlineSync.question('May I have you name?');
    console.log(`Hello, ${name}!`);
}
