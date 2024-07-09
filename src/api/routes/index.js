import { Router } from 'express';
import AuthorRouter from './author.route.js';
import BookRouter from './book.route.js';


const rootRouter = Router();
// rootRouter.use('/', (req, res, next) => {
//   res.json({ data: 'test' });
// });
rootRouter.use('/authors', AuthorRouter);
rootRouter.use('/books', BookRouter);

export default rootRouter;
