// Instructions: https://github.com/HackYourFuture/UsingAPIs-assignment-week1#exercise-1-john-who

export const getAnonName = (firstName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        reject(new Error("You didn't pass in a first name!"));
        return;
      }

    const fullName = `${firstName} Doe`;

      resolve(fullName);
    }, 0);
  });
};

function main() {
  getAnonName('John')
    .then(console.log)
    .catch(console.error);
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
