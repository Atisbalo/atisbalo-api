const { Offer } = require('../_sequelize')

module.exports = {
  getAllOffers: (req, res) => {
    Offer.findAll().then(objects => res.status(200).send(objects)).catch(err => {
      res.status(500).send(err.messaje)
    })
  }
}
