import catchError from '../../middleware/errors/catchError.js';
import responseHandler from '../../utils/responseHandler.js';
import authorService from './author.service.js';

class AuthorController {
  createAuthor = catchError(async (req, res, next) => {
    const payload = {
      name : req.body.name,
      bio : req.body.bio,
      birthdate : req.body.birthdate,
    }
    const data = await authorService.createAuthor(payload);
    const resDoc = responseHandler(201, 'author create successfully', data);
    res.status(resDoc.statusCode).json(resDoc);
  });

  getAllAuthor = catchError(async (req, res, next) => {
    const query = {
      page : parseInt(req.query.page) || 1,
      limit : parseInt(req.query.limit) || 10,
      order : req.query.order,
    }
    const authors = await authorService.getAllAuthor(query);
    const resDoc = responseHandler(200, 'authors get successfully', authors);
    res.status(resDoc.statusCode).json(resDoc);
  });


  getAuthor = catchError(async (req, res, next) => {
    const { id } = req.params;
    const author = await authorService.findById(id);
    const resDoc = responseHandler(200, 'author get successfully', author);
    res.status(resDoc.statusCode).json(resDoc);
  });

  updateAuthor = catchError(async (req, res, next) => {
const payload = {
  name : req.body.name,
  bio : req.body.bio,
  birthdate : req.body.birthdate,
}
const id = req.params.id;
    await authorService.updateAuthor(id, payload);
    const resDoc = responseHandler(200, 'author update successfully');
    res.status(resDoc.statusCode).json(resDoc);
  });

  getWrittenSpecificAuthorBook = catchError(async (req, res, next) => {
    const id = req.params.id;
       const data = await authorService.getWrittenSpecificAuthorBook(id);
        const resDoc = responseHandler(200, 'specific author get successfully', data );
        res.status(resDoc.statusCode).json(resDoc);
      });

  deleteAuthor = catchError(async (req, res, next) => {
    const { id } = req.params;
    await authorService.deleteById(id);
    const resDoc = responseHandler(200, 'author delete successfully');
    res.status(resDoc.statusCode).json(resDoc);
  });
}

export default new AuthorController();
