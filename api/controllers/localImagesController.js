const { LocalImage } = require('../sequelize')
const { Log } = require('../services/logService')

module.exports = {
  getAllLocalImages: (req, res) => {
    LocalImage.findAll()
      .then((objects) => res.status(200).send(objects))
      .catch((err) => {
        Log.error(err)
        res.status(500).send(err)
      })
  }
}
