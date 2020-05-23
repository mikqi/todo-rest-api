const express = require('express')
const router = express.Router()

const TodoCtrl = require('../../controllers/todos')

router.get('/', TodoCtrl.getAllTodos)
router.get('/:id', TodoCtrl.getTodo)
router.post('/', TodoCtrl.addNewTodo)
router.delete('/:id', TodoCtrl.deleteTodoById)
router.put('/:id', TodoCtrl.updateTodoById)

module.exports = router
