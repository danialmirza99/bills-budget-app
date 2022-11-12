const router = require('express').Router();
const { response } = require('express');
const { User, Budget, Item, Cost } = require('../models');
const withAuth = require('../utils/auth');
const func = require('../utils/functions');

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
    const calendar = budgetData.map((budgetCalendar) => budgetCalendar.get({ plain: true }));

    res.render('homepage', { calendar, logged_in: req.session.logged_in })
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  else {
    res.render('login');
  }

});


router.get('/budget', withAuth, async (req, res) => {
  try {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Budget }, { model: Item }],
    });

    const user = userData.get({ plain: true });
    const items = user.items;
    const dates = items.map((item) => item.due_date);

    const indexArr = func.getIndex(func.arrDates(dates), year, month);

    const amounts = items.map((item) => item.amount);
    const cost = func.findAmounts(indexArr, amounts);

    let total = func.sum(cost);
    const remaining = user.budget.budget_limit - total;
    res.render('budget', { ...user, total, remaining,logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/cost', withAuth, async (req, res) => {
  try {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: { model: Item },     
    });

    const user = userData.get({ plain: true });
    const items = user.items;
    const dates = items.map((item) => item.due_date);

    const indexArr = func.getIndex(func.arrDates(dates), year, month);

    const amounts = items.map((item) => item.amount);
    const cost = func.findAmounts(indexArr, amounts);

    let total = func.sum(cost);
    res.render('cost', {
      ...user,
      total,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

    


router.get('/profile', withAuth, async (req, res) => {
  try {
    let today = new Date();
    let month = today.getMonth() + 1;
    let monthName = func.getMonthName(month);
    let year = today.getFullYear();

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Budget }, { model: Item }],
    });

    const user = userData.get({ plain: true });
    const items = user.items;
    const dates = items.map((item) => item.due_date);

    const indexArr = func.getIndex(func.arrDates(dates), year, month);

    const amounts = items.map((item) => item.amount);
    const cost = func.findAmounts(indexArr, amounts);
    const selectedItems = func.findAmounts(indexArr, items);

    let total = func.sum(cost);
    let yrtotal = func.sum(amounts);

    res.render('profile', {
      ...user,
      monthName,
      year,
      total,
      yrtotal,
      selectedItems,
      logged_in: true
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile/month/:month', withAuth, async (req, res) => {
  try {
    let today = new Date();
    let month = req.params.month;
    let monthName = func.getMonthName(month);
    let year = today.getFullYear();

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Budget }, { model: Item }],
    });

    const user = userData.get({ plain: true });
    const items = user.items;
    const dates = items.map((item) => item.due_date);

    const indexArr = func.getIndex(func.arrDates(dates), year, month);

    const amounts = items.map((item) => item.amount);
    const cost = func.findAmounts(indexArr, amounts);
    const selectedItems = func.findAmounts(indexArr, items);

    let total = func.sum(cost);
    let yrtotal = func.sum(amounts);

    res.render('profile', {
      ...user,
      monthName,
      year,
      total,
      yrtotal,
      selectedItems,
      logged_in: true
    });
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;