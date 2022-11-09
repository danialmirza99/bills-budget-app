const sequelize = require('../config/connection');
const seedBudget = require('./bugdetData');
const seedCost = require('./costData');
const seedItem = require('./itemData');
const seedUser = require('./userData');


const seedAll = async () => {

    await sequelize.sync({ force : true});

    await seedBudget();
    await seedCost();
    await seedItem();
    await seedUser();

};


seedAll();