const businessController = require('../controllers/businessController');
const express = require('express');
const { businessTest } = require('../controllers/userController');
const businessRoutes = express.Router();



businessRoutes.post('/', businessController.addOne);
businessRoutes.get('/', businessController.getAll);
businessRoutes.get('/:id', businessController.getInfo);
businessRoutes.get('/:id/reviews', businessController.findReviews);
businessRoutes.delete('/:id/delete', businessController.delete);
businessRoutes.put('/:id/update', businessController.update)
businessRoutes.get('/byName/:name', businessController.getByName)
businessRoutes.get('/byType/:type', businessController.getByType)


module.exports = businessRoutes;



