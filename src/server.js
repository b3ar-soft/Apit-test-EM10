import express, { urlencoded, json } from 'express';

const app = express();

// Importing Routes
import index from './Routes/index';
import tasks from './Routes/tasks';

//settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(urlencoded({ extended: false }));
app.use(json());

//routes
app.use(index);
app.use('/tasks', tasks);

export default app;