const businessController = require('../controllers/businessController');
const express = require('express');
const businessRoutes = express.Router();



businessRoutes.post('/', businessController.addOne);



module.exports = businessRoutes;