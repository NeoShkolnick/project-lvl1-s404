#!/usr/bin/env node
import {askUser} from './../index.js';

console.log('Welcome to the Brain Games!');

console.log(`Hello, ${askUser('May I have you name?')}!`);
