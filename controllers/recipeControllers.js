const pool = require("../config/db");
// Главная
exports.getAllrecipes = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM recipes ORDER BY name ASC"); // Сортировку добавил по имени name DESC в обр. порядке имен
 console.log(rows);
  res.render("index", {
    title: "Главная-рецепты",
    rows: rows,
      });
};
// Страница Описания рецепта
exports.currentRecipe = async (req, res) => {
  const { rows } = await pool.query(
    `SELECT * FROM recipes WHERE id=${req.params.id}`
  );  
   const [recipeName] = rows;
 
  res.render("recipes", {
    title: `Рецепт - ${recipeName.name}`,  
    rows: rows[0],
  });
};
// Страница Добавления рецепта Get
exports.addRecipeGet = async (req, res) => {
  res.render("addrecipe");
};
// Добавления рецепта POST
exports.addRecipePost = async (req, res) => {
  const { name, ingredients, directions } = req.body;
 let photo = req.file ? req.file.filename : ""; // объект с фото получим  - сразу проверяем черех тернарный если нет фото  - пустую строку возвращаем
  if (name && ingredients && directions) { // если заполнены поля
     const formatter = new Intl.DateTimeFormat("ru", {
      year: "numeric",month: "long",day: "numeric",hour: "numeric",minute: "numeric",second: "numeric",
    });
    await pool.query(
      `INSERT INTO public.recipes (name, ingredients, directions, photo, date) VALUES ('${name}', '${ingredients}', '${directions}', '${photo}', '${formatter.format()}')`
    ); 
    res.redirect("/"); // редирект на Главную
  } else {
    // если не заполненые поля - показываем warning
    res.render("addrecipe", {
      warning: true,
      name: name, // передадим в поля ввода данные чтобы они не стирались при неправильном заполнении и перезагрузке
      ingredients: ingredients,
      directions: directions,
    });
  }
};
// Страница редактир. Рецепта - Get
exports.editRecipeGet = async (req, res) => {
  // получаем данные из БД чтобы вставить их в поля формы чтобы видеть что надо менять
  const { rows } = await pool.query(`SELECT * FROM recipes WHERE id = ${req.params.id}`
  );  
   res.render("editrecipe", {
    title: rows[0].name,
    rows: rows[0],  
    currentPhoto: rows[0].photo
  });
};
// Редактируем рецепт - Post
exports.editRecipePost = async (req, res) => {
 let photo = req.file ? req.file.filename : ""; // сразу проверяем
  // id - получим из скрытого input + его value
  const { id, name, ingredients, directions } = req.body;
  if (name && ingredients && directions) {
    
    await pool.query(
      `UPDATE recipes SET name='${name}', ingredients='${ingredients}', directions='${directions}', photo='${photo}' WHERE id = ${id}`
    );
    res.redirect(`/recipes/${id}`); // редирект на страницу этого рецепта
  } else {//показываем warning
    // еще раз получить данные из БД чтобы передать их в поля Input
    const { rows } = await pool.query(`SELECT * FROM recipes WHERE id = ${id}`);  
    res.render(`editrecipe`, {
      title: rows[0].name,
      rows: rows[0],  
      warning: true,
    });
  }
};
// Удаление рецепта  
exports.deleteRecipe = async (req, res) => {
 await pool.query(`DELETE FROM recipes WHERE id = ${req.params.id} `);  
  res.redirect("/"); // редирект на Главную
};



