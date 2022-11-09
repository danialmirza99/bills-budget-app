const { Cost } = require('../models');


const costData = [
    
    {
        user_id: 1,
        item_id: 1,
    },

    {
        user_id: 2,
        item_id: 2,
    },

];


const seedCost = () => Cost.bulkCreate(costData);

module.exports = seedCost;