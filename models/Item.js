const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model{}

Item.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    due_date:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    amount:{
        type: DataTypes.DECIMAL,
        allowNull:false
    },
    cost_id:{
        references: {
            model: 'cost',
            key: 'id'
          }
    },
    user_id:{
        references: {
            model: 'user',
            key: 'id'
          }
    },
    

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'item',
}
)
module.exports = Item;