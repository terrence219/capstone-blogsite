const express = require('express')
const app = express()
const router = express.Router()
const controller = require('../controller/indexController')

router.get('/', controller.getIndex)

module.exports = router