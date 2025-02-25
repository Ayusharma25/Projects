// Import required module
const readline = require("readline")

const Solution = () => {
  // Write your code here
  const qInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

qInterface.question("Enter two numbers separated by a space: ", (input) => {
  try {
    // Extract numbers from the input
    const numbers = input.split(" ").map(Number);

    if (numbers.length !== 2 || numbers.some(isNaN)) {
      console.log("Invalid input. Please enter exactly two numbers.");
    } else {
      // Calculate the maximum of the two numbers
      const maxNumber = Math.max(numbers[0], numbers[1]);
      console.log(`The maximum value is: ${maxNumber}`);
    }
  } catch (error) {
    console.log("An error occurred: ", error.message);
  } finally {
    // Close the readline interface
    qInterface.close();
  }
});
};

Solution();
module.exports = Solution;
