const User = require("../models/user");

const seedUsers = [
  {
    firstName: "James",
    lastName: "Milord",
    dateOfBirth: "09/06/86"
  },
  {
    firstName: "Geraldine",
    lastName: "Prophete",
    dateOfBirth: "09/06/89"
  }
];

const newUser = {
    firstName: "Amarah",
    lastName: "Milord",
    dateOfBirth: "06/25/19"
};

const populateUsers = async () => {
  await User.deleteMany();
  await User.insertMany(seedUsers);
};

module.exports = { seedUsers, newUser, populateUsers };