const express = require('express')
const app = express()
const router = express.Router()
const controller = require('../controller/indexController')

router.get('/', controller.getPosts)
router.get('/create', controller.getCreatePost)
router.post('/', controller.createPost)
router.delete('/', controller.deletePost)
router.patch('/', controller.updatePost)
router.get('/edit/:id', controller.editPost)
router.get('/post/:id', controller.getPost)
module.exports = router