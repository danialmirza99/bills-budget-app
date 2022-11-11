const router = require('express').Router();
const { User, Budget } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/:id', withAuth, async (req, res) => {
    try {
        const dbBudgetData = await Budget.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: [
                        'id',
                        'username'
                    ],
                },
            ],
        });

        const budget = dbBudgetData.get({ plain: true });
        res.render('budget', { budget, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});


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