import { Author, Book } from '../../models/index.js';
import { NotFoundError } from '../../utils/errors.js';
import BaseRepository from '../base/base.repository.js';

class AuthorRepository extends BaseRepository {
  #model;
  constructor(model) {
    super(model);
    this.#model = model;
  }
  async createAuthor(payload) {
    const {name, bio, birthdate}= payload;
    const author = await this.create({
      name,
      bio,
      birthdate : new Date(birthdate),
    });
    return author;
  }
  async updateAuthor(id, payload) {
      const authorExist = await Author.findByPk(id);
      if (!authorExist) throw new NotFoundError('Author not found');
      const { name, bio, birthdate } = payload;
      const [updated] = await Author.update(
        {
          name,
          bio,
          birthdate: new Date(birthdate),
        },
        { where: { id } }
      );

      if (!updated) throw new NotFoundError('Author update failed');
      return await Author.findByPk(id);

  }
    async getAllAuthor(query) {
      const authors = await this.#model.findAll({
        ...query,
        include: [
          {
            model: Book,
          }
        ]
      });
  
      const [doc, count] = await Promise.all([authors, authors?.length]);
      return { doc, count };
    }


  async getWrittenSpecificAuthorBook(id){
    const writtenBooks = await this.#model.findAll({
      include: [
        {
          model: Book,
          as: 'books',
          required: true,
        },
      ],
      where: { id },
    });
    return writtenBooks;


  }
  
}

export default new AuthorRepository(Author);
