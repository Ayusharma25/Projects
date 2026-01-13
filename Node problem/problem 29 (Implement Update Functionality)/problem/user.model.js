// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
  {
    id: 1,
    name: "coding ninjas",
    email: "ninja@gmail.com",
    image: "https://entrackr.com/storage/2022/10/Coding-Ninjas.jpg",
  },
];

export const updateUsers = (user) => {
  // Validate input and convert id to number
  if (!user || typeof user.id === "undefined" || user.id === null) return false;

  const id = Number(user.id);
  if (Number.isNaN(id)) return false;

  // Find existing user by id
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) {
    // user not found
    return false;
  }

  // Update only allowed fields (name, email, image)
  const existing = users[idx];
  const updated = {
    ...existing,
    // use provided values if they exist, otherwise keep existing
    name: typeof user.name === "string" && user.name.trim() !== "" ? user.name : existing.name,
    email: typeof user.email === "string" && user.email.trim() !== "" ? user.email : existing.email,
    image: typeof user.image === "string" && user.image.trim() !== "" ? user.image : existing.image,
  };

  // Persist update back into the array
  users[idx] = updated;

  // Return the updated user
  return updated;
};
