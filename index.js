import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import recipes from './routes/recipes.js';

const app = express();
const port = process.env.PORT || 5000;
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/recipes', recipes);

app.listen(port, () => console.log(`Server running on port ${port}`));
