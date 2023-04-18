const express = require('express')
const router = express.Router()
const destinationsController = require('../controllers/destinations')

router.post('/flights/:flight_id/destinations', destinationsController.create)

router.delete('/:id', destinationsController.delete)

router.put('/:id', destinationsController.update)

module.exports = router;