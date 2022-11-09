const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model{}
User.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique username constraint
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        //make sure pass has min of 8chars
        validate: {
            isAlphanumeric: true,
            len: [8],
        },
      },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
)