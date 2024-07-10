
import { check, body, validationResult } from 'express-validator';
import moment from 'moment-timezone';
import responseHandler from '../../../utils/responseHandler.js';
;
// name bio birthdate
export const validateAuthor = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('name is a non-empty string.'),
    body('birthdate')
    .custom((value) => {
        if (!moment(value, 'MM/DD/YYYY', true).isValid()) {
            throw new Error('birthdate must be a valid date in the format DD/MM/YYYY.');
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
            const resDoc = responseHandler(400, 'author validation error', maperrors);
            res.status(resDoc.statusCode).json(resDoc);
        }
    }
];