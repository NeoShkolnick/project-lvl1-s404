import readlineSync from 'readline-sync';

export const askUser = (question) => readlineSync.question(question); 