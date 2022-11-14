const User=require('./User');
const Budget=require('./Budget');
const Cost=require('./Cost');
const Item=require('./Item');
//one to one with budget and user
User.hasOne(Budget, {
    onDelete: 'CASCADE',
});
Budget.belongsTo(User,{
    foreignKey: 'user_id'
});



User.hasMany(Item,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Item.belongsToMany(User,{
    through:{
        model: Cost,
        unique:false
    }
});





module.exports = {User, Budget,Item,Cost}
