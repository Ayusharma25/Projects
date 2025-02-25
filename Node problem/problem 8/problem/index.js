// Please don't change the pre-written code
// Import the necessary modules here
const readline = require("readline")
const fs = require("fs")

const Solution = () => {
  // Write your code here
  try{
    fs.writeFileSync("notes.txt", "The world has enough coders ");
  } catch(err){
    console.log(err);
  }

  try{
    const notes = fs.readFileSync("notes.txt", "utf-8");
    console.log(notes);
  } catch(err){
    console.log(err);
  }

  try{
    fs.appendFileSync("notes.txt", " BE A CODING NINJA!")
  } catch(err){
    console.log(err);
  }

  try{
    const updatedNotes = fs.readFileSync("notes.txt", "utf-8");
    console.log(updatedNotes);
  } catch(err){
    console.log(err);
  }

};
Solution();
module.exports = Solution;
