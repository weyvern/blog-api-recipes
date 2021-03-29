import pool from '../db/pg.js';

export const getAllRecipes = async (req, res) => {
  try {
    const { rowCount, rows } = await pool.query('SELECT * FROM recipes');
    if (!rowCount) return res.json({ message: 'No recipes' });
    const recipes = rows.map(row => ({ ...row, ingredients: row.ingredients.split(',') }));
    res.json(recipes);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getSingleRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const { rowCount, rows } = await pool.query('SELECT * FROM recipes WHERE id=$1', [id]);
    if (!rowCount)
      return res.status(404).json({ message: `Recipe with id of ${id} doesn't exists` });
    const recipe = { ...rows[0], ingredients: rows[0].ingredients.split(',') };
    res.json(recipe);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const createRecipe = async (req, res) => {
  try {
    const { name, description, imgurl, instructions, ingredients } = req.body;
    if (!name || !description || !imgurl || !instructions || !ingredients)
      return res.status(400).json({
        message: 'Name, description, image, instructions and ingredients are mandatory fields'
      });
    const { rows } = await pool.query(
      `INSERT INTO recipes(
        name,
        description,
        imgUrl,
        instructions,
        ingredients) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, description, imgurl, instructions, ingredients]
    );
    const recipe = { ...rows[0], ingredients: rows[0].ingredients.split(',') };
    res.json(recipe);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateRecipe = async (req, res) => {
  res.send('Update');
};

export const deleteRecipe = async (req, res) => {
  res.send('Delete');
};
