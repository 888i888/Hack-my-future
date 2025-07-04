// Instructions: https://github.com/HackYourFuture/UsingAPIs-assignment-week1#exercise-5-throw-dice-sequentially

// The line below makes the rollDie() function available to this file.
// Do not change or remove it.
import { rollDie } from '../helpers/pokerDiceRoller.js';

export function rollDice() {
  const results = [];

  return rollDie(1)
    .then((value1) => {
      results.push(value1);
      return rollDie(2);
    })
    .then((value2) => {
      results.push(value2);
      return rollDie(3);
    })
    .then((value3) => {
      results.push(value3);
      return rollDie(4);
    })
    .then((value4) => {
      results.push(value4);
      return rollDie(5);
    })
    .then((value5) => {
      results.push(value5);
      return results;
    });
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
