const mongoose = require('mongoose')

const todoScheme = mongoose.Schema({
  name: String,
  state: {
    type: String,
    enum: ['active', 'completed'],
    default: 'active',
  },
})

const Todos = mongoose.model('todo', todoScheme)

module.exports = Todos
