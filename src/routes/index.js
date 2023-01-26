const { Router } = require('express');
const { getAllDiets } = require('./diet.route')
const { getAllRecipes, getRecipesById, postRecipes,  } = require('./recipe.route')

// Importar todos los routers;

// const recipeRouter = require('./recipe.route')
// const dietRouter = require('./diet.route')



const router = Router();

// Configurar los routers

// router.use('/recipes', recipeRouter)
router.get('/diets', getAllDiets)
router.get('/recipes', getAllRecipes)
router.get('/recipes/:id', getRecipesById)
router.post('/recipes', postRecipes)


module.exports = router;
