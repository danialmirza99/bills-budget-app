const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Budget extends Model{}

Budget.init({

    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    budget_limit:{
        type: DataTypes.DECIMAL,
        allowNull:false
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id:{
        references: {
            model: 'user',
            key: 'id'
          }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'budget',
}
)
module.exports = Item;