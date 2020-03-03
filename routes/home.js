const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

// homepage
router.get('/', (req, res) => {
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
