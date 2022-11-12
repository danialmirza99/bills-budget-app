const router = require('express').Router();
const { User, Cost, Item } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    try {
        const newItem = await Item.create({
            name: req.body.newBill,
            amount: req.body.newAmount,
            due_date: req.body.newDueDate,
            user_id: req.session.user_id,
        });
        res.status(200).json(newItem);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;