const express = require('express')
const router = express.Router()
const User = require('../models/user')

// login page
router.get('/login', (req, res) => {
  return res.render('login')
})
// login check
router.post('/login', (req, res) => {
  return res.send('login')
})
// register page
router.get('/register', (req, res) => {
  return res.render('register')
})
// register check
router.post('/register', (req, res) => {
  return res.send('register')
})
// logout
router.get('/logout', (req, res) => {
  return res.send('logout')
})

module.exports = router
