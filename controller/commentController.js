const Comment = require('../model/comment')
const Report = require('../model/report')

const routerFunctions = {
  addComment: (req, res) => {
    if (!req.body){
      res.sendStatus(400).send({
        message: "Content cannot be empty"
      })
    }

    const comment = new Comment({
      postID: req.params.id,
      content: req.body.content,
      date: new Date(),
      author_username: req.body.author
    })

    Comment.add(comment, (err, data) => {
      if (err)
      res.sendStatus(500).send({
        message: err.message || "An Error Occurred"
      })
      else {
        Report.addComment(req.params.id, (err, data) => {
          if (err)
          res.sendStatus(500).send({
            message: err.message || "An Error Occurred"
          })
          else res.redirect('/post/' + req.params.id)
        })
      }
    })
  }
}

module.exports = routerFunctions