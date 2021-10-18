const express = require('express')
const router = express()
const controller = require('../controller/indexController')

router.get('/', controller.getIndex)

module.exports = router