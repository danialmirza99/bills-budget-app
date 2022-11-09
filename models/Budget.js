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
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
            unique:false
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
module.exports = Budget;