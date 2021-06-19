import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const { PORT, NODE_ENV, JWT_SECRET_KEY, AUTH_MODE = false } = process.env;

export const config = {
  PORT,
  NODE_ENV,
  JWT_SECRET_KEY,
  AUTH_MODE,
};
