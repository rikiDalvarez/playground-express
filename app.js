import express from 'express';
import bodyParser from 'body-parser';
import api from './routes/user.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/api", api);

export default app;
