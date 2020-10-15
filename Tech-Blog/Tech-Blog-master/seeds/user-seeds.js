const { User } = require('../models');

const userData = [
  {
    username: 'mdubon',
    password: 'test1'
    
  },
  {
    username: 'mdubon1407',
    password: 'test2'
  },
  {
    username: 'md',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;