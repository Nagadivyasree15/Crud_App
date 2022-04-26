import express from 'express';
import mongoose from 'mongoose';
import route from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/users', route);
const { PORT, MONGODB_URL } = process.env;
const URL = MONGODB_URL;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running successfully on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Error:', error.message);
  });
