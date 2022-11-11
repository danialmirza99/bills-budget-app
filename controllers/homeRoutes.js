const router = require('express').Router();
const { User, Budget, Item, Cost } = require('../models');
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

router.get('/login',(req, res) => {
    if(req.session.logged_in){
        res.redirect('/');
        return;
    }
    else{
        res.render('login');
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
        include: [{ model: Budget }, {model: Item}],
      });
  
      const user = userData.get({ plain: true });
      const items = user.items;
      const amounts = items.map((item) => item.amount);

      const sum = (arr) => {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += parseFloat(arr[i]);
        }
        return total;
      }

      let total=sum(amounts);
  
      res.render('profile', {
        ...user,
        total,
        logged_in: true
      });
    } 
    catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;