import pool from '../db/pg.js';

export const getAllRecipes = async (req, res) => {
  const { rows } = await pool.query('SELECT NOW();');
  res.send(rows);
};

export const getSingleRecipe = async (req, res) => {
  res.send('Recipe');
};

export const createRecipe = async (req, res) => {
  res.send('Create');
};

export const updateRecipe = async (req, res) => {
  res.send('Update');
};

export const deleteRecipe = async (req, res) => {
  res.send('Delete');
};
