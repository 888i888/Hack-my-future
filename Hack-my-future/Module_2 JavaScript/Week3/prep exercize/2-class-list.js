import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  const result = []; // Create an empty array

  for (let i = 0; i < mentors.length; i++) {
    const mentor = mentors[i];

    // Check if this mentor can teach the module
    if (mentor.canTeach.includes(moduleName)) {
      result.push(mentor.name); // Add the mentor's name to the result
    }
  }

  return result; // Return the list of names
};

console.log(possibleMentorsForModule("using-apis"));
/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */

const findMentorForModule = (moduleName) => {
  const result = [];

  for (let i = 0; i < mentors.length; i++) {
    const mentor = mentors[i];

    if (mentor.canTeach.includes(moduleName)) {
      result.push(mentor);
    }
  }

  if (result.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * result.length);
  return result[randomIndex].name;
};

console.log(findMentorForModule("javascript"));
