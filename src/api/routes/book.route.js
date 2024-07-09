import { Router } from 'express';
import controller from '../../modules/book/book.controller.js';
import { validateBook } from '../../middleware/validators/book/bookValidator.js';

const bookRouter = Router();
// bookRouter.use(jwtAuth);
bookRouter
  .post('/', validateBook, controller.createBook)
  .get('/', controller.getAllBook)

bookRouter
  .route('/:id')
  .get(controller.getBook)
  .put(validateBook, controller.updateBook)
  .delete(controller.deleteBook);

bookRouter.get('/author/:id', controller.getSpecificAuthorBook)

export default bookRouter;
