const User = require("../models/user");
const uuid = require('uuid')

const seedUsers = [
  {
    _id: uuid.v4(),
    firstName: "James",
    lastName: "Milord",
    dateOfBirth: "09/06/86"
  },
  {
    _id: uuid.v4(),
    firstName: "Geraldine",
    lastName: "Prophete",
    dateOfBirth: "09/06/89"
  },
  {
    _id: 'testid',
    firstName: "test",
    lastName: "test2",
    dateOfBirth: "09/06/89"
  }
];

const newUser = {
    _id: uuid.v4(),
    firstName: "Amarah",
    lastName: "Milord",
    dateOfBirth: "06/25/19"
};

const populateUsers = async () => {
  await User.deleteMany();
  await User.insertMany(seedUsers);
};

module.exports = { seedUsers, newUser, populateUsers };