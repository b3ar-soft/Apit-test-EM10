import express, { urlencoded, json } from 'express';

const app = express();

// Importing Routes

app.get('/', (req, res) => res.send('Hello world'));

//settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(urlencoded({ extended: false }));
app.use(json());

//routes

export default app;