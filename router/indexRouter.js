const express = require('express')
const app = express()
const router = express.Router()
const post = require('../controller/postController')
const comment = require('../controller/commentController')
const report = require('../controller/reportController')

router.get('/', post.getPosts)
router.get('/create', post.getCreatePost)
router.post('/', post.createPost)
router.get('/edit/:id', post.editPost)
router.get('/post/:id', post.getPost)
router.get('/delete/:id', post.deletePost)
router.get('/update/:id', post.getUpdatePost)
router.post('/update/:id', post.updatePost)

router.post('/post/:id/add-comment', comment.addComment)

router.get('/reports', report.getReports)
module.exports = router