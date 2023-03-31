import dotenv from 'dotenv';
import ConectionDB from './src/config/ConectionDB';

dotenv.config({ path: 'variables.env' });

ConectionDB();
