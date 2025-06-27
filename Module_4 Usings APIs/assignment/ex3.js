// Instructions: https://github.com/HackYourFuture/UsingAPIs-assignment-week1#instructions-ex3


export function rollDie() {
  return new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

      // Use callback to notify that the die rolled off the table after 6 rolls
    if (randomRollsToDo > 6) {
            reject(new Error('Oops... Die rolled off the table.'));
    return;}
    
    const rollOnce = (roll) => {
    const value = Math.floor(Math.random() * 6) + 1;
    console.log(`Die value is now: ${value}`);
    // Use callback to communicate the final die value once finished rolling
    if (roll === randomRollsToDo) {
      
      resolve(value);
      return;
    }

    // Schedule the next roll todo until no more rolls to do
    if (roll < randomRollsToDo) {
      setTimeout(() => rollOnce(roll + 1), 500);
    }
  };

  // Start the initial roll
  rollOnce(1);
});
}

function main() {

  rollDie()
    .then(value => {
      console.log(`Success! Die settled on ${value}.`);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}


export const explanation = `
In the original version, we used a callback to get the result of rolling the die.
But callbacks can sometimes be tricky because they can be called multiple times,
or not at all, which can lead to unexpected problems.
In this version, we use a Promise to handle the die rolling, and then either:
- resolve with the final value if everything went well,
- or reject with an error if the die rolls off the table.
`;
