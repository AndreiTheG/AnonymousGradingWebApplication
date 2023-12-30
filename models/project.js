import {DataTypes} from 'sequelize'
import {sequelize} from '../sequelize.js'

const Project = sequelize.define('Project', {
    NumeProiect: {
      type: DataTypes.STRING,
      allowNull: false,
    },
});

module.exports = Project;