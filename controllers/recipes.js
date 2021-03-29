export const getAllRecipes = async (req, res) => {
  res.send('Recipes');
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
