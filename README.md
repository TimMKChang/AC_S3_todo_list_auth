# Todo List [Try Now!](https://mkc-todo.herokuapp.com/)
Built by 
- [Node.js](https://nodejs.org/en/)
- [express](https://www.npmjs.com/package/express)
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [method-override](https://www.npmjs.com/package/method-override)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Passport](https://www.npmjs.com/package/passport)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)

## Project Preview
![Project Preview](/public/image/todo_list_auth_preview.PNG)

## Features
- Todo List
- MongoDB
- CRUD operations
- RESTful
- Express Router
- Bootswatch
- Passport
- bcrypt
- Facebook login & Google login
- Partial template

| Method     | URL        | Action     |
|:----------:| ---------- | ---------- |
| GET        | /          | homepage   |
| GET        | /todos     | get all todos |
| GET        | /todos/new | get create page |
| GET        | /todos/:id | get one todo |
| POST       | /todos     | create todo   |
| GET        | /todos/:id/edit | get update page |
| PUT        | /todos/:id | update todo |
| DELETE     | /todos/:id | delete todo |
| GET        | /users/login    | get login page   |
| POST       | /users/login    | login   |
| GET        | /users/register | get register page   |
| POST       | /users/register | register   |
| GET        | /users/logout   | logout   |
| GET        | /auth/facebook  | login by Facebook   |
| GET        | /auth/facebook/callback   | Facebook login callback   |
| GET        | /auth/google    | login by Google   |
| GET        | /auth/google/callback     | Google login callback   |

## Installing
1. clone the project
>git clone https://github.com/TimMKChang/AC_S3_todo_list_auth.git
2. install packages
>npm install
3. run seeder in /models/seeds
>node todoSeeder.js
4. run the server
>npm run dev
5. check in cmd
>App is listening on [localhost:3000](http://localhost:3000)

## Contributor
<a href="https://github.com/TimMKChang" target="_blank">Tim Chang</a>
