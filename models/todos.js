const mongoose = require('mongoose')

const todoScheme = mongoose.Schema({
  name: String,
  done: {
    type: Boolean,
    default: false,
  },
})

const Todos = mongoose.model('todo', todoScheme)

module.exports = Todos
