const userController = require('../controllers/userController');
const express = require('express');
const userRoutes = express.Router();


userRoutes.post('/', userController.signUp)
userRoutes.post('/login', userController.login)
userRoutes.get('/:id/businesses', userController.findBusinesses)
userRoutes.get('/:id/reviews', userController.findReviews)
userRoutes.get('/:id', userController.getUser)




module.exports = userRoutes;