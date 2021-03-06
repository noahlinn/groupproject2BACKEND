const models = require('../models')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const reviewController = {}

reviewController.addOne = async (req,res) => {
    try {
        const decryptedId = jwt.verify(req.body.userId, process.env.JWT_SECRET)
        const newReview = await models.review.create({
            userId: decryptedId.userId,
            businessId: req.body.businessId,
            rating: req.body.rating,
            title: req.body.title,
            description: req.body.description
        })

        res.json({message: 'review added', newReview})
    } catch (error) {
      res.json({error})
    }
}


reviewController.delete = async (req,res) => {
    try {
        const decryptedId = jwt.verify(req.params.userId, process.env.JWT_SECRET)
        const review = await models.review.findOne({where:{
            userId: decryptedId.userId,
            businessId: req.params.businessId
        }})
        await review.destroy()
        res.json({message: 'review deleted'})
    } catch (error) {
        res.json({error})
    }
}

reviewController.update = async (req,res) => {
    try {
        const updates = req.body
        const decryptedId = jwt.verify(req.params.userId, process.env.JWT_SECRET)
        const review = await models.review.findOne({where:{
            userId: decryptedId.userId,
            businessId: req.params.businessId
        }})
        const updatedReview = await review.update(updates)
        res.json({message: 'review updated', updatedReview})
    } catch (error) {
        res.json({error})
    }
}





module.exports = reviewController;