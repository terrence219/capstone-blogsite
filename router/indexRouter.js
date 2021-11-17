const express = require('express')
const app = express()
const router = express.Router()
const controller = require('../controller/indexController')

router.get('/', controller.getPosts)
router.get('/create', controller.getCreatePost)
router.post('/', controller.createPost)
router.get('/edit/:id', controller.editPost)
router.get('/post/:id', controller.getPost)
router.get('/delete/:id', controller.deletePost)
router.get('/update/:id', controller.getUpdatePost)
router.post('/update/:id', controller.updatePost)
module.exports = router