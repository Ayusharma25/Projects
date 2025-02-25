const fs = require("fs");

const Solution = () => {
  fs.appendFile("note.txt", "\nnew data", (err) => {
    if (err) {
      console.log(err);
    } else{
      console.log("Data is appended")
    }
  });

  console.log("data successfully updated")
   
  const data = fs.readFile("note.txt", "utf-8", (err, data) => {
    if(err){
      console.log(err)
    } else{
      console.log("Updated file is shown: ")
      console.log(data)
    }
  });
  // console.log(data);

}
Solution();
module.exports = Solution;