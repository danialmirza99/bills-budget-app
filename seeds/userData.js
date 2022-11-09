const { User } = require('../models');


const userData = [

    {
        username: '',
        password: '',
    },

    {
        username: '',
        password: '',
    },

];


const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;