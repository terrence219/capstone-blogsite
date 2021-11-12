const Post = require('../model/post')
const hbs = require('hbs')
const { post } = require('../router/indexRouter')

const routerFunctions = {
  getPosts: (req, res) => {
    Post.getAll((err, data) => {
      if(err)
        res.sendStatus(500).send({
          message: err.message || "Error"
        })
      else
        res.render('index', {
          posts: data
        })
    })
  },

  getPost: (req, res) => {
    if (!req.params){
      res.sendStatus(400).send({
        message: "Content cannot be empty"
      })
    }

    Post.getPost(req.params.id, (err, data) => {
      if (err)
      res.sendStatus(500).send({
        message: err.message || "An Error Occurred"
      })
      else res.render('post',{
        title: data[0].title,
        date: data[0].date,
        author: data[0].author_username,
        content: data[0].content
      })
    })

  },

  getCreatePost: (req, res) => {
    res.render('create')
  },

  createPost: (req, res) => {
    if (!req.body){
      res.sendStatus(400).send({
        message: "Content cannot be empty"
      })
    }

    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      date: new Date(),
      author_username: req.body.author
    })

    Post.create(post, (err, data) => {
      if (err)
        res.sendStatus(500).send({
          message: err.message || "An Error Occurred"
        })
      else res.redirect('/')
    })
  },

  deletePost: (req, res) => {
    if (!req.body){
      res.sendStatus(400).send({
        message: "Content cannot be empty"
      })
    }

    Post.delete(req.body.id, (err, data) => {
      if (err)
        res.sendStatus(500).send({
          message: err.message || "An Error Occurred"
      })
      else res.send(data)
    })
  },

  updatePost: (req, res) => {
    if (!req.body){
      res.sendStatus(400).send({
        message: "Content cannot be empty"
      })
    }

    const post = {
      id: req.body.id,
      title: req.body.title,
      content: req.body.content
    }

    Post.update(post, (err, data) => {
      if (err)
        res.sendStatus(500).send({
          message: err.message || "An Error Occurred"
        })
      else res.send(data)
    })
  },
  editPost: (req, res) => {
    if(!req.params){
      res.sendStatus(400).send({
        message: "Content cannot be empty"
      })
    }

    Post.getPost(req.params.id, (err, data) => {
      if(err)
        res.sendStatus(500).send({
          message: err.message || "An Error Occurred"
        })
      else res.send(data[0])
    })
  }
}

module.exports = routerFunctions