const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cost  extends Model{}

Cost.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    // amount:{
    //     type: DataTypes.DECIMAL,
    //     allowNull:false
    // },
    // date:{
    //     type: DataTypes.STRING,
    //     allowNull: false,

    // },
    user_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    item_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'item',
            key: 'id'
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cost',
}

)
module.exports = Cost;