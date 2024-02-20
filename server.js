import express from 'express';
import dotenv from 'dotenv';
import router from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnection from './database/db.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({extended : true}));
app.use('/', router);

const PORT = process.env.PORT || 8000;



app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD
dbConnection(USERNAME,PASSWORD);
