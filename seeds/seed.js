const sequelize = require('../config/connection');
const seedBudget = require('./bugdetData');
const seedCost = require('./costData');
const seedItem = require('./itemData');
const seedUser = require('./userData');


const seedAll = async () => {

    await sequelize.sync({ force : true});

    await seedUser();

    await seedBudget();

    await seedItem();
    await seedCost();


};


seedAll();