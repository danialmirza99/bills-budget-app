const { Cost } = require('../models');


const costData = [
    
    {
        amount: '',
        date: '',
        user_id: '',
        item_id: '',
    },

    {
        budget_limit: '',
        date: '',
        user_id: '',
        item_id: '',
    },

];


const seedCost = () => Cost.bulkCreate(costData);

module.exports = seedCost;