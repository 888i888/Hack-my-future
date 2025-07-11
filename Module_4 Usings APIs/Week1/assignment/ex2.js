// Instructions: https://github.com/HackYourFuture/UsingAPIs-assignment-week1#exercise-2-is-it-a-double-digit-number

export function checkDoubleDigits(number) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number !== 'number' || number < 10 || number > 99) {
        reject(new Error(`Expected a double digit number but got ${number}`));
        return;
      }

      resolve('This is a double digit number!');
    }, 0);
  });
}
function main() {
  checkDoubleDigits(9) // should reject
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

  checkDoubleDigits(10) // should resolve
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

  checkDoubleDigits(99) // should resolve
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

  checkDoubleDigits(100) // should reject
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
