import catchError from '../../middleware/errors/catchError.js';
import responseHandler from '../../utils/responseHandler.js';
import bookService from './book.service.js';

class BookController {
  createBook = catchError(async (req, res, next) => {
    const payload = {
      title: req.body.title,
      description: req.body.description,
      published_date: req.body.published_date,
      author_id: req.body.author_id,
    }
    const data = await bookService.createBook(payload);
    const resDoc = responseHandler(201, 'book create successfully', data);
    res.status(resDoc.statusCode).json(resDoc);
  });

  getAllBook = catchError(async (req, res, next) => {
    const books = await bookService.findAll();
    const resDoc = responseHandler(200, 'books get successfully', books);
    res.status(resDoc.statusCode).json(resDoc);
  });


  getBook = catchError(async (req, res, next) => {
    const { id } = req.params;
    const book = await bookService.findById(id);
    const resDoc = responseHandler(200, 'book get successfully', book);
    res.status(resDoc.statusCode).json(resDoc);
  });

  updateBook = catchError(async (req, res, next) => {
    const payload = {
      title: req.body.title,
      description: req.body.description,
      published_date: req.body.published_date,
      author_id: req.body.author_id,
    }
    const id = req.params.id;
    await bookService.updateBook(id, payload);
    const resDoc = responseHandler(200, 'book update successfully');
    res.status(resDoc.statusCode).json(resDoc);
  });

  getSpecificAuthorBook = catchError(async (req, res, next) => {
    const id = req.params.id;
      const data =  await bookService.getSpecificAuthorBook(id);
        const resDoc = responseHandler(200, 'specific author get successfully', data);
        res.status(resDoc.statusCode).json(resDoc);
      });

  deleteBook = catchError(async (req, res, next) => {
    const { id } = req.params;
    await bookService.deleteById(id);
    const resDoc = responseHandler(200, 'book delete successfully');
    res.status(resDoc.statusCode).json(resDoc);
  });
}

export default new BookController();
