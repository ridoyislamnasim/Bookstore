import { body, validationResult } from 'express-validator';
import moment from 'moment-timezone';
import { Author } from '../../../models/index.js';
import responseHandler from '../../../utils/responseHandler.js';

export const validateBook = [
    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title must be a non-empty string.'),
    body('published_date')
        .custom((value) => {
            if (!moment(value, 'MM/DD/YYYY', true).isValid()) {
                throw new Error('Published date must be a valid date in the format MM/DD/YYYY.');
            }
            return true;
        }),
    body('author_id')
        .custom(async (value) => {
            // Perform database query to check if author_id exists
            const author = await Author.findByPk(value);
            if (!author) {
                throw new Error('Author_id must be a valid reference to an existing author.');
            }
            return true;
        }),
        (req, res, next) => {
            const error = validationResult(req);
            console.log(req.body)
            const maperrors = error.mapped();
            // formate errors ;only show the error msg
            const formateter = (error) => error.msg
            console.log(formateter)
            const er = error.formatWith(formateter);
            if (Object.keys(maperrors).length === 0) {
                next();
    
            } else {
                console.log(er.mapped())
                // res.status(500).json({ errors: maperrors })
                const resDoc = responseHandler(400, 'book validation error', maperrors);
                res.status(resDoc.statusCode).json(resDoc);
            }
        }
];
