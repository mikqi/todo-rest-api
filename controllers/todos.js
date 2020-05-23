const Todos = require('../models/todos')

module.exports.getAllTodos = (req, res) => {
  Todos.find((err, docs) => {
    if (err) {
      res.json({
        message: 'Failed to get all Todos',
        error: err,
      })
    }

    res.json({
      data: docs,
      message: 'success get all todo',
    })
  })
}

module.exports.getTodo = (req, res) => {
  const id = req.params.id
  Todos.findById(id, (err, docs) => {
    if (err) {
      res.json({
        message: 'Error while getting Todo',
        error: err,
      })
    }

    res.json({
      data: docs,
    })
  })
}

module.exports.addNewTodo = (req, res) => {
  const body = req.body

  const NewTodo = new Todos({
    name: body.name,
    phone: body.phone,
    email: body.email || '',
  })

  NewTodo.save((err, docs) => {
    if (err) {
      res.json({
        message: 'failed add new Todo',
      })
    }

    res.json({
      data: docs,
      message: 'success add new Todo',
    })
  })
}

module.exports.deleteTodoById = (req, res) => {
  const id = req.params.id

  Todos.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      res.json({
        message: 'Failed to delete Todo',
        error: err,
      })
    }

    res.json({
      message: `success delete Todo with id ${id}`,
    })
  })
}

module.exports.updateTodoById = (req, res) => {
  const id = req.params.id
  const body = req.body

  Todos.findById(id, (err, doc) => {
    if (err) {
      res.json({
        message: 'Failed to find user',
      })
    }

    doc.name = body.name || doc.name
    doc.phone = body.phone || doc.phone
    doc.email = body.email || doc.email

    doc.save((err, doc) => {
      if (err) {
        res.json({
          message: 'failed to update',
        })
      }

      res.json({
        message: 'success update',
      })
    })
  })
}
