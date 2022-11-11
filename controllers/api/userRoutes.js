const router = require('express').Router();
const { User } = require('../../models');


router.post('/login', async (req, res) => {
    try {
       const usernameData = await User.findOne({ where: { username: req.body.username } });
       console.log(req.body);
      if (!usernameData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      const validPassword = await usernameData.checkPassword(req.body.password);
      console.log(validPassword);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
      console.log(usernameData);
        req.session.save(() => {
        req.session.user_id = usernameData.id;
        req.session.logged_in = true;
        
        res.json({ user: usernameData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/signup', async (req, res) => {
    try {
      const newUserData = await User.create({
        username: req.body.username,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.logged_in = true;
  
        res.status(200).json(newUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


  module.exports = router;