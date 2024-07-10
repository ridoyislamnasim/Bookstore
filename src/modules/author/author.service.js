import pagination from '../../utils/pagination.js';
import BaseService from '../base/base.service.js';
import authorRepository from './author.repository.js';

class AuthorService extends BaseService {
  #repository;
  constructor(repository, serviceName) {
    super(repository, serviceName);
    this.#repository = repository;
  }
  async createAuthor(payload){
    const author = this.#repository.createAuthor(payload);
    return author;
  }
  async updateAuthor(id, payload){
    const author = this.#repository.updateAuthor(id, payload);
    return author;
  }
  async getAllAuthor(query) {
    const avatars = await pagination(query, async (limit, offset, order) => {
      const query = {
        offset: offset,
        limit: limit,
        order: [['id', `${order}`]],
      };
      const { doc, count } = await this.#repository.getAllAuthor(
        query,
      );
      return { doc, totalDoc: count };
    });
    return avatars;
  }

  async getFilterAuthor(name){
    const author = this.#repository.getFilterAuthor(name);
    return author;
  }

  async getWrittenSpecificAuthorBook(id){
    const author = this.#repository.getWrittenSpecificAuthorBook(id);
    return author;
  }


}

export default new AuthorService(authorRepository, 'author');
