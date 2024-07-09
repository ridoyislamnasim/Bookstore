import 'dotenv/config';

const {
  NODE_ENV,
  PORTV1,
  HOST,
  LOCAL_DB_URL,
  LOCAL_DB_NAME_V1,
  LOCAL_DB_USER,
  LOCAL_DB_PASS,
  REMOTE_DB_URL,
  REMOTE_DB_USER,
  REMOTE_DB_PASS,
  JWT_ACCESS_SECRET_KEY,
  JWT_REFRESH_SECRET_KEY,
  UPLOAD_FOLDER,
  UPLOAD_PATH,
  REDIS_HOST,
  REDIS_PORT,
} = process.env;

const config = {
  port:  PORTV1 ,
  host: HOST,
  databaseName: LOCAL_DB_NAME_V1 ,
  // databaseName: NODE_ENV === 'dev' ? LOCAL_DB_NAME : REMOTE_DB_NAME,
  databaseUser: NODE_ENV === 'dev' ? LOCAL_DB_USER : REMOTE_DB_USER,
  databasePass: NODE_ENV === 'dev' ? LOCAL_DB_PASS : REMOTE_DB_PASS,
  databaseUrl: NODE_ENV === 'dev' ? LOCAL_DB_URL : REMOTE_DB_URL,
  jwtAccessSecretKey: JWT_ACCESS_SECRET_KEY,
  jwtRefreshSecretKey: JWT_REFRESH_SECRET_KEY,
  uploadFolder: UPLOAD_FOLDER,
  uploadPath: UPLOAD_PATH,
  redisHost: REDIS_HOST,
  redisPort: REDIS_PORT,
};

export default config;