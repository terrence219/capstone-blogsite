const express = require('express')
const app = express()
const router = express.Router()
const controller = require('../controller/indexController')

router.get('/', controller.getPosts)
router.post('/', controller.createPost)
router.delete('/', controller.deletePost)
router.patch('/', controller.updatePost)
module.exports = router