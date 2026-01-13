// Please don't change the pre-written code

export const users = [
  { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];

export const registerUser = (user) => {
  users.push({
    id: users.length + 1,
    ...user,
  });
};

export const authenticateUser = (reqUser) => {
  return users.find(
    (user) =>
      user.email === reqUser.email &&
      user.password === reqUser.password
  );
};
