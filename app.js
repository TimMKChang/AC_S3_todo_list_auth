const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/AC_S3_todo', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')
})

app.use(session({
  secret: 'secert for todo list',
  resave: false,
  saveUninitialized: true
}))

// require routes
app.use('/', require('./routes/home'))
app.use('/todos', require('./routes/todos'))
app.use('/users', require('./routes/users'))

app.listen(port, () => {
  console.log(`App is running on localhost:${port}`)
})
