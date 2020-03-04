const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')
const User = require('../models/user')

// homepage
router.get('/', (req, res) => {

  // admin can get all todo and owner's email
  if (req.user.email === 'admin@admin') {

    Todo.find()
      .sort({ name: 'asc' })
      .lean()
      .then(todos => {

        async function main(todos) {

          for (const todo of todos) {
            await User.findById(todo.userId)
              .lean()
              .then(user => {
                if (user) {
                  todo.userEmail = user.email
                }
              })
              .catch(err => {
                return console.error(err)
              })
          }

          return res.render('index', { todos })
        }
        main(todos)

      })
      .catch(err => {
        return console.error(err)
      })

    return
  }

  Todo.find({ userId: req.user._id })
    .sort({ name: 'asc' })
    .lean()
    .then(todos => {
      return res.render('index', { todos })
    })
    .catch(err => {
      return console.error(err)
    })
})

module.exports = router
