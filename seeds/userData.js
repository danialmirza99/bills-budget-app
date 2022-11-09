const { User } = require('../models');


const userData = [

    {
        username: 'user',
        password: 'password',
    },

    {
        username: 'name',
        password: '12345678',
    },

];


const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;