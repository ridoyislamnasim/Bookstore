import Sequelize from 'sequelize';
import config from '../config/config.js';

const sequelize = new Sequelize(
  config.databaseName,
  config.databaseUser,
  config.databasePass,
  {
    host: 'localhost',
    dialect: 'mysql',
    // dialectOptions: {
    //   multipleStatements: true,
    //   // useUTC: false, // for reading from database
    // },
    // timezone: '+06:00', // for writing to database


  }
);

const db = {
  sequelize,
  DataTypes: Sequelize.DataTypes,
};

export default db;