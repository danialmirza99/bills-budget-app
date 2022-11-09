const { Budget } = require('../models');


const bugdetData = [
    
    {
        budget_limit: '',
        date: '',
        user_id: '',
    },

    {
        budget_limit: '',
        date: '',
        user_id: '',
    },

];


const seedBudget = () => Budget.bulkCreate(bugdetData);

module.exports = seedBudget;