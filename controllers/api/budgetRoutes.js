const router = require('express').Router();
const { User, Budget } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    try {
        const newBudget = await Budget.create({
            budget_limit: req.body.budget_limit,
            date: req.body.date,
        });
        res.status(200).json(newBudget);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;