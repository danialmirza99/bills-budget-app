const { Item } = require('../models');


const itemData = [

    {
        name: '',
        due_date: '',
        amount: '',
        cost_id: '',
    },

    {
        name: '',
        due_date: '',
        amount: '',
        cost_id: '',
    },

];


const seedItem = () => Item.bulkCreate(itemData);

module.exports = seedItem;