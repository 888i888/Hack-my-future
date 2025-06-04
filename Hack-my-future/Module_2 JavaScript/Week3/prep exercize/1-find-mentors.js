import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  return mentors
    .filter((mentor) => mentor.canTeach.includes(moduleName))
    .map((mentor) => mentor.name);
};

console.log(possibleMentorsForModule("using-apis"));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  const possibleMentors = mentors.filter((mentor) =>
    mentor.canTeach.includes(moduleName)
  );
  const randomIndex = Math.floor(Math.random() * possibleMentors.length);
  if (possibleMentors.length === 0) {
    return null;
  }
  return possibleMentors[randomIndex].name;
};
console.log(findMentorForModule("javascript"));
console.assert(
  findMentorForModule("javascript") !== null,
  "The result is not correct, it should return a mentor name"
);
