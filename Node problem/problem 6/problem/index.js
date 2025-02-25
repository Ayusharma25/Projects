// Please do not change the prewritten code

// Import axios package
const axios = require('axios');

const Solution = async () => {
  try {
    // Make an HTTP GET request to the given API endpoint
    const response = await axios.get('https://api.codingninjas.com/api/v3/event_tags');

    // Retrieve the response data
    const data = response.data;

    // Print the response data to the console
    console.log(data);
  } catch (error) {
    // Handle errors (if any)
    console.error('Error fetching data:', error.message);
  }
};

Solution();
module.exports = Solution;

