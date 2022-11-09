const { Budget } = require('../models');


const bugdetData = [
    
    {
        budget_limit: 1000.00,
        date: '2022/11/04',
        user_id: 1,
    },

    {
        budget_limit: 200.50,
        date: '2022/11/09',
        user_id: 2,
    },

];


const seedBudget = () => Budget.bulkCreate(bugdetData);

module.exports = seedBudget;