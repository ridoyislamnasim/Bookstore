import db from '../../db/sequelize.js';
import { Author } from '../author/author.model.js';
const { sequelize, DataTypes } = db;

export const Book = sequelize.define(
  'book', 
  {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  published_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Author,
      key: 'id'
    },
    allowNull: false,
   
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

Author.hasMany(Book, { foreignKey: 'author_id' });
Book.belongsTo(Author, { foreignKey: 'author_id' });