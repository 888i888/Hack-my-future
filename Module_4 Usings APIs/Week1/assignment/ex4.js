// Instructions: https://github.com/HackYourFuture/UsingAPIs-assignment-week1#instructions-ex4

// The line below makes the rollDie() function available to this file.
// Do not change or remove it.
import { rollDie } from '../helpers/pokerDiceRoller.js';

export function rollDice() {
  
  const dice = [1, 2, 3, 4, 5];

  const rollPromises = dice.map((die) => rollDie(die));
  return Promise.all(rollPromises);
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


export const explanation = `
When we roll 5 dice at the same time, they all start rolling together.
This means we can use Promise.all() to wait for all the dice to finish rolling.
If all the dice roll successfully, we get an array of results.
If any die rolls off the table, we get an error message.
`;
