const{Router}=require('express')  
const router =Router()
 
const recipeControllers = require('../controllers/recipeControllers')
 
const multer  = require('multer')  
const upload = multer({ dest: 'images/' })  
 // Главная
router.get('/', recipeControllers.getAllrecipes)  
// Описание текущего рецепта
router.route('/recipes/:id').get(recipeControllers.currentRecipe)
// Добавляем рецепт
router.route('/addrecipe')
.get(recipeControllers.addRecipeGet) 
.post( upload.single('file'), recipeControllers.addRecipePost) //  
// Страница  редактир.Рецепта -Get
router.route('/editrecipe/:id').get(upload.single('file'),recipeControllers.editRecipeGet) 
// Редактируем рецепт - Post
router.route('/editrecipe').post(upload.single('file'),recipeControllers.editRecipePost) 
// Удаляем рецепт - 
router.route('/removerecipe/:id').get(recipeControllers.deleteRecipe) 

module.exports= router  
