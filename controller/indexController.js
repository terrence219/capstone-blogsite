require('dotenv').config();

const routerFuntions = {
  getIndex: (req, res) => {
    res.render('index')
  }
}

module.exports = routerFuntions