const router = require('express').Router();
const { json } = require('sequelize');
const { User, Item } = require('../../models');
const withAuth = require('../../utils/auth');
const func = require('../../utils/functions')

router.post('/', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Item }],
          })
          
          if(userData !== null){

          

            const user = userData.get({plain:true});
            
            const items = user.items;
            const names = await items.map((item) => item.name);
            const dueDate = await items.map((item) => item.due_date);
            const amounts = await items.map((item) => item.amount);
            const formattedDates = await func.formatDates(dueDate);
            
      
            function createObj(items, names, dueDate){
              const calObj = [];
              for(let i = 0; i < items.length; i++){
                const itemObj = {};
                itemObj["title"] = `${names[i]}: $${amounts[i]}`;
                itemObj["start"] = dueDate[i];
                calObj.push(itemObj)
              }
              return calObj;
            }
            

            const costList = await createObj(items, names, formattedDates);
            res.status(200).send(costList);
          }

          else{
            res.status(200).send('null');
          }
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;