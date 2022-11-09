const { Item } = require('../models');


const itemData = [

    {
        name: 'food',
        due_date: '2022/11/30',
        amount: 50.04,
        cost_id: 1,
        user_id: 1
    },

    {
        name: 'electric bill',
        due_date: '2022/12/01',
        amount: 21.34,
        cost_id: 1,
        user_id: 1
    },

    {
        name: 'electric bill',
        due_date: '2022/11/01',
        amount: 22.34,
        cost_id: 2,
        user_id: 2
    },

];


const seedItem = () => Item.bulkCreate(itemData);

module.exports = seedItem;