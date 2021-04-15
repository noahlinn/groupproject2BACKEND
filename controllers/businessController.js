const models = require('../models')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const businessController = {}


//adds business to business table
businessController.addOne = async (req,res) => {
    try {
        const decryptedId = jwt.verify(req.body.userId, process.env.JWT_SECRET)
        const newbusiness = await models.business.create({
            userId: decryptedId.userId,
            name: req.body.name,
            type: req.body.type,
            address: req.body.address,
            description: req.body.description
        })
        res.json({message: 'business added', newbusiness})
    } catch (error) {
      res.json({error})
    }
}

//gets all businesses & info
businessController.getAll = async (req,res) => {
    try {
        const allBusinesses = await models.business.findAll()
        res.json(allBusinesses)
    } catch (error) {
        res.json({error})
    }
}

//gets specific business and info then gets info on business owner
businessController.getInfo = async (req,res) => {
    try {
        const business = await models.business.findOne({where:{
            id: req.params.id
        }})
        const userId = business.userId
        const owner = await models.user.findOne({where:{
            id: userId
        }})
        res.json({business, owner})
    } catch (error) {
        res.json({error})
    }
}


//gets all users that have written a review on the business as well as the review
//(gets all reviews)
businessController.findReviews = async (req,res) => {
    try {
        const business = await models.business.findOne({where:{
            id: req.params.id
        },
    })
        const reviews = await business.getUsers()
        res.json({message: 'reviews on the business', reviews})
    } catch (error) {
        res.json({error: 'business has no reviews'})
    }
}



businessController.delete = async (req,res) => {
    try {
        const business = await models.business.findOne({where:{
            id: req.params.id
        }})
        await business.destroy()
        res.json({message: 'business deleted'})
    } catch (error) {
        res.json({error})
    }
}








module.exports = businessController;