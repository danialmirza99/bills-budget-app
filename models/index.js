const User=require('./User');
const Budget=require('./Budget');
const Cost=require('./Cost');
const Item=require('./Item');
//one to one with budget and user
Budget.belongsTo(User,{
    foreignKey: 'user_id'
});
User.hasOne(Budget, {
    foreignKey: 'user_id',
    // When we delete a Reader, make sure to also delete the associated Library Card.
    onDelete: 'CASCADE',
});

//one to many relationship with 1 User and many items maybe dont need
User.hasMany(Item,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Item.belongsTo(User,{
    foreignKey: 'user_id'
});

Cost.hasMany(Item,{
    foreignKey: 'cost_id',
    onDelete: 'CASCADE'
});
Item.belongsToMany(Cost,{
    foreignKey: 'cost_id'
});





module.exports = {User, Budget,Item,Cost}
