import {DataTypes} from 'sequelize'
import {sequelize} from '../sequelize.js'

// const { DataTypes } = require('sequelize');
// const sequelize = require('../database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    tableName: 'Users'
});

module.exports = User;
