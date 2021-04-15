const models = require('../models')
// require('dotenv').config()
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
const reviewController = {}

reviewController.addOne = async (req,res) => {
    try {
        const newReview = await models.review.create({where: {
            userId: req.body.userId,
            businessId: req.body.businessId,
            rating: req.body.rating,
            title: req.body.title,
            description: req.body.description
        }
        })
        res.json({message: 'review added', newReview})
    } catch (error) {
      res.json({error})
    }
}


reviewController.delete = async (req,res) => {
    try {
        const review = await models.review.findOne({where:{
            id: req.params.id
        }})
        await review.destroy()
        res.json({message: 'review deleted'})
    } catch (error) {
        res.json({error})
    }
}





module.exports = reviewController;