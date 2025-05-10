/**
 * You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
 *
 * Declare a variable that holds an empty array, called drinkTray.
 * Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
 *
 * Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
 */

// There are 3 different types of drinks:
const drinkTypes = ["cola", "lemonade", "water"];
// Declare a variable that holds an empty array, called drinkTray.
const drinkTray = [];
// Create a loop that runs 5 times.
for (let i = 0; i < 5; i++) {
  // Generate a random drink type
  const randomDrink = drinkTypes[Math.floor(Math.random() * drinkTypes.length)];
  // Check if the drink type already exists in the tray
  const count = drinkTray.filter((drink) => drink === randomDrink).length;
  // If it exists less than 2 times, add it to the tray
  if (count < 2) {
    drinkTray.push(randomDrink);
  } else {
    // If it exists 2 times, generate a new random drink type
    i--;
  }
}
// Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!"
console.log("Hey guys, I brought a", drinkTray.join(", ") + "!");
