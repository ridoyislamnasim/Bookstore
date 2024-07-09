// import sequelize from '../../db/db.js';
import sequelize from '../../db/sequelize.js';
import catchError from '../errors/catchError.js';

const withTransaction = (handler) => {

	return catchError(async (req, res, next) => {
		const transaction = await sequelize.sequelize.transaction();
		try {
			await handler(req, res, next, transaction);
			await transaction.commit();
		} catch (err) {
			await transaction.rollback();
			next(err);
		}
	});
};

export default withTransaction;
