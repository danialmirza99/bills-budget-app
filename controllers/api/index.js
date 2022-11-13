const router = require('express').Router();
const userRoutes = require('./userRoutes');
const budgetRoutes = require('./budgetRoutes');
const costRoutes = require('./costRoutes');
const calendarRoutes = require('./calendarRoutes');

router.use('/users', userRoutes);
router.use('/budget', budgetRoutes);
router.use('/cost', costRoutes);
router.use('/calendar', calendarRoutes);

module.exports = router;
