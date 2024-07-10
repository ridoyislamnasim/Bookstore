import BaseService from '../base/base.service.js';
import bookRepository from './book.repository.js';

class BookService extends BaseService {
  #repository;
  constructor(repository, serviceName) {
    super(repository, serviceName);
    this.#repository = repository;
  }
  async createBook(payload){
    const book = this.#repository.createBook(payload);
    return book;
  }
  async updateBook(id, payload){
    const book = this.#repository.updateBook(id, payload);
    return book;
  }
  async getFilterBook(title){
    const book = this.#repository.getFilterBook(title);
    return book;
  }
  async getSpecificAuthorBook(id){
    const author = this.#repository.getSpecificAuthorBook(id);
    return author;
  }


}

export default new BookService(bookRepository, 'book');
