const reviewController = require('../controllers/reviewController');
const express = require('express');
const reviewRoutes = express.Router();



reviewRoutes.post('/', reviewController.addOne);
reviewRoutes.delete('/:userId/:businessId/delete', reviewController.delete);
reviewRoutes.put('/:id/update', reviewController.update)


module.exports = reviewRoutes;