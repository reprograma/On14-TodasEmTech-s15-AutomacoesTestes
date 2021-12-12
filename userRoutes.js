const express = require('express')
const router = express.Router()

const userController = require('./userController')

//@route GET /api/users/
//@desc Listar todos os cadastros
//@access Public
router.get('/', userController.getAll)

module.exports = router