import cors from 'cors';
import express from 'express';
import moment from 'moment-timezone';
import morgan from 'morgan';

import rootRouter from './api/routes/index.js';
import config from './config/config.js';
import db from './db/sequelize.js';
import globalErrorHandler from './middleware/errors/globalErrorHandler.js';

const { sequelize } = db;

const app = new express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

moment.tz.setDefault('Asia/Dhaka');
const currentDate = moment();
console.log(currentDate.format('YYYY-MM-DD HH:mm:ss'));

app.use(`/api${config.uploadPath}`, express.static(config.uploadFolder));
app.use('/api', rootRouter);
app.get('/api', (req, res, next) => {
  res.send('welcome to isle');
});

app.get('/time', (req, res, next) => {
  res.send(currentDate.format('YYYY-MM-DD HH:mm:ss'));
});

app.use(globalErrorHandler);

app.listen(config.port, config.host || '127.0.0.1', () => {
  console.log(`server running on port ${config.port}`);
  sequelize
    .authenticate()
    .then(async () => {
      await sequelize.query(
        `SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''))`
      );
      console.log('database connect successfully');
    })
    .catch((err) => {
      // console.log('unable to connect the database', err);
    });
  sequelize.sync({
    // alter: true,
    // force: true,
    logging: false
  });
});
