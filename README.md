# NodeJS_PostgreSQL_Project_RecipeBook
&nbsp;


![recipe-home](https://github.com/AntonioMikhailov/AntonioMikhailov/blob/main/assets/recipe-home.png)
![recipe-edit](https://github.com/AntonioMikhailov/AntonioMikhailov/blob/main/assets/recipe-edit.png)
## Задача
 1.	Создать приложение Книга Рецептов с возможностью просмотра, добавления, редактирования, удаления.
2.	В разработке использовать среду NodeJS (Express), СУБД PostgreSQL 
3.	Для формирования разметки использовать шаблонизатор HandleBars. 


&nbsp;
## Используемые языки, технологии, пакеты:
- NodeJS (Express), СУБД PostgreSQL(PgAdmin), 
- Multer, Sass


&nbsp;
## Реализация функционала и логики
 
- Для разработки приложения используем локальный сервер. 
- С помощью редактора PgAdmin создадим таблицу с ключами - id, name, ingredients, irections, photo, date
- Создадим структуру папок. Для удобства вынесем логику в файлы - controllers, routes.
- запросы к БД реализуем через пакет pg-pool
- отдельные моменты работы описаны в комментариях файлов приложениях 
&nbsp;
 ![recipe-code](https://github.com/AntonioMikhailov/AntonioMikhailov/blob/main/assets/recipe-code.png)
