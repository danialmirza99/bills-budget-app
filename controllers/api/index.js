const router = require('express').Router();
const userRoutes = require('./userRoutes');
const budgetRoutes = require('./budgetRoutes');
const costRoutes = require('./costRoutes');

router.use('/users', userRoutes);
router.use('/budget', budgetRoutes);
router.use('/cost', costRoutes);

module.exports = router;
