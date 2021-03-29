import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import recipes from './routes/recipes.js';

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use('/recipes', recipes);

app.listen(port, () => console.log(`Server running on port ${port}`.yellow));
