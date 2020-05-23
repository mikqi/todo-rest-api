const express = require('express')
const router = express.Router()

router.use('/todos', require('./apis/todos'))

module.exports = router
