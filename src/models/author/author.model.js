import db from '../../db/sequelize.js';
const { sequelize, DataTypes } = db;

export const Author = sequelize.define(
  'author',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,// required
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true// optional
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);
