const router = require('express').Router();
const { User, Budget } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const budgetData = await Budget.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        const calendar = budgetData.map((budgetCalendar) => budgetCalendar.get({ plain: true}));

        res.render('homepage', { calendar, logged_in: req.session.logged_in})
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/budget/:id', async (req, res) => {
//     try{
//         const budgetData = await Budget.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: User,
//                     attributes: ['username'],
//                 },
//             ],
//         });
//         const calendar = budgetData.get({ plain: true});
//         res.render('calendar', { ...calendar,logged_in:req.session.logged_in});
//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// })

router.get('/profile', withAuth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Budget }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } 
    catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;