import express from 'express';
import {
  getAllRecipes,
  getSingleRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
} from '../controllers/recipes.js';

const recipes = express.Router();

// @route GET /
// @desc Get all recipes
// @access public
recipes.get('/', getAllRecipes);

// @route GET /:id
// @desc Get one recipe
// @access public
recipes.get('/:id', getSingleRecipe);

// @route POST /
// @desc Create new recipe
// @access public
recipes.post('/', createRecipe);

// @route PUT /:id
// @desc Update recipe
// @access public
recipes.put('/:id', updateRecipe);

// @route DEL /:id
// @desc Delete recipe
// @access public
recipes.delete('/:id', deleteRecipe);

export default recipes;
