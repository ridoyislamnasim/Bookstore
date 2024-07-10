import { Book } from '../../models/index.js';
import { NotFoundError } from '../../utils/errors.js';
import BaseRepository from '../base/base.repository.js';
import sequelize from 'sequelize';
const { Op } = sequelize;

class BookRepository extends BaseRepository {
  #model;
  constructor(model) {
    super(model);
    this.#model = model;
  }
  async createBook(payload) {
    const {title, description, published_date,author_id}= payload;
    const book = await this.create({
      title,
      description,
      published_date : new Date(published_date),
      author_id : author_id,
    });
    return book;
  }
  async updateBook(id, payload) {
      const bookExist = await Book.findByPk(id);
      if (!bookExist) throw new NotFoundError('Book not found');
  
      const { title, description, published_date, author_id } = payload;
      const [updated] = await Book.update(
        {
          title,
          description,
          published_date: new Date(published_date),
          author_id : author_id,
        },
        { where: { id } }
      );

      if (!updated) throw new Error('Book update failed');
      return await Book.findByPk(id);

  }
  async getSpecificAuthorBook(id){
    const books = await Book.findAll({ where: { author_id: id } });
    return books;

  }
  async getFilterBook(title){
    // filter books by title
    const books = await Book.findAll({
       where: { 
        title: { 
          [Op.like]: `%${title}%`
        } 
      } 
      });
    return books;
  }
  
}

export default new BookRepository(Book);
