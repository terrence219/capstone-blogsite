require('dotenv').config();
var User = require('../model/user')
const Post = require('../model/post')

const routerFunctions = {
  getPosts: (req, res) => {
    Post.getAll((err, data) => {
      if(err)
        res.sendStatus(500).send({
          message: err.message || "Error"
        })
      else
        res.send(data)
    })
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
      author_username: req.body.author_username
    })

    Post.create(post, (err, data) => {
      if (err)
        res.sendStatus(500).send({
          message: err.message || "An Error Occurred"
        })
      else res.send(data)
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
  }
}

module.exports = routerFunctions