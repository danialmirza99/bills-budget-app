const router = require('express').Router();
const { User, Budget } = require('../../models');
const withAuth = require('../../utils/auth');


router.put('/', withAuth, async (req, res) => {
    try {
        const updateBudget = await Budget.update(req.body, {
            where: {
                user_id: req.session.user_id,
            },
        });
        res.status(200).json(updateBudget);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const addBudget = await Budget.create( {
            budget_limit: req.body.budget_limit,
            user_id: req.session.user_id,
        });
        res.status(200).json(addBudget);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;