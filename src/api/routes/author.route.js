import { Router } from 'express';
import controller from '../../modules/author/author.controller.js';
import { validateAuthor } from '../../middleware/validators/author/authorValidator.js';

const authorRouter = Router();
// authorRouter.use(jwtAuth);
authorRouter
  .post('/', validateAuthor, controller.createAuthor)
  .get('/', controller.getAllAuthor)

authorRouter
  .route('/:id')
  .get(controller.getAuthor)
  .put(validateAuthor,controller.updateAuthor)
  .delete(controller.deleteAuthor);
  // books written by a specific author
  authorRouter.get('/:id/books', controller.getWrittenSpecificAuthorBook)

export default authorRouter;
