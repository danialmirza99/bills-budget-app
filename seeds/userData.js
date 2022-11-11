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

const seedUser = async()=>{
await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
}
module.exports = seedUser;