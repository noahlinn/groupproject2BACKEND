const reviewController = require('../controllers/reviewController');
const express = require('express');
const reviewRoutes = express.Router();



reviewRoutes.post('/', reviewController.addOne);
reviewRoutes.delete('/:id/delete', reviewController.delete);


module.exports = reviewRoutes;