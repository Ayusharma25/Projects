import axios from "axios";

export const userModel = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    return response.data.users; // Return only the users array
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
