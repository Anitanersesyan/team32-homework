/* Create a file named avg.js which will calculate the average of the numbers provided as command line arguments.

But what are command line arguments? They are simple parameters that we can pass to command line programs, which can be either values or files. Here's an example of how we would invoke avg.js with 3 numbers:

$ node avg.js 13 7 4
8*/

const args = process.argv.slice(2);

const numbers = args.map(Number);

if (numbers.length === 0) {
  console.error("Please provide at least one number to calculate the average.");
  process.exit(1);
}

if (numbers.some(isNaN)) {
  console.error("Please provide valid numbers to calculate the average.");
  process.exit(1);
}

const numberSum = numbers.reduce((acc, num) => acc + num, 0);
const average = (numberSum / numbers.length).toFixed(2);

console.log(`The average of ${numbers.join(", ")} is ${average}.`);
