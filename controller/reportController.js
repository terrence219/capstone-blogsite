const Post = require('../model/post')
const Report = require('../model/report')

const routerFunctions = {
  getReports: async (req, res) => {
    Report.getReports((err, data) => {
      if(err)
        res.sendStatus(500).send({
          message: err.message || "Error"
        })
      else
        res.send(data)
    })
  }
}

module.exports = routerFunctions